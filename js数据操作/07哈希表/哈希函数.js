function hashFunc(str,max){
  var hashCode = 0;
  [].forEach.call(str,function(item,index){
    hashCode = 37 * hashCode + str.charCodeAt(index);
  })
  return hashCode % max;
}
console.log(hashFunc('a',7))