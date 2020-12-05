/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let dummyNode = new ListNode(0);
    dummyNode.next=head;
    let prev=dummyNode,current=head;
    while(current!=null){
        while (current.next !=null && prev.next.val===current.next.val){
            current=current.next;
        }
        if (prev.next===current) prev=current;
        else prev.next=current.next;
        current=current.next;
    }
    return dummyNode.next;
};