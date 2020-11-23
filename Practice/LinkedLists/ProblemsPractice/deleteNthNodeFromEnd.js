/**
 * 19. Remove Nth Node From End of List

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:


Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]
 

Constraints:

The number of nodes in the list is sz.
1 <= sz <= 30
0 <= Node.val <= 100
1 <= n <= sz
 * 
 * 
 * 
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var removeNthFromEnd = function (head, n) {
  /**
   * Take a dummy node and point it to the head . We want to reach the node to delete -1 position
   * Get the length of the list by traversing the list
   * start the first point till the Length -n and update the pointers
   */
  var dummyNode = new ListNode(0,null);
    dummyNode.next = head;
    var length = 0;
    var first = head;
    while (first) {
        length += 1;
        first = first.next;
    }
    length-=n;
    first = dummyNode;
    while (length > 0) {
        length -= 1;
        first = first.next;
    }
    first.next=first.next.next;
    return dummyNode.next;
};

var removeNthFromEnd1 = function (head, n) {
    /**
     * Instead of using two loop we want to traverse the list only once and
     * In this case we will use two pointers first poiting to dummy node and
     * One pointer will move n steps at first then we will traverse the both pointeres one by one till the first reaches the end 
     * 
     * We will update the links between
     */
    var dummyNode = new ListNode(0,null);
    dummyNode.next=head;
    let first=dummyNode,second=dummyNode;
    for(let i=0;i<n+1;i++) {
        first=first.next;
    }
    while (first){
        first=first.next;
        second=second.next;
    }
    second.next=second.next.next;
    return dummyNode.next;
  };