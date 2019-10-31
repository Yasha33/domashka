// Первое задание

var yearBirthday=+prompt("Задание 1 \n\nГод рождения","1990");

var old = 2019 - yearBirthday;

	if (!isNaN(yearBirthday) && old>=18)	
    alert ("Доступ Разрешен");
    
  else if (!isNaN(yearBirthday) && old<18)
  	alert ("Вам лучше перейти в дрйгой сервис");
    
  else
  	alert ("Вы ввели не число");
  
  
// Второе задание

var mas = prompt('Задание 2 \n\nВаш возраст и опыт работы ','33 лет, 3 года').split( /\D+/ );

 (mas[0]>=30 && mas[1]>=3) ? alert( 'Вы подходите') : alert("Не подходите");





// Третье Задание

 var data = prompt('Задание 3 \n\n EUR - евро \n US - доллар \n RUB - рубль \n UA - гривна \n Какая валюта?, В какую валюту?, Сколько?','EUR,RUB,100');
 
 var mas1=data.split(',');
 
 var toUS=0;
 
 switch (mas1[0]){
 			
      case 'EUR': 
          toUS=mas1[2] * 1.1;
        break;
        
      case 'RUB':
      		toUS=mas1[2] / 62.15;
    		break;
       
      case 'UA':
       		toUS=mas1[2] / 25;
         break;
       
      case 'US':
       		toUS=mas1[2];
         break;
          
      default:
      		alert ("Вы допустили ошибку");
 
 }
 
 var result=0;
 
  switch (mas1[1]){
 			
      case 'EUR': 
          result=toUS / 1.1;
        break;
        
      case 'RUB':
      		result=toUS * 62.15;
    		break;
       
      case 'UA':
       		result=toUS * 25;
         break;
       
      case 'US':
       		result=toUS;
         break;
          
      default:
      		alert ("Вы допустили ошибку");
 
 }
 
 
 	if(result) alert(`Операция успешна \n${mas1[2]} ${mas1[0]} = ${result.toFixed(2)} ${mas1[1]}` );
 
 