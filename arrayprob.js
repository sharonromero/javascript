//printReverse()
function reverseString(str) {
    return str.split("").reverse().join("");
}
reverseString("hello");

//His code printReverse()
function printReverse(arr) {
	for(var i = arr.length - 1; i >= 0; i--); {
		console.log(arr[i]);
	}
}

printReverse([3,6,2,5])

//isUniform()
isUniform([1,1,1,1]);
isUniform([2,1,1,1]);
isUniform(["a","b","p"]);
isUniform(["b","b","b"]);

function isUniform(arr){
  var first = arr[0];
  for(var i=1;i <=arr.length;i++){
     if(arr[1] !== first){
    return false;
     }
  }

return true;
}

//His code isUniform()
function isUniform(arr) {
	var first = arr[0];
	for(var i = 1; i < arr.length, i++) {
		if(arr[i] !== first) {
			return false
		}	
	}
	return true;
}

//sumArray()
var numbers = [10, 20, 30, 40] // sums to 100
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
  sum += numbers[i]
}

//His code sumArray()
function sumArray(arr) {
	var total = 0; 
	arr.forEach(function(element) {
		total += element;
		});
	return total;
}

//max()
var array1 = [1, 3, 2];

console.log(Math.max(...array1));

//His code max()
function max(arr) {
	var max = arr[0];
	for(var i = 1; i < arr.length; i++) {
		if(arr[i] > max) {
			max = arr[i];
		}
	}
	return max;
}