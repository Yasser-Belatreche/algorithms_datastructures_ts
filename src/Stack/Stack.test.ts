import { expect } from "chai";

import { Stack } from "./Stack";

describe("Stack", () => {
  let stack: Stack<number>;

  beforeEach(() => {
    stack = new Stack();
  });

  it("should be empty when first initilized", () => {
    expect(stack.isEmpty()).to.be.true;
  });

  it("should have size of 0 when first initilized", () => {
    expect(stack.size).to.equal(0);
  });

  it("should not be empty and not have size of 0 after pushing an element", () => {
    stack.push(1);
    expect(stack.isEmpty()).to.be.false;
    expect(stack.size).to.not.equal(0);
  });

  it("the size should be equal to the number of elements pushed to the stack", () => {
    stack.push(1);
    expect(stack.size).to.equal(1);

    stack.push(2).push(3).push(4);
    expect(stack.size).to.equal(4);
  });

  it("the front of the stack should be the last elements pushed into the stack", () => {
    stack.push(1).push(2).push(3);
    expect(stack.front()).to.equal(3);
  });

  it("should be able to push pop the elements in a LIFO way", () => {
    stack.push(1).push(2).push(3).push(4);
    expect(stack.front()).to.equal(4);

    stack.pop();
    expect(stack.front()).to.equal(3);
  });

  it("should not be able to pop from an empty stack", () => {
    expect(() => stack.pop()).to.throw();
  });

  it("should decrease the size of the stack after each pop", () => {
    stack.push(1).pop();
    expect(stack.size).to.equal(0);

    stack.push(2).push(4).push(8).pop();
    expect(stack.size).to.equal(2);
  });
});
