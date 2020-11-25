/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  if (headA === null || headB == null) return null;
  let l1 = 0,
    l2 = 0;
  let ptr1 = headA,
    ptr2 = headB;
  while (ptr1) {
    l1++;
    ptr1 = ptr1.next;
  }
  while (ptr2) {
    l2++;
    ptr2 = ptr2.next;
  }
  if (l1 > l2) {
    ptr1 = headA;
    ptr2 = headB;
  } else {
    ptr1 = headB;
    ptr2 = headA;
  }
  let diff = Math.abs(l1 - l2);
  while (diff > 0) {
    diff--;
    ptr1 = ptr1.next;
  }
  while (ptr1 && ptr2) {
    if (ptr1 === ptr2) return ptr1;
    ptr1 = ptr1.next;
    ptr2 = ptr2.next;
  }
  return null;
};
