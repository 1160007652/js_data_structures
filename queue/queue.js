/**
 * 基于对象创建一个 队列 - 堆结构
 * 
 * 队列 - 堆：
 * 先进先出 原则
 * 
 * 
 * [  ...队顶  ,  1  ,  2  ,  3  ,  4  ,  ...队尾  ]
 */

class Queue {
    constructor() {
        this.count = 0; // 记录当前堆的大小
        this.lowestCount = 0; // 记录当前读取堆的位置
        this.items = {}; // 存储堆元素
    }

    /**
     * 向队列尾部添加元素
     * @param {obj} elements 数据内容
     */
    enqueue(elements) {
        this.items[this.count++] = elements;
        // this.count++ 表示 先使用，后自增
    }

    /**
     * 移除队列的第一项（即排在队列最前面的项）并返回被移除的元素
     */
    dequeue() {
        if(this.isEmpty()){
            return undefined;
        }

        const elements = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return elements;
    }
    /**
     * 返回队列中第一个元素——最先被添加，也将是最先被移除的元素。
     * 队列不做任何变动（不移除元素，只返回元素信息——与 Stack 类的 peek 方法非常类似）。
     * 该方法在其他语言中也可以叫作 front 方法
     */
    peek() {
        if(this.isEmpty()){
            return undefined;
        }

        return this.items[this.lowestCount];
    }

    /**
     * 如果队列中不包含任何元素，返回 true，否则返回 false。
     */
    isEmpty(){
        return this.size() === 0;
    }

    /**
     * 返回队列包含的元素个数。
     */
    size(){
        return this.count - this.lowestCount;
    }

    /**
     * 清空队列
     */
    clear(){
        this.count = 0;
        this.lowestCount = 0;
        this.items ={};
    }

    toString(){
        if(this.isEmpty()){
            return undefined;
        }

        return Object.values(this.items);
    }
}

// const queue = new Queue();
// console.log("队列是否为空",queue.isEmpty());

// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);

// console.log("队列是否为空",queue.isEmpty());

// console.log("队列元素：", queue.toString());

// console.log("队列的长度",queue.size());
// console.log("队列的第一个元素",queue.peek());
// console.log("取出队列元素",queue.dequeue());
// console.log("队列的元素", queue.toString());

// console.log("取出队列元素",queue.dequeue());
// console.log("队列的元素", queue.toString());

// console.log("取出队列元素",queue.dequeue());
// console.log("队列的元素", queue.toString());

module.exports = Queue;