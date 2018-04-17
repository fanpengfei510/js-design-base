/**
|--------------------------------------------------
| 栈(Stack)，他是一种运算受限制的线性表，现金后出(LIFO)
  LIFO(last in first out)表示后进先出的元素，第一个弹出栈控件。
  类似于自动餐拍拖，最上面的托盘，往往先把拿出来使用
  其限制是仅允许在表的一段进行插入和删除运算。这一端被称为栈顶，相对的，把另一端称为栈底
  向一个栈插入新元素又称作进栈、入栈或压栈，他是把新元素放到栈顶元素的上面，称为新的栈顶元素
  从一个栈删除元素又称作栈或退栈，他是把栈顶元素删除掉，使其相邻的元素称为新的栈顶元素

  push()：添加一个新元素到栈顶的元素。
  pop()：移除栈顶的元素，同时返回被移除的元素
  peek()：返回栈顶的元素，不对栈做任何修改（这个方法不会移除栈顶的元素，仅仅返回它）
  isEmpty():如果战力没有任何元素就返回true，否则返回false
  clear()：移除栈里所有的元素
  size()：返回栈里的元素数，这个方法和数字的length属性很类似
|--------------------------------------------------
*/

function Stack(){
  this.items = []
}

Stack.prototype = {
  // 进栈
  push : function(item){
    this.items.push(item)
  },
  // 出栈
  pop : function(){
    return this.items.pop()
  },
  // 返回栈顶元素
  peek : function(){
    return this.items[this.items.length - 1];
  },
  // 栈中是或否为空
  isEmpth : function(){
    return this.size() === 0;
  },
  // 栈中元素的个数
  size : function(){
    return this.items.length
  }
};

function app(arg){
  var stack = new Stack();
  var remainder;
  while( arg > 0 ){
    remainder = arg % 2;
    arg = Math.floor( arg / 2);
    stack.push(remainder);
    console.log(stack.items)
  }
  var binayriString = '';
  while(!stack.isEmpth()){
    binayriString += stack.pop();
    console.log(stack.items)
  }
  return binayriString;
}
console.log(app(20))