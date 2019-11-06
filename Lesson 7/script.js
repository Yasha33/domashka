
								//Выводит все в console
var amountWords = 10,   //количество строк
	minLetter = 1,		// минимальное количество букв в строке
	maxLetter = 8,		// максимальное количество букв в строке
    masLeters = [],
    masWords = [],
    amountLetter=0,
    myObject = {};


   function randomLatter (min = 97, max = 122){

   	return String.fromCharCode ( Math.floor(Math.random() * ((max + 1) - min) + min) ); //возвращвет рандомную букву
   }

   function randomAmountLatter (){

   	return Math.floor(Math.random() * ((maxLetter + 1) - minLetter) + minLetter) 
}

  
  	for (var words = 0; words < amountWords; words++){

  		masLeters[words] = [];
  		
  		amountLetter = randomAmountLatter();

  		for (var count = 0; count < amountLetter; count++){

  			masLeters[words][count] = randomLatter();  // Заполняем массив рандомными буквами
  		}
  	}


  	masWords = masLeters.map( (value) => value.join('')); // Массив Строк

  	//console.log (masWords);


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