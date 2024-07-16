/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    if (root === null)
    {
        return [];
    }
    return [...postorderTraversal(root.left), ...postorderTraversal(root.right), root.val];
};

class TreeNode
{
    constructor(val)
    {
        this.val = val;
        this.left = null;
        this.right = null;
    }

    setLeftNode(node)
    {
        this.left = node;
        return this;
    }
    setRightNode(node)
    {
        this.right = node;
        return this;
    }
}

// Tree - 
//                   1
//             null        2
//                    5         8
//                 4     7
let node1 = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(5);
let node4 = new TreeNode(4);
let node5 = new TreeNode(7);
let node6 = new TreeNode(8);

node1.setRightNode(node2);
node2.setLeftNode(node3).setRightNode(node6);
node3.setLeftNode(node4).setRightNode(node5);

// Result [4, 7, 5, 8, 2, 1]
console.log(postorderTraversal(node1));