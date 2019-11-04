var value = prompt('Значение кратное которому','2');
	

var maxValue = prompt('До какого числа','10');


if (!value || !maxValue)
	console.log('Отмена');
else{
	
	for(var i=1; i<=maxValue; i++){
		if(!(i % value)){
    	console.log(i);
    }
	
	}

// через while
	var count = 1;
	while(count++ <= maxValue){

		if  (!(count % value)) {
		console.log(count);
		}

	}
}