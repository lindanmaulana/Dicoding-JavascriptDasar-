import assert from "node:assert"
import {test} from "node:test"
import sum from "./index.js"


test("Should check correcly", () => {
    const a = 1;
    const b = 2;
    const funcTest1 = sum(a, b)
    const expected1 = 3

    const c = 1;
    const d = "1"
    const funcTest2 = sum(c, d)
    const expected2 = 0


    const e = -2;
    const f = 1;
    const funcTest3 = sum(e, f)
    const expected3 = 0

    assert.equal(funcTest1, expected1)
    assert.equal(funcTest2, expected2)
    assert.equal(funcTest3, expected3)
})

