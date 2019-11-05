

var amountWords = 10,   //количество строк
	minLetter = 2,		// минимальное количество букв в строке
	maxLetter = 8,		// максимальное количество букв в строке
    masLeters = [],
    masWords = [],
    amountLetter=0,
    myObject = {};

   // a-z in Unicode 97-122
   //String.fromCharCode(97,...)

   //var amountLetter =  Math.floor(Math.random() * ((maxLetter + 1) - minLetter) + minLetter);


   function randomLatter (min = 97, max = 122){

   	return String.fromCharCode ( Math.floor(Math.random() * ((max + 1) - min) + min) );
   }

   function randomAmountLatter (){

   	return Math.floor(Math.random() * ((maxLetter + 1) - minLetter) + minLetter)
}

  
  	for (var words = 0; words < amountWords; words++){

  		masLeters[words] = [];
  		

  		for (var count = 0, amountLetter = randomAmountLatter(); count < amountLetter; count++){

  			masLeters[words][count] = randomLatter();
  		}
  	}


  	masWords = masLeters.map( (value) => value.join('')); // Массив Строк

  	console.log (masWords);


  	//console.log (masWords.map((item) => item.length).filter((value, index, array) => value  ));

/*
  	for (var value of masWords.map((item) => item.length)) {

  	myObject[value]=[];
  }*/

  for (var value of masWords) {

  		if (myObject[value.length] == undefined){
  			myObject[value.length]=[];
  			myObject[value.length].push(value);
  		}
  		else
  		myObject[value.length].push(value);
  }

  console.log (myObject);

 	for (var key in myObject){
 		console.log (` ${myObject[key].length} words with ${key} characters `);
 	}