/**
|--------------------------------------------------
| 工厂方法模式：通过对产品类的抽象使其创建业务主要负责用于创建
  多类产品的实例
|--------------------------------------------------
*/
var Factory = function(type,content){
  if(this instanceof Factory){
    var s = new this[type](content);
    return s;
  }else{
    return new Factory(type,content)
  }
}

//工厂原型中设置创建所有类型对象的基础类
Factory.prototype = {
  java : function(content){
    this.content = content;
    this.name = 'java';
    (function(){
      console.log('执行成功' + content)
    })(content)
  },
  javascript : function(content){
    this.content = content;
    this.name = 'javascript'
  }
}

var data = [
  {type : 'javascript',countent : 'javascript 哪家强11'},
  {type : 'java',countent : 'java 哪家强11'}
];

var arr = [];
for(var i=0; i<data.length; i++){
  arr.push(Factory(data[i].type,data[i].countent))
}
console.log(arr)