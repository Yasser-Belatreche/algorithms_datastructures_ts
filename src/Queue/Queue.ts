class QueueNode<T> {
  public next: QueueNode<T> | null;
  private _data: T;

  constructor(data: T) {
    this._data = data;
    this.next = null;
  }

  public get data(): T {
    return this._data;
  }
}

interface IQueue<T> {
  size: number;
  isEmpty(): boolean;
  push(data: T): Queue<T>;
  pop(): Queue<T>;
  front(): T | undefined;
}

class Queue<T> implements IQueue<T> {
  private _size: number;
  private _head: QueueNode<T> | null;
  private _tail: QueueNode<T> | null;

  constructor() {
    this._size = 0;
    this._head = null;
    this._tail = null;
  }

  public get size(): number {
    return this._size;
  }

  isEmpty(): boolean {
    return this._size === 0;
  }

  push(data: T): Queue<T> {
    this._size++;

    const temp = new QueueNode(data);
    if (!this._head || !this._tail) {
      this._head = temp;
      this._tail = temp;
    } else {
      this._tail.next = temp;
      this._tail = temp;
    }

    return this;
  }

  pop(): Queue<T> {
    if (!this._head) throw new Error("cannot pop from an empty queue");

    this._size--;
    this._head = this._head.next;

    return this;
  }

  front(): T | undefined {
    return this._head?.data;
  }
}

export { Queue };
