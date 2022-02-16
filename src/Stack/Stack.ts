class StackNode<T> {
  private _data: T;
  public next: StackNode<T> | null;

  constructor(data: T) {
    this._data = data;
    this.next = null;
  }

  public get data(): T {
    return this._data;
  }
}

interface IStack<T> {
  size: number;
  isEmpty: () => boolean;
  push: (element: T) => Stack<T>;
  front: () => T | undefined;
  pop: () => Stack<T>;
}

class Stack<T> implements IStack<T> {
  private head: StackNode<T> | null;
  private _front: StackNode<T> | null;
  private _size: number;

  constructor() {
    this.head = null;
    this._front = null;
    this._size = 0;
  }

  public get size(): number {
    return this._size;
  }

  public isEmpty(): boolean {
    return this._size === 0;
  }

  public push(element: T): Stack<T> {
    this._size++;

    const temp: StackNode<T> = new StackNode<T>(element);

    if (!this.head || !this._front) {
      this.head = temp;
      this._front = temp;
    } else {
      this._front.next = temp;
      this._front = temp;
    }

    return this;
  }

  public pop(): Stack<T> {
    if (!this.head) throw new Error("cannot pop from an empty stack");

    this._size--;
    let temp: StackNode<T> = this.head;

    while (temp.next && temp.next !== this._front) temp = temp.next;

    temp.next = null;
    this._front = temp;

    return this;
  }

  public front(): T | undefined {
    return this._front?.data;
  }
}

export { Stack };
