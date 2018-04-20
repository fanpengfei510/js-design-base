/**
|--------------------------------------------------
| 简单工厂模式：又叫静态工厂方法，由一个工厂对象决定创建某一种产品
  对象类的实例。主要用来创建同一类对象
|--------------------------------------------------
*/
function createPop(type,text){
  //创建一个对象，并对对象拓展属性和方法
  var obj = new Object();
  obj.context = text;
  obj.show = function(){
    //显示方法
    console.log('显示')
  }
  switch(type){
    case 'alert': 
      console.log('alert');
      break;
    case 'prompt' : 
      console.log('prompt');
      break;
    case 'confirm' : 
      console.log('confirm');
      break;
    default:
      console.log('no');
      break;
  }
  return obj;
}

//创建警示框
var userNameAlert = createPop('alert','用户名只能是26个字母和数字');
console.log(userNameAlert.context);
userNameAlert.show()