
//											”гадай число


var a = parseInt(Math.random( ) * (5-1) + 1);

var x = (parseInt(prompt('”гадайте число от 1 до 5', ''))===a);

alert (`¬аш ответ ${x}`);



//											—реднее арифметическое

var a=prompt('¬ведите числа (с любым разделителем)', '');

var mass=[];

mass = a.split( /\D+/ );

var sum=0;

for (var i = mass.length - 1; i >= 0; i--) {
 		
 		sum+=Number(mass[i]);
}

alert ('—реднее јрифметическое чисел ' + mass + ' равно: ' + (sum/mass.length));