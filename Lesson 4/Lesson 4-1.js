// ������ �������


var yearBirthday=+prompt("������� 1 \n\n��� ��������","1990");

var old = 2019 - yearBirthday;


!yearBirthday ? alert ("������") : isNaN(yearBirthday) ?  alert ("�� ����� �� �����") :  old>=18 ? alert ("������ ��������") : alert ("��� ����� ������� � ������ ������");
