
Array.prototype.uniq = function() {
  let empty = [];
  this.forEach( (el)=>{
    if(empty.includes(el)){
      // continue;
    } else {
      empty.push(el);
    }
  });
  return empty;
};

Array.prototype.two_sum = function(){
  let empty = [];
  this.forEach((el, idx, arr) => {
    let j = idx + 1;
    while (j < this.length){
      if (el + arr[j] === 0){
        empty.push([idx, j]);
      }
      j++;
    }
  });
  return empty;
};

Array.prototype.transpose = function(){

  let empty = [[],[],[]];
  this.forEach((el, idx, arrr) => {
    arrr.forEach((el2, idx2, arr2) => {
      // debugger
      empty[idx2][idx] = arrr[idx][idx2];
    });
  });
  return empty;
};

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

Array.prototype.bubbleSort = function(){
  let sorted = false;
  while(!sorted){
    sorted = true;
    for (let idx = 0; idx < this.length; idx++) {
      for (let idx2 = idx+1; idx2 < this.length; idx2++) {

          if(this[idx] > this[idx2]){
            let one = this[idx];
            this[idx] = this[idx2];
            this[idx2] = one;
            sorted = false;

        }
      }
  }}
    return this;
};


String.prototype.substrings = function(){
  let str = [];


    for (let idx = 0; idx < this.length; idx++) {
      for (let idx2 = idx+1; idx2 < this.length; idx2++) {
          str.push(this.slice(idx, idx2));
        }

  }
  return str;
};

Array.prototype.range = function(start, end){
  if (start === end)
    return [];
  else{
    arr = this.range(start + 1, end);
    arr.unshift(this[start]);
    return arr;
  }

};

function sumRec(arr){
  if (arr.length === 0)
    return 0;
  else{
    let number = arr.shift();
    return sumRec(arr) + number;
  }
}

function exponent(base, exp){
  if(exp === 0){
    return 1;
  } else {
    return base * exponent(base, exp - 1);
  }
}

function fibonacci(n){
  
}
