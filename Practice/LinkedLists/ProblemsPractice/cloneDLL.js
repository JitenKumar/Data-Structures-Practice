/**
 * A linked list is given such that each node contains an additional random pointer which could point to any node in the list or null.

Return a deep copy of the list.

The Linked List is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

val: an integer representing Node.val
random_index: the index of the node (range from 0 to n-1) where random pointer points to, or null if it does not point to any node.
 
 * 
 * 
 */

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  let curr = head;
  while (curr != null) {
    newNode = new Node(curr.val);
    newNode.next = curr.next;
    curr.next = newNode;
    curr = curr.next.next;
  }
  curr = head;
  while (curr != null) {
    curr.next.random = curr.random ? curr.random.next : curr.random;
    curr = curr.next.next;
  }
  curr = head ? head : null;
  let dup_head = head ? head.next : head;
  while (curr && curr.next != null) {
    let tmp = curr.next;
    curr.next = curr.next.next;
    curr = tmp;
  }
  return dup_head;
};
