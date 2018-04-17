/**
|--------------------------------------------------
| 常用的数组方法
|--------------------------------------------------
*/

var arr = ['a','b','c','d'];

// 放一个或者多个元素在末尾，改变原数据
arr.push('e');  
arr.push('f','g');
console.log(arr)  //["a", "b", "c", "d", "e", "f", "g"]

// 放一个或多个元素在收尾，改变原数组
arr.unshift('1');
arr.unshift('2','3');
console.log(arr)  //["2", "3", "1", "a", "b", "c", "d", "e", "f", "g"]

// 删除末尾的元素，改变原数组
arr.pop();
console.log(arr)  //["2", "3", "1", "a", "b", "c", "d", "e", "f"]

// 删除首位的元素，改变原数组
arr.shift();
console.log(arr)  //[3", "1", "a", "b", "c", "d", "e", "f"]

// 删除或替换指定位置一个或多个元素，改变原数组
arr.splice(0,2);  // 删除，以索引为准，起始位置，结束位置(包括结束索引元素)
console.log(arr); //["a", "b", "c", "d", "e", "f"]
arr.splice(2,4,6,-1,7,8,9);   // 修改原数组，前两个参数是起始和结束的索引坐标，后面所有参数是要修改的元素
console.log(arr)  //["a", "b", 6, -1, 7, 8, 9]
arr.splice(5,0,'r','r','r');  // 插入元素组，第一个参数是起始位置，第二个0位
console.log(arr)  //["a", "b", 6, -1, 7, "r", "r", "r", 8, 9]
arr.splice(5,3,'t','t','t');  // 修改
console.log(arr)  //["a", "b", 6, -1, 7, "t", "t", "t", 8, 9]


// 合并数组，返回新数组，不改变原数组
var arr1 = ['a','b','c'];
var arr2 = [1,2,3];
var newArr = arr1.concat(arr2);
console.log(newArr)   // ["a", "b", "c", 1, 2, 3]

// 筛选数组中的元素，返回新数组，不改变元素组
// item参数代表原数组
const newArr1 = arr2.filter(function(item){
  return item < 3;
})
console.log(newArr1)  //[1, 2]

// 遍历数组中的元素
arr1.forEach(function(item){
  console.log(item) // a,b,c
})

// 判断数组中是否包含某元素，返回布尔值
var flag = newArr.some(function(item){
  return item === 'a';
})
console.log(flag) //true

// 判断数组中的元素是或否都包含某元素，返回布尔值
// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测
var flag1 = newArr.every(function(item){
  return item == 'a';
})
console.log(flag1)  // false

// 数字数组元素累加
var sum = arr2.reduce(function(pre,cur){
  return pre + cur;
})
console.log(sum)  // 6