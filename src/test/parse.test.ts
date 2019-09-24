import { parse, getAbsPath } from ".."

describe("parser", () => {
  it("test1", () => {
    const code = `
CSS层叠样式表
  flex
  三角形
  垂直居中

Github-API
  github鉴权1
  使用github-issue api做评论系统

Git版本控制
  branch
    branch1
    branch2
  checkout
`

    const tree = {
      name: "root",
      children: [
        {
          name: "CSS层叠样式表",
          children: [
            {
              name: "flex"
            },
            {
              name: "三角形"
            },
            {
              name: "垂直居中"
            }
          ]
        },
        {
          name: "Github-API",
          children: [
            {
              name: "github鉴权1"
            },
            {
              name: "使用github-issue api做评论系统"
            }
          ]
        },
        {
          name: "Git版本控制",
          children: [
            {
              name: "branch",
              children: [
                {
                  name: "branch1"
                },
                {
                  name: "branch2"
                }
              ]
            },
            {
              name: "checkout"
            }
          ]
        }
      ]
    }

    expect(parse(code)).toEqual(tree)
  })

  it("test path", () => {
    const code = `
node1
  node1_1
    node1_1_1
  node1_2`

    const tree = {
      name: "root",
      children: [
        {
          name: "node1",
          path: "node1",
          children: [
            {
              name: "node1_1",
              path: "node1/node1_1",
              children: [
                {
                  name: "node1_1_1",
                  path: "node1/node1_1/node1_1_1"
                }
              ]
            },
            {
              name: "node1_2",
              path: "node1/node1_2"
            }
          ]
        }
      ],
      path: "root"
    }

    expect(
      parse(code, n => {
        n.path = getAbsPath(n)
        return n
      })
    ).toEqual(tree)
  })
})
