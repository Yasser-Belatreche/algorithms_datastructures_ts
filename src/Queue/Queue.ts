interface IQueue<T> {
  size: number;
  isEmpty(): boolean;
  push(data: T): Queue<T>;
}

class Queue<T> implements IQueue<T> {
  private _size: number;

  constructor() {
    this._size = 0;
  }

  public get size(): number {
    return 0;
  }

  isEmpty(): boolean {
    return true;
  }

  push(data: T): Queue<T> {
    return this;
  }
}

export { Queue };
