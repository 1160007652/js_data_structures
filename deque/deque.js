/**
 * 基于对象创建一个 双端队列 数据结构
 * 
 * 双端队列：
 * 同时遵循「 先进后出、先进先出 」原则
 * 
 */

class Deque {
    constructor() {
        this.count = 0; // 记录当前元素的大小
        this.lowestCount = 0; // 记录当前读取元素的位置
        this.items = {}; // 存储数据元素
    }

    /**
     * 该方法在双端队列前端添加新的元素
     * @param {any} elements 数据内容
     */
    addFront(elements){
        if(this.isEmpty()){
            this.addFront(elements);
        } else if(this.lowestCount > 0){
            this.items[--this.lowestCount] = elements;
            // --this.lowestCount , 先递减1个单位长度，再使用
        } else {
            // 将现有的元素 逐步先后递增1个长度
            for(let i = this.count; i > 0; i--){
                this.items[i] = this.items[i-1];
            }
            // 预留出 this.items[0] 的位置

            this.count++;
            this.lowestCount = 0;
            this.items[0] = elements;
        }

        this.items[this.lowestCount--] = elements;
    }

    /**
     * 该方法返回双端队列前端的第一个元素。
     */
    peekFront(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.lowestCount];
    }

    /**
     * 该方法会从双端队列前端移除第一个元素。
     */
    removeFront(){
        if(this.isEmpty()){
            return undefined;
        }

        // this.count--;
        const elements = this.items[this.lowestCount];
        delete this.items[this.lowestCount];
        this.lowestCount++;

        return elements;
    }

    /**
     * 该方法在双端队列后端添加新的元素。
     * @param {any} elements 数据内容
     */
    addBack(elements){
        this.items[this.count++] = elements;
    }

    /**
     * 该方法返回双端队列后端的第一个元素。
     */
    peekBack(){
        if(this.isEmpty()){
            return undefined;
        }
        return this.items[this.count - 1];
    }

    /**
     * 该方法会从双端队列后端移除第一个元素。
     */
    removeBack(){
        if(this.isEmpty()){
            return undefined;
        }

        this.count--;
        const elements = this.items[this.count];
        delete this.items[this.count];

        return elements;
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


const deque = new Deque();

console.log("双端队列是否为空：",deque.isEmpty()); // 输出 true

deque.addBack('John');
deque.addBack('Jack');
console.log("双端队列的元素：",deque.toString()); // John, Jack

deque.addBack('Camila');
console.log("双端队列的元素：",deque.toString()); // John, Jack, Camila

console.log("双端队列的大小：",deque.size()); // 输出 3

console.log("双端队列是否为空：",deque.isEmpty()); // 输出 false

console.log("移除双端队列先进去的元素：",deque.removeFront()); // 移除 John
console.log("双端队列的元素：",deque.toString()); // Jack, Camila

console.log("移除双端队列后进去的元素：",deque.removeBack()); // Camila 决定离开
console.log("双端队列的元素：",deque.toString()); // Jack

deque.addFront('John');
console.log("向前添加 John 元素");
console.log("双端队列的元素：",deque.toString()); // John, Jack

deque.addBack('Camila');
console.log("向后添加 Camila 元素");
console.log("双端队列的元素：",deque.toString()); // John, Jack