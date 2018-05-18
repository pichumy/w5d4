Array.prototype.myEach = function(callback){
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};


Array.prototype.myMap = function(callback){
  let arr = [];
  // for (let i = 0; i < this.length; i++) {
  //   arr = callback(this[i]);
  // }

  this.myEach((el) => {
    arr.push(callback(el));
  });

  return arr;
};

Array.prototype.myReduce = function(callback, acc = 0){
  this.myEach((el) => {
    acc = callback(acc, el);
  });
  return acc;
};
