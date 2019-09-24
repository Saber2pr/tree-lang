/*
 * @Author: saber2pr
 * @Date: 2019-09-23 13:32:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-09-24 16:31:13
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

export const countWS = (line: string) => count(line, " ", ch => ch !== " ")

export const setMeta = <T>(target: T, ...metas: [keyof T, any][]): T =>
  Object.defineProperties(
    target,
    metas.reduce<PropertyDescriptorMap>(
      (acc, [k, v]) => ({
        ...acc,
        [k]: { value: v, enumerable: false }
      }),
      {}
    )
  )

export interface Node {
  name?: string
  children?: this[]
  parent?: this
  tab?: number
}

export const getParent = (node: Node, nodeTab: number) => {
  let tab = node.tab
  while (tab >= nodeTab) {
    node = node.parent
    tab = node.tab
  }
  return node
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

  let currentParent = root
  let prevNode: T = null
  let currentTab = 0

  for (const line of lines) {
    const name = line.trim()
    if (!name) continue
    const tab = countWS(line)
    const node = mapper({ name })

    if (tab > currentTab) {
      currentTab = tab
      currentParent = prevNode
    }

    if (tab === 0) {
      root.children.push(node)
      currentTab = 0
    } else if (tab === currentTab) {
      const children = currentParent.children || []
      children.push(node)
      currentParent.children = children
      setMeta(node, ["parent", currentParent], ["tab", tab])
    } else if (tab < currentTab) {
      const parent = getParent(currentParent, tab)
      parent.children.push(node)
      currentTab = tab
    }

    prevNode = node
  }

  return root
}
