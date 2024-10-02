import assert from "node:assert"
import {test} from "node:test"
import {sum} from "./index.js"

test("Should add correcly", () => {
    const a = 1;
    const b = 2;

    const sumFunc = sum(a, b)

    const expectedResult = 3;

    assert.equal(sumFunc, expectedResult)
})