/**
 * 使用 循环队列 解决 击鼓传花的游戏 （ HotPotato Games）
 * 
 * 规则：
 * 
 * 在这个游戏中，孩子们围成一个圆圈，把花尽快地传递给旁边的人。
 * 某一时刻传花停止，这个时候花在谁手里，谁就退出圆圈、结束游戏。
 * 重复这个过程，直到只剩一个孩子（胜者）。
 */

const Queue = require('./queue');

function hotPotato(elementsList, num) {
    const queue = new Queue();
    const elimitatedList = []; // 限制玩游戏的人

    elementsList.forEach((item)=>{
        queue.enqueue(item);
    })

    while(queue.size() > 1){
        for(let i = 0; i < num; i++){
            queue.enqueue(queue.dequeue());
        }
        console.log(queue.size(), queue.toString())
        
        elimitatedList.push(queue.dequeue());
    }

    return {
        elimitated: elimitatedList,
        winner: queue.dequeue()
    }

}

const names = ['John', 'Jack', 'Camila', 'Ingrid', 'Carl'];

console.log("击鼓传花游戏赢家：", hotPotato(names, 7));

/**
 * 
 * 游戏过程
 * 
 * 第一次
 * [ 'Camila', 'Ingrid', 'Carl', 'John', 'Jack' ]  取出  Camila
 * 
 * 第二次
 * [ 'Jack', 'Ingrid', 'Carl', 'John' ] 取出  Jack
 * 
 * 第三次
 * [ 'Carl', 'John', 'Ingrid' ] 取出 Carl
 * 
 * 第四次
 * [ 'Ingrid', 'John' ] 取出 Ingrid
 * 
 * 第五次 --- 结束 while 循环
 * [ 'John' ]
 * { elimitated: [ 'Camila', 'Jack', 'Carl', 'Ingrid' ], winner: 'John' }
 * 
 */