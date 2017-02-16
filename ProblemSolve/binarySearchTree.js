

class Node{
    constructor(value){
        this.value = value;
        this.left = undefined;
        this.right = undefined;
    }
}


class binarySearchTree{
    constructor(value){
        this.root = new Node(value);
    }

    add(newNode){
        let root = this.root;
        if(newNode.value < root.value){
            root.left = newNode;
        } else{
            root.right = newNode;
        }
    }
}


let root = new Node(40);
let treeTeam = new binarySearchTree(root);
treeTeam.add(new Node(25));
treeTeam.add(new Node(78));
treeTeam.add(new Node(79));

console.log(treeTeam);
