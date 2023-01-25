//JavaScript program to Create and display singly linked list
class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class SinglyLinkedList {
    constructor(Head = null) {
        this.Head = Head
    }
add(newNode){
    let node = this.Head;
    if(node==null){
        this.Head = newNode;
        return;
    }
    while (node.next) {
        node = node.next;
    }
    node.next = newNode;
}
 displayList(){
    let node = this.Head;
    var str = ""
    while (node) {
        str += node.data + "->";
        node = node.next;
    }
    str += "NULL"
    console.log(str);
  }
}
let numList = new SinglyLinkedList();
numList.add(new Node(1));
numList.add(new Node(4));
numList.add(new Node(5));
numList.add(new Node(8));
numList.add(new Node(9));
numList.add(new Node(12));
numList.displayList();
