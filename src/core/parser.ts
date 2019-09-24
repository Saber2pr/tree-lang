/*
 * @Author: saber2pr
 * @Date: 2019-09-23 13:32:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-09-24 15:51:02
 */
export const count = (
  str: string,
  ch: string,
  Break: (ch: string) => boolean = () => false
) =>
  Array.from(str).reduce<[number, boolean]>(
    ([acc, isBreak], s) =>
      Break(s)
        ? [acc, true]
        : !isBreak && s === ch
        ? [acc + 1, isBreak]
        : [acc, isBreak],
    [0, false]
  )[0]

const countWS = (line: string) => count(line, " ", ch => ch !== " ")

export interface Node {
  name: string
  children?: this[]
  parent?: this
  tab?: number
}

export const parse = <T extends Node>(
  code: string,
  mapper: (node: Node) => T = n => <T>n
): T => {
  const lines = code.split("\n")
  const root = mapper({
    name: "root",
    children: []
  })

  let currentParent: T = null
  let prevNode: T = root
  let currentTab = 0

  for (const line of lines) {
    const name = line.trim()
    if (!name) continue
    const tab = countWS(line)

    if (tab > currentTab) {
      currentTab = tab
      currentParent = prevNode
    }

    const node = mapper({ name })
    if (tab === 0) {
      root.children.push(node)
      currentTab = 0
    } else if (tab === currentTab) {
      const children = currentParent.children || []
      children.push(node)
      currentParent.children = children
      Object.defineProperty(node, "parent", {
        value: currentParent,
        enumerable: false
      })
      Object.defineProperty(node, "tab", {
        value: tab,
        enumerable: false
      })
    } else if (tab < currentTab) {
      const parent = getParent(currentParent, tab) || root
      parent.children.push(node)
    }

    prevNode = node
  }

  return root
}

const getParent = (node: Node, tab: number) => {
  let nodeTab = node.tab
  while (nodeTab >= tab) {
    nodeTab = node.tab
    node = node.parent
  }
  return node
}
