/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.maxSize = capacity;
    this.LRUKeyQueue = [];      // the top-most is the least used key
    this.map = new Map([]);
};

LRUCache.prototype.updateQueue = function(lastAccessKey) {
    const idx = this.LRUKeyQueue.indexOf(lastAccessKey);
    // if ever existed in the queue, remove from the queue first
    if (idx >= 0)
    {
        this.LRUKeyQueue.splice(idx, 1);
    }
    // add the Key to the last as recently used
    this.LRUKeyQueue.push(lastAccessKey);
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const value = this.map.get(key);
    if (value >= 0)
    {
        this.updateQueue(key);
    }
    return value >= 0 ? value : -1;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (!this.map.has(key) &&
        this.map.size >= this.maxSize)
    {
        this.map.delete(this.LRUKeyQueue.shift());
    }
    this.map.set(key, value);
    this.updateQueue(key);
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