import { expect } from "chai";

import { Queue } from "./Queue";

describe("Queue", () => {
  let queue: Queue<number>;

  beforeEach(() => {
    queue = new Queue<number>();
  });

  it("should be empty when first created", () => {
    expect(queue.isEmpty()).to.be.true;
  });

  it("should have size of 0 when first created", () => {
    expect(queue.size).to.equal(0);
  });

  it("should not be empty after pushing one element, and the size should be 1", () => {
    queue.push(10);
    expect(queue.size).to.equal(1);
    expect(queue.isEmpty()).to.be.false;
  });
});
