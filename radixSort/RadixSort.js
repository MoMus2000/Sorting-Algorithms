function getDigit(num, i) {
  return Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;
}

function digitCount(num){
  var String = "";
  String = String+num;
  return parseInt(String.length);
}

function mostDigit(arr){
  var currentHigh = -Math.pow(2,53)-1;
  for(var i=0;i<arr.length;i++){
    if(currentHigh<arr[i]){
      currentHigh = arr[i];
    }
  }
  return digitCount(currentHigh);
}

function radixSort(arr){
  var maxDigitcount = mostDigit(arr);
  for(var k=0;k<maxDigitcount;k++){
    var digitBuckets = Array.from({length:10},()=>[]);
    for(var i=0;i<arr.length;i++){
      var digit = getDigit(arr[i],k);
      digitBuckets[digit].push(arr[i])
    }
  arr = [].concat(...digitBuckets);
}
  return arr;
}

var z = radixSort([23,345,5467,12,2345,9852])
console.log(z);
