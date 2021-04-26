class SetStruct {
    constructor(){
        this.items = {};
    }

    /**
     * 添加一个新的元素
     * @param {string|number} element 
     */
    add(element){
        if(this.has(element)){
            return false;
        }

        this.items[element]=element;
        return true;

    }

    /**
     * 删除一个元素
     * @param {string|number} element 
     */
    delete(element){
        if(this.has(element)){
            delete this.items[element];
            return true;
        }

        return false;
    }

    /**
     * 是否存在某个元素
     * @param {string|number} element 
     */
    has(element){
        return Object.prototype.hasOwnProperty.call(this.items, element);
    }

    /**
     * 删除所有的元素
     */
    clear(){
        this.items = {}
    }

    /**
     * 返回集合中的元素数量
     */
    size(){
        return Object.keys(this.items).length;
    }

    /**
     * 返回集合中所有的元素（值values）数组形式
     */
    values(){
        return Object.values(this.items);
    }

    /**
     * 求并集
     */
    union(otherSet) {
        const unionSet = new SetStruct();

        this.values().forEach((value) => unionSet.add(value));
        otherSet.values().forEach((value) => unionSet.add(value));

        return unionSet;

    }

    /**
     * 求交集
     */
    intersection (otherSet) {
        const intersectionSet = new SetStruct();

        let smallerSet = null; // 小集合，用于最外层循环
        let biggerSet = null; // 大集合，用于最内层循环


        if(otherSet.size() > this.size()){
            biggerSet = otherSet;
            smallerSet = this;
        } else {
            biggerSet = this;
            smallerSet = otherSet;
        }
        

        smallerSet.values().forEach((value)=> {
            if(biggerSet.has(value)){
                intersectionSet.add(value);
                
            }
        });


       return intersectionSet;
    }

    /**
     * 求差集
     */
    difference(otherSet){

        const intersectionSet = new SetStruct();

        this.values().forEach((value)=> {
            if(!otherSet.has(value)){
                intersectionSet.add(value);
            }
        });

       return intersectionSet;
    }

    /**
     * 是否是子集
     */
    isSubsetOf(otherSet){
        if(this.size() > otherSet.size()){
            return false;
        }

        let isSubset = true;

        this.values().every((value)=>{
            if(otherSet.has(value)){
               return true;
            }

            isSubset = false;
            return false;
        });

        return isSubset;
    }
}

const set = new SetStruct();

set.add(1);
console.log(set.values(), `${set.size()}个`);

set.add(2);
console.log(set.values(),`${set.size()}个`);

set.delete(1);
console.log(set.values(), `${set.size()}个`);

console.log("是否存在元素3: ",set.has(3));

set.clear();
console.log(set.values(),`${set.size()}个`);


// 求并集
let otherSet = new SetStruct();
otherSet.add(1);
otherSet.add(2);
otherSet.add(3);

set.clear();
set.add(1);
set.add(4);
console.log("求并集");
console.log(`(${otherSet.values()}) U (${set.values()}) = ${set.union(otherSet).values()}`);

// 求交集
otherSet = new SetStruct();
otherSet.add(1);
otherSet.add(2);
otherSet.add(3);

set.clear();
set.add(1);
set.add(3);
set.add(4);
console.log("求交集");
console.log(`(${otherSet.values()}) ∩ (${set.values()}) = ${set.intersection(otherSet).values()}`);


// 求差集
otherSet = new SetStruct();
otherSet.add(2);
otherSet.add(3);

set.clear();
set.add(1);
set.add(4);
set.add(3);
set.add(6);

console.log("求差集");
console.log(`(${set.values()}) - (${otherSet.values()}) = ${set.difference(otherSet).values()}`);

// 是否是子集
otherSet = new SetStruct();
otherSet.add(3);
otherSet.add(4);

set.clear();
set.add(1);
set.add(4);
set.add(3);
set.add(6);

console.log("求子集");
console.log(`(${otherSet.values()}) ⊆ (${set.values()}) = ${otherSet.isSubsetOf(set)}`);


