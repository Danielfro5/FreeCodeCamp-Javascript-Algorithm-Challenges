
function destroyer(arr) {
var args = Array.prototype.slice.call(arguments);

  arr = arr.filter(function(val){
    for(i=1;i<=arguments.length;i++){
  return val !== args[i];
   }
});

  return arr;
}


destroyer([1, 2, 3, 1, 2, 3], 2, 3);
