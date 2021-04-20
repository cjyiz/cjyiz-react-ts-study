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


var reverseList = function (head) {
    let arr = null
    let cur = head
    while (cur) {
        const next = cur.next
        cur.next = arr
        arr = cur
        cur = next
    }
    console.log('结果', arr)
    return arr
};
reverseList([5, 4, 3, 2, 1])