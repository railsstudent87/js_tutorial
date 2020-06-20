a = [1,2,3,4,5,6];

Array.prototype.last = function() {
  return this[this.length - 1];
}

Array.prototype.lastSlice = function() {
  return this.slice(-1)[0];
}