// Первое задание


var yearBirthday=+prompt("Задание 1 \n\nГод рождения","1990");

var old = 2019 - yearBirthday;


!yearBirthday ? alert ("Отмена") : isNaN(yearBirthday) ?  alert ("Вы ввели не число") :  old>=18 ? alert ("Доступ Разрешен") : alert ("Вам лучше перейти в другой сервис");
