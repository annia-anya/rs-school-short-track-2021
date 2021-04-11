const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.start = null;
  }

  get size() {
    let length = 0;
    let currentElement = this.start;
    while (currentElement !== null) {
      currentElement = currentElement.next;
      length++;
    }
    return length;
  }

  enqueue(element) {
    const newElement = new ListNode(element);
    if (this.start === null) {
      this.start = newElement;
    } else {
      let currentElement = this.start;
      while (currentElement.next) {
        currentElement = currentElement.next;
      }
      currentElement.next = newElement;
    }
  }

  dequeue() {
    if (!this.start) {
      return null;
    }
    const { value } = this.start;
    this.start = this.start.next;
    return value;
  }
}

module.exports = Queue;
