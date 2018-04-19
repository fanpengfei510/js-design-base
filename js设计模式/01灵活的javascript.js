/**
|--------------------------------------------------
| 为了方式作用于的变量被覆盖
  可以采用对象来保护变量
  同时也方式了别人的变量
|--------------------------------------------------
*/
var CheckObject = {
  name : 'wang',
  checkName : function(){
    console.log('验证姓名');
  },
  checkEmail : function(){
    console.log('验证邮箱');
  },
  checkPassword : function(){
    console.log('验证密码');
  }
};
console.log(CheckObject.name);
CheckObject.checkName();
CheckObject.checkEmail();
CheckObject.checkPassword();

/**
|--------------------------------------------------
| 对象的另一种形式，先声明对象，在添加方法
|--------------------------------------------------
*/
var CheckObjectTwo = function(){

};
CheckObjectTwo.checkEmail = function(){
  console.log('验证邮箱');
};
CheckObjectTwo.checkName = function(){
  console.log('验证姓名');
};
CheckObjectTwo.checkPassword = function(){
  console.log('验证密码');
}
CheckObjectTwo.checkEmail();
CheckObjectTwo.checkName();
CheckObjectTwo.checkPassword();

/**
|--------------------------------------------------
| 类，可以重复使用，有时候内存消耗巨大
|--------------------------------------------------
*/
var CheckObjectThree = function(){
  this.checkName = function(){
    console.log('验证姓名')
  };
  this.checkEmail = function(){
    console.log('验证邮箱')
  };
  this.checkPassword = function(){
    console.log('验证密码')
  };
}

var check = new CheckObjectThree();
check.checkName();
check.checkEmail();
check.checkPassword();

/**
|--------------------------------------------------
| 一个检测类，这种方法要写很多遍prototype但解决的是消耗内存问题
|--------------------------------------------------
*/
var CheckObjectFour = function(){

};
CheckObjectFour.prototype.checkName = function(){
  console.log('验证姓名')
};
CheckObjectFour.prototype.checkEmail = function(){
  console.log('验证邮箱')
};
CheckObjectFour.prototype.checkPassword = function(){
  console.log('验证密码')
};

var checkFour = new CheckObjectFour();
checkFour.checkName();
checkFour.checkEmail();
checkFour.checkPassword();

/**
|--------------------------------------------------
| 为了方式prototype书写多遍，可以这样做，两种防范不能混用，命名相同会造成覆盖。
  同时我们还发现了在调用的时候 c 写了多遍
|--------------------------------------------------
*/
var CheckObjectFive = function(){

};
CheckObjectFive.prototype = {
  checkName : function(){
    console.log('验证姓名')
  },
  checkEmail : function(){
    console.log('验证邮箱')
  },
  checkPassword : function(){
    console.log('验证密码')
  }
}
console.log('-------------------');
var checkFive = new CheckObjectFive();
checkFive.checkName();
checkFive.checkEmail();
checkFive.checkPassword();

/**
|--------------------------------------------------
| 采用链式调用
|--------------------------------------------------
*/
var CheckObjectSix = function(){};
CheckObjectSix.prototype = {
  checkName : function(){
    console.log('验证姓名');
    return this;
  },
  checkEmail : function(){
    console.log('验证邮箱');
    return this;
  },
  checkPassword : function(){
    console.log('验证密码');
    return this;
  }
}
console.log('*****************');
var checkSix = new CheckObjectSix();
checkSix.checkName().checkEmail().checkPassword();

/**
|--------------------------------------------------
| 函数的祖先级，在添加函数的时候可以这样做
|--------------------------------------------------
*/
Function.prototype.addMethod = function(name,fn){
  this[name] = fn;
  return this;  //实现链式
};
var methods = function(){};
methods.addMethod('checkName',function(){
  console.log('验证姓名');
  return this;
}).addMethod('checkEmail',function(){
  console.log('验证邮箱');
  return this;
}).addMethod('checkPassword',function(){
  console.log('验证密码');
  return this;
});
console.log('===============')
methods.checkName().checkEmail().checkPassword()

/**
|--------------------------------------------------
| 换一种方式使用方法
|--------------------------------------------------
*/
Function.prototype.addMethodTwo = function(name,fn){
  this.prototype[name] = fn;
  return this;
}
var Methods = function(){};
Methods.addMethodTwo('checkName',function(){
  console.log("验证姓名");
}).addMethodTwo('checkEmail',function(){
  console.log("检测邮箱");
})
console.log('###############');
var method = new Methods();
method.checkName();
method.checkEmail();