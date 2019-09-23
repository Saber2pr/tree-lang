import parse from ".."

describe("parser", () => {
  it("test1", () => {
    const code = `
parent1
  child1
parent2
  child1
  child2
parent3
  child1
    childd1`

    const tree = {
      name: "root",
      children: [
        {
          name: "parent1",
          children: [
            {
              name: "child1"
            }
          ]
        },
        {
          name: "parent2",
          children: [
            {
              name: "child1"
            },
            {
              name: "child2"
            }
          ]
        },
        {
          name: "parent3",
          children: [
            {
              name: "child1",
              children: [
                {
                  name: "childd1"
                }
              ]
            }
          ]
        }
      ]
    }

    expect(parse(code)).toEqual(tree)
  })
})
