
//											������ �����


var a = parseInt(Math.random( ) * (5-1) + 1);

var x = (parseInt(prompt('�������� ����� �� 1 �� 5', ''))===a);

alert (`��� ����� ${x}`);



//											������� ��������������

var a=prompt('������� ����� (� ����� ������������)', '');

var mass=[];

mass = a.split( /\D+/ );

var sum=0;

for (var i = mass.length - 1; i >= 0; i--) {
 		
 		sum+=Number(mass[i]);
}

alert ('������� �������������� ����� ' + mass + ' �����: ' + (sum/mass.length));