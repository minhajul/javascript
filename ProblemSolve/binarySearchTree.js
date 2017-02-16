class Node {
    constructor(value){
        this.value= value;
        this.left = undefined;
        this.right = undefined;
    }
}

class BinarySearchTree{
    constructor(root){
        this.root = root;
    }

    add(newNode){
        let currentNode = this.root;
        while(currentNode){
            if(newNode.value < currentNode.value){
                if(currentNode.left === undefined){
                    currentNode.left = newNode;
                    break;
                } else{
                    currentNode = currentNode.left;
                }
            } else{
                if(currentNode.right === undefined){
                    currentNode.right = newNode;
                    break;
                } else{
                    currentNode = currentNode.right;
                }
            }
        }
    }
}



let root = new Node(40);
let treeTeam = new BinarySearchTree(root);

let first = new Node(25);
treeTeam.add(first);

let second = new Node(78);
treeTeam.add(second);

let third = new Node(10);
treeTeam.add(third);

let fourth = new Node(65);
treeTeam.add(fourth);

let fifth = new Node(75);
treeTeam.add(fifth);

let sixth = new Node(30);
treeTeam.add(sixth);

console.log(treeTeam);
