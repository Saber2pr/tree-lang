import parse from ".."

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
})
