/**
|--------------------------------------------------
| 优先级队列的特点：
  我们知道，普通的队列插入一个元素，数据会被放在后端，并且需要前面所有的元素都处理完成后才会处理前面的数据。
  但是优先级队列，在插入一个元素的时候会考虑该数据的优先级。(和其他数据优先级尽心个比较)
  比较完成后，可以得出这个元素正确的队列中的位置。其他处理方式，和队列的处理方式一样
  也就是说，如果我们要实现优先级队列，最主要是修改添加的方法(当然，还需要以某种方式来保存元素的优先级)
|--------------------------------------------------
*/

function PriorityQueue(){
  this.items = []
};

PriorityQueue.prototype = {
  // 添加元素方法
  enqueue : function(element,priority){
    // 1 根据传入的元素，创建新的QueueElement
    var queueElement = new QueueElement(element,priority);
    // 2 获取传入元素位置应该在正确的位置
    if(this.isEmpty()){
      this.items.push(queueElement)
    }else{
      var added = false;
      var _that = this;
      this.items.every(function(item,index){
        // 数字越小，优先级越高
        if(queueElement.priority < item.priority){
          // 在对应位置插入元素
          _that.items.splice(index,0,queueElement);
          added = true;
          return false;
        }
      });
      // 遍历完所有的元素，优先级都大于插入的元素时，就插到最后
      if(!added){
        this.items.push(queueElement)
      }
    }
  },
  // 出队
  dequeue : function(){
    this.items.shift()
  },
  // 获取前端元素
  front : function(){
    return this.items[0]
  },
  // 查看队列是否为空
  isEmpty : function(){
    return this.items.length === 0
  },
  // 获取队列个数
  size : function(){
    return this.items.length
  }

}

// 封装一个新的构造函数，用于保存元素和元素优先级
function QueueElement(element,priority){
  this.element = element;
  this.priority = priority;
}

var queues = new PriorityQueue();
queues.enqueue('a',4);
queues.enqueue('b',1);
queues.enqueue('c',10);
console.log(queues.items);
console.log(queues);