//
// This is only a SKELETON file for the 'Linked List' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class LinkedList {
  constructor() {
    this.next;
    this.head;
    this.length = 0;

    this.Node = (value) => {
      return {
        value,
        next: null
      }
    }
  }

  // insert value at back
  push(value) {
    if (!this.head) {
      this.head = this.Node(value);
      this.length++;
      return this.head
    }
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    node.next = this.Node(value);
    this.length++;
    return node.next;
  }

  // remove value at back
  pop() {
    if (!this.head) {
      return `Empty list`;
    }

    let node = this.head;
    this.clean();

    while (node.next) {
      this.push(node.value);
      node = node.next;
    }

    return node.value;
  }

  //remove value at front
  shift() {
    if (!this.head) {
      return `Empty list`;
    }

    let node = this.head;
    const first = node.value;
    this.clean();

    while (node.next) {
      node = node.next;
      this.push(node.value);
    }

    return first;
  }

  // insert value at front
  unshift(value) {
    if (!this.head) {
      this.push(value);
      return this.head;
    }

    let node = this.head;
    this.clean();
    this.push(value); // add at first

    while (node.next) {
      this.push(node.value);
      node = node.next;
    }

    this.push(node.value); // add at last
    return value;
  }

  // delete the first occurence of a specified value
  delete(value) {
    if (!this.head) {
      return `Empty list`;
    }

    let node = this.head;
    let safe = '';
    this.clean();

    while (node.next) {
      if (node.value === value) {
        safe = value;
        value = '';
      } else {
        this.push(node.value);
      }
      node = node.next;
    }

    if (node.value !== value) {
      this.push(node.value);
    }

    return safe;
  }
  // find a specified value
  find(value) {
    if (!this.head) {
      return `Empty list`;
    }

    let node = this.head;
    let located = [];
    while (node.next) {
      if (node.value === value) {
        located.push(node.value);
      }

      node = node.next;
    }

    if (node.value === value) {
      located.push(node.value);
    }

    return located;
  }

  print() {
    let node = this.head;
    let print = '';
    while (node.next) {
      print += `${node.value}, `
      node = node.next;
    }

    return `${print}${node.value}`;
  }

  count() {
    return this.length;
  }

  clean() {
    this.head = '';
    this.length = 0;
  }
}