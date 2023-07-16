const _count = new WeakMap();
const _container = new WeakMap();

class Stack {
  constructor() {
    _count.set(this, 0);
    _container.set(this, []);
  }

  get count() {
    return _count.get(this);
  }

  push(value) {
    _container.get(this).push(value);
    _count.set(this, this.count + 1);
  }

  pop() {
    if (_container.get(this).length === 0) throw new Error("Stack is empty");
    const poppedProperty = _container.get(this).pop();
    _count.set(this, this.count - 1);
    return poppedProperty;
  }

  peek() {
    if (_container.get(this).length === 0) throw new Error("Stack is empty");
    const peekedProperty =
      _container.get(this)[_container.get(this).length - 1];
    return peekedProperty;
  }
}

const s = new Stack();
