var amountWords = 100,   //количество строк
	minLetter = 1,		// минимальное количество букв в строке
	maxLetter = 9,		// максимальное количество букв в строке
    masLeters = [],
    masWords = [],
    amountLetter=0;


   function random (min,max){

   	return Math.floor(Math.random() * ((max + 1) - min) + min); 
  }

  
  	for (var words = 0; words < amountWords; words++){

  		masLeters[words] = [];
  		
  		amountLetter = random(minLetter,maxLetter);

  		for (var count = 0; count < amountLetter; count++){

  			masLeters[words][count] = String.fromCharCode (random(97,122));  // Заполняем массив рандомными буквами
  		}
  	}


  	masWords = masLeters.map( (value) => value.join('')); // Массив Строк

  	//console.log (masWords);



  function number (mas){

  		return mas.map ((value,index)=> `${index + 1} string : ${value}`);

  }

console.log (number (masWords));