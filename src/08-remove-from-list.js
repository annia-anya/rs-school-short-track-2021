/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let start = l;
  let previousElement = null;
  let currentElement = l;
  do {
    if (currentElement.value === k) {
      if (currentElement === start) { // Case 1: Current element is start;
        start = currentElement.next;
        currentElement.next = null;
        currentElement = start;
      } else { // Case 3: Current element is in the middle;
        previousElement.next = currentElement.next;
        currentElement = currentElement.next;
      }
    } else {
      previousElement = currentElement;
      currentElement = currentElement.next;
    }
  } while (currentElement.next);

  if (currentElement.value === k) {
    previousElement.next = null;
  }

  return start;
}

module.exports = removeKFromList;
