/**
 * 基于对象创建一个栈结构
 * 
 * 栈：
 * 先进后出  原则， 先进去的叫栈低，后进去的叫栈顶
 * 
 * 使用 Symbol 实现 私有属性，保护栈属性。避免被外部使用者强制修改。
 * 
 * [  ...栈尾  ,  1  ,  2  ,  3  ,  4  ,  ...栈顶  ]
 * 
 */

 const _items = Symbol('stackItems');

class Stack {
    constructor() {
        this.count = 0; // 记录当前栈的大小
        this[_items] = {}; // 保存栈中的元素
        
    }

    push(elements) {
        this[_items][this.count] = elements;
        this.count += 1;
    }

    isEmpty() {
        return this.count === 0;
    }

    size() {
        return this.count;
    }

    pop(){
        if (this.isEmpty()){
            return undefined;
        }
        this.count -= 1;
        const elements = this[_items][this.count];

        delete this[_items][this.count];

        return elements;
    }

    peek(){
        if(this.isEmpty()){
            return undefined;
        }
        return this[_items][this.count - 1];
    }

    clear(){
        this.count = 0;
        this[_items] = {};
    }

    toString(){
        if(this.isEmpty()){
            return undefined;
        }

        return Object.values(this[_items]);
    }

}

const stack = new Stack();
console.log("栈是否为空",stack.isEmpty());

stack.push(1);
stack.push(4);
stack.push(2);

console.log("栈是否为空",stack.isEmpty());
console.log("栈的长度",stack.size());
console.log("栈的元素", stack.toString());
console.log("栈顶元素",stack.peek());
console.log("取栈顶元素",stack.pop());
console.log("栈的元素", stack.toString());

/**
 * 使用 Object.getOwnPropertySymbols() 方法，去读取使用Symbol 修饰的属性key
 */
console.log("栈对象结构中的属性",Object.getOwnPropertySymbols(stack));

/**
 * 使用 Symbol 修饰的属性 Key, 是不会被 Object.keys()方法遍历出来的，只能使用如上特定方法去读取。
 */
console.log("栈对象结构中的属性", Object.keys(stack));



