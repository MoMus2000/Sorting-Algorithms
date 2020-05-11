function bubbleSort(arr){
  function swap(i,j){
    var temp = arr[i];
    arr[i]=arr[j];
    arr[j]=temp;
  }
  for(var i = arr.length;i>=0;i--){
    for(var j=0; j<i-1;j++){
      if(arr[j]>arr[j+1]) swap(j,j+1);
    }
  }
  return arr;
}


var x = bubbleSort([45,12,34,56,98,10000,35]);
console.log(x);
