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
 if( n <= 0)
  return [];
  else if(n === 1)
    return [1];
    // else if(n===2)
    // return [1,1];

  fibo = fibonacci(n-1);
  fibo.push(sumRec(fibo.slice(fibo.length-2, fibo.length)));
  return fibo;
}

function deepDup(arr){
  let arrtwodeetwo = [];

  arr.forEach(el => {
    if (getType(el) === '[object Array]')
      arrtwodeetwo.push(deepDup(el));
    else
      arrtwodeetwo.push(el);
  });
  return arrtwodeetwo;
}

var getType = function(el){
  return Object.prototype.toString.call(elem);
};

function bsearch(arr, target){
  if(arr.length === 0){
    return -1;
  }
  let middle = Math.floor(arr.length / 2);
  if(target === arr[middle])
    return middle;
  else if(target > arr[middle]){
    let value = bsearch(arr.slice(middle+1), target);
    if (value === -1 )
      return -1;
    else
      return middle + value + 1;
  }else {
    return bsearch(arr.slice(0,middle), target);
  }

  return -1;
}

function mergesort(arr){
  if (arr.length === 1)
    return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergesort(arr.slice(0, middle));
  let right =  mergesort(arr.slice(middle));
  return mergeSorter(left, right);
}

function mergeSorter(left, right){
  let sorted = [];
  while (left.length>0 && right.length>0){
    if (left[0] > right[0]){
      sorted.push(right.shift());
    } else {
      sorted.push(left.shift());

    }
  }
  return sorted.concat(left).concat(right);


}

function subsets(arr){
  if (arr.length ===1)
    return arr;

  arr.forEach((el, idx, arrtwodeetwo) => {
    
  });
}
