//JavaScript program to sort a list of elements using Quick sort.
function quick_Sort(origArray) {
	if (origArray.length <= 1) {
		return origArray;
	} else {

		var left = [];
		var right = [];
		var newArray = [];
		var pivot = origArray.pop();
		var length = origArray.length;

		for (var i = 0; i < length; i++) {
			if (origArray[i] <= pivot) {
				left.push(origArray[i]);
			} else {
				right.push(origArray[i]);
			}
		}

		return newArray.concat(quick_Sort(left), pivot, quick_Sort(right));
	}
}


var myArray = [-22, 09, 99, -150, -05, 239, 4590,-11, 04, 62, -99, -576, 10];

console.log("Original array: " + myArray);
var sortedArray = quick_Sort(myArray);
console.log("Sorted array: " + sortedArray);
