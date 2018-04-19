/**
|--------------------------------------------------
| 封装、类
|--------------------------------------------------
*/
var Book = function(id,bookname,price){
  this.id = id;
  this.bookname = bookname;
  this.price = price;
}

// 类的原型
Book.prototype = {
  display : function(){
    console.log('展示这本书')
  }
}

var book = new Book(10,'javascript设计模式',50);
console.dir(Book);
//constructor 属性返回对创建此对象的数组函数的引用
console.dir(Book.prototype.constructor);
console.log(book);
book.display(); //展示这本书

/**
|--------------------------------------------------
| 面向对象思想
  私有属性
  私有方法
  共有属性
  共有方法
  保护方法
|--------------------------------------------------
*/
//私有属性与私有方法，特权方法，对象共有属性和对象共有方法，构造器
var BookTwo = function(id,name,price){
  //私有属性
  var num = 1;
  //私有方法
  function checkId(){
    console.log(this.id)
  }
  //特权方法
  this.getName = function(){
    return this.name;
  }
  this.getPrice = function(){
    return this.preice;
  }
  this.setName = function(name){
    this.name = name;
  }
  this.setPrice = function(price){
    this.price = price;
  }
  //对象共有属性
  this.id = id;
  //对象共有方法
  this.copy = function(){
    console.log('copy')
  }
  //构造器
  this.setName(name);
  this.setPrice(price);
}

//类静态共有属性(对象不能访问)
BookTwo.isChinese = true;
//类静态共有方法(对象不能访问)
BookTwo.resetTime = function(){
  console.log('new Tiem')
}
BookTwo.prototype = {
  //共有属性
  isJSBook : false,
  //共有方法
  display : function(){
    console.log('显示')
  }
}

var booktwo = new BookTwo(11,'javascript模式',50);
console.log(booktwo);
console.log(booktwo.num); //undefined
console.log(booktwo.isJSBook);  //undefined
booktwo.display();  //显示
console.log(booktwo.id);
console.log(booktwo.isChinese)  //undefined
//类的静态共有属性可以通过类自身访问
console.log(BookTwo.isChinese); //true
BookTwo.resetTime();  //new Tiem

/**
|--------------------------------------------------
| 闭包，类的静态变量，通过闭包来实现
|--------------------------------------------------
*/
//利用闭包来实现
var BookThree = (function(){
  //变量私有变量
  var bookNum = 0;
  //静态私有方法
  function checkBook(name){
    console.log(name)
  }

  //构造函数
  function _book(newId,newName,newPrice){
    //私有变量
    var name,preice;
    //私有方法
    function checkId(id){}
    //特权方法
    this.getName = function(){
      return this.name
    };
    this.getPrice = function(){
      return this.price
    };
    this.setName = function(name){
      this.name = name;
    };
    this.setPrice = function(price){
      this.price = price;
    }
    //共有属性
    this.id = newId;
    //共有方法
    this.copy = function(){};
    bookNum++;
    if(bookNum > 10){
      throw new Error('我们仅出版10本书')
    }
    //构造器
    this.setName(newName);
    this.setPrice(newPrice);
  }
  return _book;
})();

var bookThree = new BookThree(22,'script设计',40);
console.log(bookThree)

/**
|--------------------------------------------------
| 创建对象的安全模式，去除 new 也可以成功实例化对象
|--------------------------------------------------
*/
var BookFour = function(id,name,price){
  this.id = id;
  this.name = name;
  this.price = price;
}

var bookFour = BookTwo(12,'设计模式',30);
console.log(bookFour);
console.log(window.id);  //12
console.log(window.name);  //设计模式
console.log(window.price);  //30
bookFour = new BookTwo(13,'js模式',10);
console.log(bookFour)