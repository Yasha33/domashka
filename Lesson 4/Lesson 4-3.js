var data = prompt('������� 3 \n\n EUR - ���� \n US - ������ \n RUB - ����� \n UA - ������ \n ����� ������?, � ����� ������?, �������?','EUR,RUB,100');
 
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
      		alert ("�� ��������� ������");
 
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
      		alert ("�� ��������� ������");
 
 }
 
 
 	result ? alert(`�������� ������� \n${mas1[2]} ${mas1[0]} = ${result.toFixed(2)} ${mas1[1]}` ) : alert ("������") ;