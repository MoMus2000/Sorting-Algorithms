function merge(arr1,arr2){
  var results = [];
  var i=0, j =0;
  while(i<arr1.length&&j<arr2.length){
    if(arr2[j]>arr1[i]){
      results.push(arr1[i]);
      i++;
    }else{
      results.push(arr2[j]);
      j++;
    }
  }
  while(i<arr1.length){
    results.push(arr1[i])
    i++;
  }
  while(j<arr2.length){
    results.push(arr2[j])
    j++;
  }
  return results;
}

function mergeSort(arr){
  if(arr.length<=1) return arr;
  var mid = Math.floor((arr.length/2));
  var left = arr.slice(0,mid);
  var right = arr.slice(mid);
  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left,right);
}


var z = mergeSort([23,12,1,3,6,4,3,2,8,90,23,45]);
console.log(z);
