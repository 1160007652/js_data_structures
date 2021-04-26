/**
 * 基于数组创建一个栈结构
 * 
 * 栈：
 * 先进后出  原则， 先进去的叫栈低，后进去的叫栈顶
 * 
 * [  ...栈尾  ,  1  ,  2  ,  3  ,  4  ,  ...栈顶  ]
 * 
 */

class Stack {
    constructor() {
        this.items = [];
    }

    /**
     * 添加 1个或 多个
     * @param {object} elements 
     */
    push(elements){
        this.items.push(elements);
    }
    /**
     * 移除栈顶元素
     */
    pop(){
        this.items.pop()
    }
    /**
     * 返回栈顶元素
     */
    peek(){
        return this.items[this.items.length - 1]
    }

    /**
     * 栈是否为空， true 空，false 不为空
     */
    isEmpty(){
        return this.items.length === 0;
    }
    /**
     * 清除栈里的元素
     */
    clear(){
        this.items = [];
    }
    /**
     * 返回栈的大小
     */
    size(){
        return this.items.length;
    }
}

const stack = new Stack();
console.log("栈是否为空",stack.isEmpty());

stack.push(1);
stack.push(4);
stack.push(2);

console.log("栈是否为空",stack.isEmpty());
console.log("栈的长度",stack.size());
console.log("栈的元素",stack.items);
console.log("栈顶元素",stack.peek());

