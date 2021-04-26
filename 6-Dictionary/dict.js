const { defaultToString } = require('../utils');


class ValuePair {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
    toString() {
        return `[#${this.key}: ${this.value}]`;
    }
} 

class Dictionary {
    constructor(toStrFn = defaultToString) {
        this.toStrFn = toStrFn;
        this.table = {};
    }

    /**
     * 是否存在制定key的元素
     * @param {string} key 
     * @returns 
     */
    hasKey(key) {
        return this.table[this.toStrFn(key)] != null;
    }

    /**
     * 向字典添加新元素
     * @param {string} key , key 如果存在，会进行覆盖
     * @param {object} value 
     */
    set(key, value) {

        if (key != null && value != null) {
            const tableKey = this.toStrFn(key);
            this.table[tableKey] = new ValuePair(key, value);
            return true;
        }

        return false; 
    }

    /**
     * 从字典中删除一个值
     * @param {string}} key 
     * @returns 
     */
    remove(key) {
        if (this.hasKey(key)) {
            delete this.table[this.toStrFn(key)];
            return true;
        }
        return false;
    }

    /**
     * 获取制定 key 的值
     * @param {string}} key 
     * @returns 
     */
    get(key) {
        if (this.hasKey(key)) {
            return this.table[this.toStrFn(key)];
        }
        return undefined;
    } 

    /**
     * 返回所有 key-value 元素对
     * @returns 
     */
    keyValues() {
        return Object.values(this.table);
    }

    /**
     * 返回 keys
     */
    keys(){
        return this.keyValues().map((valuePair)=> valuePair.key);
    }

    /**
     * 返回 values
     */
    values(){
        return this.keyValues().map((valuePair)=> valuePair.value);
    }

    size(){
        return this.keyValues().length;
    }

    isEmpty() {
        return this.size() === 0;
    }

    clear() {
        this.table = {};
    }

    toString() {

        if (this.isEmpty()) {
            return '';
        }

        const valuePairs = this.keyValues();

        let objString = `${valuePairs[0].toString()}`;
        
        for (let i = 1; i < valuePairs.length; i++) {
            objString = `${objString},${valuePairs[i].toString()}`;
        }

        return objString;

    } 
}

const dict = new Dictionary();

dict.set('color', 'blue');
dict.set('age', 25);

console.log(dict.get('color'));
console.log("color 是否存在 ",dict.hasKey('color'));

console.log(dict.keyValues());
console.log(dict.size());

console.log("字典是否为空: ", dict.isEmpty());


console.log(dict.keys());
console.log(dict.values());

console.log(dict.toString());

dict.clear();
console.log("字典是否为空: ", dict.isEmpty());







