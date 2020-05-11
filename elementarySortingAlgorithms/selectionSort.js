function selectionSort(arr){
  function swap(arr,i,j){
    var temp = arr[i];
    arr[i]=arr[j];
    arr[j] = temp;
  }
  for(var i=0;i<arr.length;i++){
    var lowest = i;
    for(var j=i+1;j<arr.length;j++){
      if(arr[lowest]>arr[j]){
        lowest=j;
      }
    }
    if(i!==lowest) swap(arr,i,lowest);
  }
  return arr;
}

var x = selectionSort([100,90,80,70,65,34,21,9,87,34,54,55,780]);
console.log(x);
