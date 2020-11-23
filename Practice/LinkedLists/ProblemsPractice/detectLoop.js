/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    let slow=head,fast=head
    while(slow&&fast&&fast.next){
        slow=slow.next;
        fast=fast.next.next;
        if(slow===fast)
            return true;
    }
    return false;
    
};

var hasCycle1 = function(head) {
    //Using hashTable or set
    let hashTable= new Set();
    let current = head;
    while(current){
        if(hashTable.has(current)){
            return true;
        }else{
            hashTable.add(current);
        }
        current=current.next;
    }
    return false;
    
};
