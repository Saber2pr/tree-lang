/*
 * @Author: saber2pr
 * @Date: 2019-09-23 13:32:48
 * @Last Modified by: saber2pr
 * @Last Modified time: 2019-09-23 13:52:08
 */
const count = (str: string, ch: string) =>
  Array.from(str).reduce((acc, s) => (s === ch ? acc + 1 : acc), 0)

type Node = {
  name: string
  children?: Node[]
}

export const parse = (code: string) => {
  const lines = code.split("\n").filter(l => l)
  const root: Node = {
    name: "root",
    children: []
  }

  let currentParent: Node = null
  let prevNode = root
  let currentTab = 0

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const tab = count(line, " ")

    if (tab > currentTab) {
      currentTab = tab
      currentParent = prevNode
    }

    const node: Node = { name: line.trim() }
    if (tab === 0) {
      root.children.push(node)
      currentTab = 0
    } else {
      const children = currentParent.children || []
      children.push(node)
      currentParent.children = children
    }

    prevNode = node
  }

  return root
}
