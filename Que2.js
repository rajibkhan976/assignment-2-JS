document.onreadystatechange = function () {
  if (document.readyState === 'complete') {
	  
	var result = document.getElementById('result');
	let arr = [1, 2, 2, 3, 4, 4, 5];
	let valueCount = 0;
	arr.map((element, index) => {
		valueCount = 0;
		for(var c = 0; c < arr.length; c++) {
			if (element === arr[c]) {
				valueCount++;
				if (valueCount > 1) {
					arr.splice(arr.indexOf(element), 1);
				}
			}
		}
	});
	result.innerHTML = arr;
	console.log(arr);
  }
}