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

  it("front should be null when first created", () => {
    expect(queue.front()).to.be.undefined;
  });

  it("should not be empty after pushing one element, and the size should be 1", () => {
    queue.push(10);
    expect(queue.size).to.equal(1);
    expect(queue.isEmpty()).to.be.false;
  });

  it("size should be equal to the number of elements pushed to the queue", () => {
    queue.push(10);
    expect(queue.size).to.equal(1);

    queue.push(1).push(3).push(4);
    expect(queue.size).to.equal(4);
  });

  it("should reduce size when poping from the queue", () => {
    queue.push(109).push(2);
    expect(queue.size).to.equal(2);
    queue.pop();
    expect(queue.size).to.equal(1);
  });

  it("should not be able to pop from the queue if it's empty", () => {
    expect(() => queue.pop()).to.throw();
  });

  it("the front of the queue should be the first element pushed into the queue", () => {
    queue.push(10).push(30).push(22);
    expect(queue.front()).to.equal(10);
  });

  it("should pop the elements from the queue in a FIFO way", () => {
    queue.push(19).push(39).push(29);
    expect(queue.front()).to.equal(19);

    queue.pop();
    expect(queue.front()).to.equal(39);

    queue.pop();
    expect(queue.front()).to.equal(29);
  });
});
