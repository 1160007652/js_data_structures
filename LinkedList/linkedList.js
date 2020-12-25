/**
 * 单向链表
 * 
 */
const defaultEquals = require('./lib/equals');
const Node = require('./lib/nodeModels');

class LinkedList {
    constructor(equalsFn = defaultEquals) {
        this.count = 0; // 记录链表中的元素数量
        this.head = undefined; // 
        this.equalsFn = equalsFn;
    }
    /**
     * 向链表尾部添加一个新元素
     * @param {any} element 元素数据
     */
    push(element) {
        const node = new Node(element);
        let current;

        // 如果 头节点为空，直接赋值第一个 节点
        if (this.head == null) {
            this.head = node;
        } else {

            current = this.head;

            // 遍历节点，直到 找到 最后一个节点
            while (current.next != null) {
                current = current.next
            }

            // 赋值新的元素节点
            current.next = node;
        }

        this.count++;
    }

    /**
     * 向链表的特定位置插入一个新元素
     * @param {any} element 元素数据
     */
    insert(element, index) {
        if (index < 0 && index > this.count) {
            return false;
        }

        const node = new Node(element);
        // 保存当前节点的数据
        let current = this.head;

        if (index === 0) {
            // 将当前元素 插入到 节点最前面
            node.next = current;
            // 将新的节点 赋值给节点
            this.head = node;
        } else {
            const previous = this.getElementAt(index);
            current = previous.next;
            node.next = current;
            previous.next = node;
        }

        this.count++;
        return true;
    }

    /**
     * 返回元素在链表中的索引。
     * 如果链表中没有该元素则返回-1。
     * @param {any} element 元素数据
     */
    indexOf(element) {
        let current = this.head;
        let index = 0;

        while (current.next !== null) {
            if (this.equalsFn(Number(element), Number(current.element))) {
                break;
            } else {
                current = current.next;
                index++;
            }
        }

        return index;
    }

    /**
     * 返回索引对应的链表元素
     * @param {number} index 索引
     */
    getElementAt(index) {
        if (index < 0 && index > this.count) {
            return undefined;
        }

        let current = this.head;

        /**
         *  此处 i < index -1 , 是为了找到 目标元素的 前一个元素, 使用找到的目标元素，可以 current.next.element;
         *  保留目标元素的前一个元素，可以 方便 其它方法的调用，去除目标元素。如：
         *  
         *  current.next = current.next.next
         * 
         */
        for (let i = 0; i < index - 1; i++) {
            current = current.next;
        }

        return current;
    }

    /**
     * 从链表的特定位置移除一个元素, 并且返回移除的元素值。
     * @param {number} index 位置
     */
    removeAt(index) {
        if (index < 0 && index > this.count) {
            return undefined;
        }

        let current = this.head;

        if (index === 0) {
            this.head = current.next;
        } else {
            // let previous;
            // for (let i = 0; i < index; i++) {
            //     previous = current;
            //     current = current.next;
            // }

            let previous = this.getElementAt(index);
            current = previous.next;
            previous.next = current.next;

        }

        this.count--;
        return current.element;
    }

    /**
     * 从链表的移除一个元素。
     * @param {number} index 位置
     */
    remove(element) {
        if (this.isEmpty()) {
            return false;
        }
        const index = this.indexOf(element);
        this.removeAt(index);
        return true;
    }

    /**
     * 如果链表中不包含任何元素。
     * 返回 true，如果链表长度大于 0则返回 false。
     */
    isEmpty() {
        return this.size() === 0;
    }

    /**
     * 返回链表包含的元素个数，与数组的 length 属性类似。
     */
    size() {
        return this.count;
    }

    /**
     * 返回头节点
     */
    getHead() {
        return this.head;
    }

    /**
     * 返回表示整个链表的字符串。
     * 由于列表项使用了 Node 类，就需要重写继承自 JavaScript 对象默认的 toString 方法，让其只输出元素的值。
     */
    toString() {

        if (this.head == null) {
            return '';
        }

        const result = [this.head.element];
        let current = this.head.next;

        while (current !== null) {
            result.push(current.element);
            current = current.next;
        }

        return result;
    }
}

const list = new LinkedList();
list.push(15);
list.push(10);
list.push(30);
list.push(40);


console.log("链表元素: ", list.toString());

console.log("链表中索引1的元素：", list.getElementAt(2).element);
console.log("移除链表位置1的元素：", list.removeAt(2));

console.log("链表元素: ", list.toString());

console.log("在链表0位置插入元素8: ", list.insert(8, 0));
console.log("在链表2位置插入元素88: ", list.insert(88, 2));
console.log("在链表最后位置插入元素888: ", list.insert(888, list.size()));

console.log("链表元素: ", list.toString());

console.log("88元素在链表中的位置：", list.indexOf('88'));

console.log("删除链表中的888元素", list.remove(888))
console.log("链表元素: ", list.toString());

console.log("删除链表中的8元素", list.remove(8))
console.log("链表元素: ", list.toString());

console.log("删除链表中的88元素", list.remove(88))
console.log("链表元素: ", list.toString());

