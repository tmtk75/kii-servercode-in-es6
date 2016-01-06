import assert from "power-assert"
import {summary} from "../src/summary.js"

describe("summary", _ => {

  it("should be function", () => {
    assert(summary instanceof Function)
  });

  it("should retrun length", () => {
    assert(3 === summary("abc"))
  });

  it("should retrun 0 for null", () => {
    assert(0 === summary(null))
  });
});
