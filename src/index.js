
exports.min = function min (array) {
	if (!(Array.isArray(array)) || array.length == 0) {
		return 0;
	};

	let counter = array[0];

  	for (let i = 0; i < array.length-1; i++) {
  		if (array[i] < counter) {
  			counter = array[i];
  		};
  	};

  	if (counter < array[array.length-1]) {
  		return counter;
  	} else {
  		return array[array.length-1];
  	}
}

exports.max = function max (array) {
  	if (!(Array.isArray(array)) || array.length == 0) {
		return 0
	}

	let counter = array[0];

  	for (let i = 0; i < array.length-1; i++) {
  		if (array[i] > counter) {
  			counter = array[i];
  		};
  	};

  	if (counter > array[array.length-1]) {
  		return counter;
  	} else {
  		return array[array.length-1];
  	}
}

exports.avg = function avg (array) {
	if (!(Array.isArray(array)) || array.length == 0) {
		return 0
	}

	let counter = 0

	for (let i = 0; i < array.length; i++) {
		counter += array[i];
	}
	return counter / array.length
}

