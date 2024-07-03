/**
 * @param {number} capacity
 */

class Node
{
    constructor(key, value)
    {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

var LRUCache = function(capacity) {
    this.maxSize = capacity;
    this.LRUHead = null;      // the head is the least used node
    this.LRUTail = null;      // the tail is the most frequent used node
    this.map = new Map([]);
};

LRUCache.prototype.updateQueue = function(lastAccessNode) 
{
    // If not yet set Head
    if (!this.LRUHead)
    {
        this.LRUHead = lastAccessNode;
    }
   
    // If not yet set Tail
    if (!this.LRUTail)
    {
        this.LRUTail = lastAccessNode;
    }
    // If the LastAccessNode not at the Tail
    else if (this.LRUTail != lastAccessNode)
    {
        // check if lastAccessNode had prev or next
        // by pass the lastAccessNode to join prev node to next node
        if (lastAccessNode.next)
        {
            lastAccessNode.next.prev = lastAccessNode.prev;

            // if the next node prev become null, it means the lastAccessNode is the head
            // Then update the next node as head
            if (lastAccessNode.next.prev == null)
            {
                this.LRUHead = lastAccessNode.next;
            }
        }
        if (lastAccessNode.prev)
        {
            lastAccessNode.prev.next = lastAccessNode.next;
        }

        // set the lastAccessNode to the this.LRUTail
        this.LRUTail.next = lastAccessNode;
        lastAccessNode.prev = this.LRUTail;
        this.LRUTail = lastAccessNode;
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.map.has(key))
    {
        return -1;
    }
    const accessNode = this.map.get(key);
    this.updateQueue(accessNode);
    return accessNode.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {

    let accessNode;
    if (this.map.has(key))
    {
        accessNode = this.map.get(key);

        // Update value
        accessNode.value = value;
    }
    else
    {
        // create new node
        accessNode = new Node(key, value);

        // Check if reach max size to remove the Head node from map
        // Get the Head Node to local member
        // Assign the this.Head to This.Head.next
        // this.head.prev to null
        // map delete head node.key
        if (this.map.size >= this.maxSize)
        {
            let oridHeadNode = this.LRUHead;
            if (this.LRUHead.next != null)
            {
                this.LRUHead = this.LRUHead.next;
                this.LRUHead.prev = null;
            }
            // else means only had one node
            else
            {
                this.LRUHead = this.LRUTail = accessNode;
            }
            
            this.map.delete(oridHeadNode.key);
        }
        this.map.set(key, accessNode);
    }

    this.updateQueue(accessNode);
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

//["LRUCache","put","get","put","get","get"]
//[[1],[2,1],[2],[3,2],[2],[3]]
// result
// [null,null,1,null,-1,2]

var obj = new LRUCache(1);
obj.put(2, 1);
let value1 = obj.get(2);
obj.put(3, 2);
let value2 = obj.get(2);
let value3 = obj.get(3);
console.log(`${value1}, ${value2}, ${value3}`);


//["LRUCache","put","put","get","put","get","put","get","get","get"]
//[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]
// result
// [null,null,null,1,null,-1,null,-1,3,4]

var obj2 = new LRUCache(2);
obj2.put(1, 1);
obj2.put(2, 2);
let value4 = obj2.get(1);
obj2.put(3, 3);
let value5 = obj2.get(2);
obj2.put(4, 4);
let value6 = obj2.get(1);
let value7 = obj2.get(3);
let value8 = obj2.get(4);
console.log(`${value4}, ${value5}, ${value6}, ${value7}, ${value8}`);