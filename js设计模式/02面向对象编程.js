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
console.log(bookFour);

/**
|--------------------------------------------------
| 图书安全类
  instanceof 运算符用来判断一个构造函数的prototype属性所指向的对象是否存在一个要检测对象的原型链上
|--------------------------------------------------
*/
var BookFive = function(id,name,preice){
  //判断执行过程中的this是或否是当前对象(如果是，说明是new创建的)
  if(this instanceof BookFive){
    this.id = id;
    this.name = name;
    this.preice = preice;
  }else{//创新创建这个对象
    return new BookFive(id,name,preice)
  }
}
//都能成功创建
var bookFive = BookFive(14,'javascrpit-design-module',50);
console.log(bookFive);
bookFive = new BookFive(15,'js',30);
console.log(bookFive);

/**
|--------------------------------------------------
| 传宗接代---继承
  类式继承：SubClass.prototype = new SuperClass();
|--------------------------------------------------
*/

//声明父类
function SuperClass(){
  this.superValue = true;
}
//为父类添加共有方法
SuperClass.prototype.getSuperValue = function(){
  return this.superValue;
}
//声明子类
function SubClass(){
  this.subValue = false;
}

//继承父类
SubClass.prototype = new SuperClass();

//为子类添加共有方法
SubClass.prototype.getSubValue = function(){
  return this.subValue;
}
var instance = new SubClass();
console.log(instance)
console.log(instance.getSuperValue());
console.log(instance.getSubValue());

/**
|--------------------------------------------------
| instanceof 判断对象和类之间的继承关系 实例 instanceof 类
  是判断实例 与 类 的继承关系
|--------------------------------------------------
*/
console.log(instance instanceof SuperClass);  //true
console.log(instance instanceof SubClass);  //true
console.log(SubClass instanceof SuperClass);  //false
console.log(SubClass.prototype instanceof SuperClass);  //true
console.log(instance instanceof Object);  //true

/**
|--------------------------------------------------
| 类式的缺点
  1.由于子类通过其原型prototype对父类实例化，继承了父类。
    所以父类中共有的属性要是引用类型，就会在子类中被所有实例公用
    因此一个子类的实例更改子类原型从父类构造器中继承来的共有属性就会直接影响到其他子类
  2.由于子类的实例的继承是靠其原型prototype对父类的实例化实现的
    因此在创建父类的时候，是无法向父类传递参数的，因而在实例化父类的时候
    也无法对父类的构造函数的属性进行初始化
|--------------------------------------------------
*/
function SuperClassTwo(){
  this.books = ['js','html','css'];
}
function SubClassTwo(){

}
SubClassTwo.prototype = new SuperClassTwo();
var instance1 = new SubClassTwo();
var instance2 = new SubClassTwo();
console.log('类式的缺点');
console.log(instance1.books); //["js", "html", "css"]
instance1.books.push('php');
console.log(instance2.books); //["js", "html", "css", "php"]
//总结：在修改instance1的时候，instance2也被修改了，这样会造成程序的错误

/**
|--------------------------------------------------
| 为了解决这些错误的产生
  创建即继承-构造函数继承
  关键：SuperClassThree.call(this,id)
|--------------------------------------------------
*/
//构造函数式继承，父类声明
function SuperClassThree(id){
  //引用类型共有属性
  this.books = ['js','html','css'];
  //值类型共有属性
  this.id = id;
}
//父类声明原型方法
SuperClassThree.prototype.showBooks = function(){
  console.log(this.books);
}
//声明子类
function SubClassThree(id){
  //继承父类
  SuperClassThree.call(this,id);
}
//创建第一个子类的实例
var instance3 = new SubClassThree(10);
var instance4 = new SubClassThree(11);
instance3.books.push('java');
console.log(instance3.books); //["js", "html", "css", "java"]
console.log(instance4.books); //["js", "html", "css"]
/* 
总结：改正了类式继承的缺点，但还是有缺点，就是每个实例都要单独实例化一份
父类的共有方法，这就违背了代码服用的原则，为了综合这两种继承的有点，后来有了
组合式继承
*/

/**
|--------------------------------------------------
| 将有点为我所用------组合继承
|--------------------------------------------------
*/
//声明父类
function SuperClassFour(name){
  //值类型共有属性
  this.name = name;
  //引用类型共有属性
  this.books = ['html','css','javascript']
}
//父类原型共有方法
SuperClassFour.prototype.getName = function(){
  console.log(this.name)
};
//声明子类
function SubClassFour(name,item){
  //构造函数式继承父类的name属性
  SuperClassFour.call(this,name);
  //子类中新增共有属性
  this.item = item;
}
//类式继承 子类原型继承父类实例
SubClassFour.prototype = new SuperClassFour();
//子类原型方法
SubClassFour.prototype.getTime = function(){
  console.log(this.item);
};
console.log('将优点为我所用--组合继承');
var instance5 = new SubClassFour('go book',200);
console.log(instance5);
instance5.books.push('nodejs');
console.log(instance5.books);
instance5.getName();
instance5.getTime();

var instance6 = new SubClassFour('css book',100);
console.log(instance6.books);
instance6.getName();
instance6.getTime();
//缺点：父类的构造函数执行了两遍

/**
|--------------------------------------------------
| 洁净的继承者----原型式继承
  接触原型 prototype 可以根据已有的对象创建一个新的对象
  同时不必创建新的自定义对象类型
|--------------------------------------------------
*/
//原型式继承
function inheritObject(o){
  //声明一个过滤函数对象
  function F(){};
  //过滤对象的原型继承父对象
  F.prototype = o;
  //返回过滤对象的一个实例，实例的原型继承了父对象
  return new F();
}
var book5 = {
  name : 'js book',
  alikeBook : ['css','html']
}
var newBook = inheritObject(book5);
newBook.name = 'ajax book';
newBook.alikeBook.push('xml book');
var otherBook = inheritObject(book5);
otherBook.name = 'flash book';
otherBook.alikeBook.push('as book');

console.log(newBook.name);  //ajax book
console.log(newBook.alikeBook); //["css", "html", "xml book", "as book"]
console.log(otherBook.name);  //flash book
console.log(otherBook.alikeBook); //["css", "html", "xml book", "as book"]
console.log(book5.name)   //js book
console.log(book5.alikeBook)  //["css", "html", "xml book", "as book"]

/**
|--------------------------------------------------
| 还是污染了父类
  如虎添翼----寄生式继承
|--------------------------------------------------
*/
//声明基础对象
var book6 = {
  name : 'js book',
  alikeBook : ['css','ps','fw']
}
//原型式继承
function inheritObjectTwo(o){
  //声明一个过滤函数对象
  function F(){};
  //过滤对象的原型继承父对象
  F.prototype = o;
  //返回过滤对象的一个实例，改实例的原型继承了父对象
  return new F();
}

function createBook(obj){
  console.log(obj);
  //通过原型继承方式创建新对象
  var o = inheritObjectTwo(obj);
  console.log(o.name);
  //拓展新对象
  o.getName = function(){
    console.log(this.name)
  }
  //返回拓展后的新对象
  return o;
}
var book7 = createBook(book6);
console.log(book7);

/**
|--------------------------------------------------
| 终极继承者
  寄生式继承，继承原型
  传递参数 subClass 子类
  传递参数 superClass 父类
  constructor 属性返回对创建此对象的数组函数的引用。
|--------------------------------------------------
*/
function inheritObject1(o){
  function F(){};
  F.prototype = o;
  return new F()
}

function inheritPrototype(subClass,superClass){
  //复制一份父类的原型副本保存在变量中
  var p = inheritObject1(superClass.prototype);
  //修正因为重写子类原型导致子类的constructor属性被修改
  p.constructor = subClass;
  //设置子类的原型
  subClass.prototype = p;
}

//定义父类
function ParentClass(name){
  this.name = name;
  this.colors = ['red','blue','green'];
}
//定义父类原型方法
ParentClass.prototype.getName = function(){
  console.log(this.name)
}
//定义子类
function ChildClass(name,time){
  //构造函数式继承
  ParentClass.call(this,name);
  //子类新增属性
  this.time = time;
}
//寄生式继承父类原型
inheritPrototype(ChildClass,ParentClass);
//子类新增原型方法
ChildClass.prototype.getTime = function(){
  console.log(this.time)
}
//创建两个测试方法
var test1 = new ChildClass('js book',2013);
var test2 = new ChildClass('css book', 2012);
test1.colors.push('black');
console.log(test1.colors);
console.log(test2.colors);
test2.getName();
test2.getTime();

/**
|--------------------------------------------------
| 老师不止一位，多继承
|--------------------------------------------------
*/
//单继承，属性复制
var extend = function(target,source){
  //遍历原对象中的属性
  for(var property in source){
    target[property] = source[property]
  }
  //返回目标对象
  return target;
}
//多继承，属性复制
var mix = function(){
  var i = 1,  //从第二个参数起为被继承的对象
      len = arguments.length, //获取参数的长度
      target = arguments[0],  //第一个为目标对象
      arg;  //缓存参数对象
  //遍历被继承的对象
  for(; i< len; i++){
    //缓存当前对象
    arg = arguments[i];
    //遍历被继承对象中的属性
    for(var property in arg){
      //将被继承对象中的属性复制到目标对象中
      target[property] = arg[property]
    }
  }
  //返回目标对象
  return target;
}

//这个要出入目标对象(第一个参数--需要继承的对象)
//也可以将他绑定到原生对象object上，这样所有的对象可以拥有这个方法
Object.prototype.mix = function(){
  var i = 0,
      len = arguments.length,
      arg;
  for(; i <  len; i++){
    //缓存当前对象
    arg = arugments[i];
    //遍历被继承对象中的属性
    for(var preoperty in arg){
      //将被继承对象中的属性复制到目标对象中
      this[preoperty] = arg[property]
    }
  }
}

/**
|--------------------------------------------------
| 多种调用方法----多态
  根据参数数量不同，运行不同的程序
|--------------------------------------------------
*/
function add(){
  var arg = arguments,
      len = arg.length;
  switch(len){
    case 0 : return 10;
    case 1 : return 10 + arg[0];
    case 2 : return arg[0] + arg[1]
  }
}