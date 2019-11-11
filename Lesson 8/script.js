
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

   	return Math.floor(Math.random() * ((maxLetter + 1) - minLetter) + minLetter); 
  }

  function arrayToObject (array){

    var obj = {};

    for (var value of array) {     

      if (obj[value.length] == undefined){
        obj[value.length]=[];
        obj[value.length].push(value);
      }
      else
        obj[value.length].push(value);
    }

    return obj;
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


   myObject = arrayToObject (masWords); // из массива в объект, гле количество символов элемента - ключ объекта

    console.log (myObject);

 	for (var key in myObject){

 		console.log (` ${myObject[key].length} words with ${key} characters `);
 	}