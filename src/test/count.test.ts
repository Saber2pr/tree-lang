import { countWS } from "../core"

describe("count", () => {
  it("test1", () => {
    expect(countWS("    async & await原理")).toBe(4)
  })
})
