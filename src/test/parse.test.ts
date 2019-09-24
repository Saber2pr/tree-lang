import parse from ".."

describe("parser", () => {
  it("test1", () => {
    const code = `
parent1
  child1

parent2
  child1
  
  child 2

  child3
    child3_1
    child3_2
  
parent3
  child1
    childd1`

    const tree = {
      name: "root",
      test: "test",
      children: [
        {
          name: "parent1",
          test: "test",
          children: [
            {
              name: "child1",
              test: "test"
            }
          ]
        },
        {
          name: "parent2",
          test: "test",
          children: [
            {
              name: "child1",
              test: "test"
            },
            {
              name: "child 2",
              test: "test"
            },
            {
              name: "child3",
              test: "test",
              children: [
                {
                  name: "child3_1",
                  test: "test"
                },
                {
                  name: "child3_2",
                  test: "test"
                }
              ]
            }
          ]
        },
        {
          name: "parent3",
          test: "test",
          children: [
            {
              name: "child1",
              test: "test",
              children: [
                {
                  name: "childd1",
                  test: "test"
                }
              ]
            }
          ]
        }
      ]
    }

    expect(
      parse(code, n => {
        const node = { name: n.name, test: "test" }
        if (n.children) node["children"] = n.children
        return node
      })
    ).toEqual(tree)
  })
})
