
var MyStack = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.stack.unshift(x);
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.stack.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.stack[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */

const obj = new MyStack();
obj.push(1);
obj.push(2);
obj.push(3);

const param_2 = obj.pop();
const param_3 = obj.top();
const param_4 = obj.empty();

console.log(param_2, param_3, param_4);
