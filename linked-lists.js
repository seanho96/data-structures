class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

// Or in functional classses

const ListNode2 = (value) => {
    this.value = value;
    this.next = null;
}

const node = new ListNode(1);
node.next = new ListNode(2);
console.log(node);
const head = new ListNode(0);
head.next = node;
console.log(head);
