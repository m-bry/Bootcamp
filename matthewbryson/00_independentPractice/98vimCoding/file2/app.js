function binarySort(array, item) {
	var low = 0;
	var high = array.length - 1;

	while (high >= low) {
		var mid = Math.floor((low + high) / 2);
		var guess = array[mid];
		if (guess == item) {
			return mid;
		} else if (guess > item) {
			high = mid - 1;
		} else {
			low = mid + 1;
		}
	}
	return "item not found";
}
var myList = [1, 3, 5, 7, 9];
console.log(binarySort(myList, 9));
