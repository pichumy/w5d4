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
