/**
|--------------------------------------------------
| 抽象工厂模式：通过对类的工厂抽象使其业务用于对产品簇的创建
  而不负责创建某一类的实例
|--------------------------------------------------
*/
var Car = function(){

};
Car.prototype = {
  getPrice : function(){
    return new Error('抽象方法不能调用')
  },
  getSpeed : function(){
    return new Error('抽象方法无法使用')
  }
}

// 抽象工厂方法
var VehicleFactory = function(subType,superType){
  //判断抽象工厂是否有该抽象类
  if(typeof VehicleFactory[superType] === 'function'){
    //缓存类
    function F(){};
    //继承父类属性和方法
    F.prototype = new VehicleFactory[superType]();
    //将子类constructor指向子类
    subType.prototype = new F();
  }else{
    //不存在该抽象类抛出错误
    throw new Error('未创建该抽象类')
  }
}

//小汽车抽象类
VehicleFactory.Car = function(){
  this.type = 'Car';
}
VehicleFactory.Car.prototype = {
  getPrice : function(){
    return new Error('Car类，Price，抽象方法不能调用')
  },
  getSpeed : function(){
    return new Error('Car类，Speed，抽象方法不能调用')
  }
}

//公交车抽象类
VehicleFactory.Bus = function(){
  this.type = 'Bus'
};
VehicleFactory.Bus.prototype = {
  getPrice : function(){
    return new Error('Bus类，Price，抽象方法不能调用');
  },
  getSpeed : function(){
    return new Error('Bus类，Speed，抽象方法不能调用')
  }
}

//货车抽象类
VehicleFactory.Truck = function(){
  this.type = 'Truck';
}
VehicleFactory.Truck.prototype = {
  getPrice : function(){
    return new Error('Truck，Price，抽象方法不能调用')
  },
  getSpeed : function(){
    return new Error('Truck，Speed，抽象方法不能调用')
  }
}

/* ************************************************ */
//宝马汽车子类
var BMW = function(price,speed){
  this.price = price;
  this.speed = speed;
}

//抽象工厂实现对Car抽象类的继承
VehicleFactory(BMW,'Truck');
BMW.prototype.getPrice = function(){
  return this.price;
};
BMW.prototype.getSpeed = function(){
  return this.speed;
}

var bmw = new BMW(100,200);
console.log(bmw);
console.log(bmw.getPrice());
console.log(bmw.getSpeed());
console.log(bmw.type)