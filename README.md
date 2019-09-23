# @saber2pr/tree-lang

> a tree language.

```bash
yarn add @saber2pr/tree-lang
```

# Examlpe

1. code like this

```bash
parent1
  child1
parent2
  child1
  child2
parent3
  child1
    childd1
```

2. parse

```ts
import parse from "@saber2pr/tree-lang"

parse(code)
/*
{
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
*/
```

---

## start

```bash
yarn install
```

```bash
yarn start

yarn test
```

> Author: saber2pr
