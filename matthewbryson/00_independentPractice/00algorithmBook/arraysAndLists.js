// //Exercise 2.2:
// // Building an app for restaurants to take customer orders. 
// //Your app needs to store a list of orders. Servers keep adding orders to this list, and chefs take orders off the list & make them.
// //It's an order queue: servers add orders to the back of the queue and cooks it.

// //Blueprint for a Node class in JavaScript.
// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// //Blueprint for a LinkedLists class in JavaScript.
// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
    
// //Insert head aka first Node

// insertHead(data) {
//     //New method "insertHead"; creates an instance
//     //of Node within the LinkedList and assigns it to
//     //the head
//         this.head = new Node(data, this.head);
//         this.size++;
//     }
// }


// const ll = new LinkedList();
// ll.insertHead(1);
// ll.insertHead(2);
// console.log(ll)
//Outputs: LinkedList {head: Node { data: 99, next: Node { data: 1, next: null } }, size: 2}

//This is cool, but ugly. We can create a method to only print the data we want to see.
//We can also create a method to insert an element anywhere in the list.
// class Node {
//     constructor(data, next = null) {
//         this.data = data;
//         this.next = next;
//     }
// }

// class LinkedList {
//     constructor() {
//         this.head = null;
//         this.size = 0;
//     }
    

//     insertHead(data) {
//         this.head = new Node(data, this.head);
//         this.size++;
//     }

//     //How to add a node at the end of a list
//     insertLast(data) {
//         let last = new Node(data);
//         current = current.next;

//         while (current.next) {
//             current = current.next;
//         }
//         current.next = node;
//         this.size++;
//     }

//     insertAt(data, index) {
//         const node = new Node(data);
//         let previous;
//         let current = this.head;
//         let count = 0;

//     while (count < index) {
//         previous = current;
//         count++;
//         current = current.next = node;
//         this.size++;
//         }
//     }

    
//     //Pretty print of data
//     printData() {
//         let current = this.head;
//         while(current) {
//             console.log(current.data);
//             current = current.next;
//         }
//     }
// }

// const ll = new LinkedList();
// ll.insertHead(1);
// ll.insertHead(2);
// ll.printData()

//What about deleting a Node from a linked list?
class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    

    insertHead(data) {
        this.head = new Node(data, this.head);
        this.size++;
    }

    //How to add a node at the end of a list
    insertLast(data) {
        let last = new Node(data);
        current = current.next;

        while (current.next) {
            current = current.next;
        }
        current.next = node;
        this.size++;
    }

    insertAt(data, index) {
        const node = new Node(data);
        let previous;
        let current = this.head;
        let count = 0;

    while (count < index) {
        previous = current;
        count++;
        current = current.next = node;
        this.size++;
        }
    }

    remove(index) {
        let current = this.head;
        let previous;
        let count = 0;
        if (index === 0) {
            this.head = current.next;
    } else {
        while (count > index) {
            count++;
            previous = current;
            current = current.next;
        }
        previous.next = current.next
        }
        this.size--;
    }
    //Pretty print of data
    printData() {
        let current = this.head;
        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

const ll = new LinkedList();
ll.insertHead(1);
ll.insertHead(2);
ll.printData()