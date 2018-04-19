/**
|--------------------------------------------------
| 字典有什么特点？
  字典的主要特点是一一对应的关系
  比如保存一个人的信息，在合适的情况下取出这些信息
  使用数组的方式：[18,'Aibo',1.88]，可以通过下标取出信息
  使用字典的方式：{'age':18,'name':'Aibo','height':1.88}，可以通过key取出value
|--------------------------------------------------
*/

//创建字典类
function Dictionay(){
  this.items = {};
}

Dictionay.prototype = {
  add : function(key,value){
    this.items[key] = value;
  },
  has : function(key){
    return this.items.hasOwnProperty(key);
  },
  remove : function(key){
    if(!this.has(key)) return false;
    delete this.items[key];
    return true;
  },
  get : function(key){
    return this.has(key) ? this.items[key] : (void 0);
  },
  keys : function(){
    return Object.keys(this.items);
  },
  values : function(){
    return Object.values(this.items)
  },
  size : function(){
    return this.keys().length;
  },
  clear : function(){
    this.items = {};
  }
}

var dictionay = new Dictionay();
dictionay.add('width',100);
dictionay.add('name','Aibo');
dictionay.add('height',1.90);
console.log(dictionay.items);
console.log(dictionay.keys());

console.log(dictionay.has('name'));
dictionay.remove('width');
console.log(dictionay.items);
console.log(dictionay.get('name'));
