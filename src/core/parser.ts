/*
 * @Author: saber2pr
 * @Date: 2019-09-23 13:32:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-09-24 22:47:06
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
  [key: string]: any
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

  let currentParent: Node = root
  let prevNode: Node = null
  let currentTab = 0

  for (const line of lines) {
    const name = line.trim()
    if (!name) continue
    const tab = countWS(line)

    if (tab > currentTab) {
      currentTab = tab
      currentParent = prevNode
    }

    const node = { name }

    if (tab === 0) {
      setMeta<Node>(node, ["parent", root], ["tab", 0])
      root.children.push(mapper(node))
      currentTab = 0
    } else if (tab === currentTab) {
      const children = currentParent.children || []
      setMeta<Node>(node, ["parent", currentParent], ["tab", tab])
      children.push(mapper(node))
      currentParent.children = children
    } else if (tab < currentTab) {
      const parent = getParent(currentParent, tab)
      setMeta<Node>(node, ["parent", parent], ["tab", tab])
      parent.children.push(mapper(node))
      currentTab = tab
      currentParent = parent
    }

    prevNode = node
  }

  return root
}

export const getAbsPath = (n: Node, slash = "/") => {
  let result = ""
  let node = n.parent
  while (node) {
    if (node.name === "root") break
    result = `${node.name}${slash}` + result
    node = node.parent
  }
  return result + n.name
}
