name = document.getElementById ('nameID');
name = document.getElementsByClassName ('className'); //возвращает псевдо - массив нодов
name = document.getElementsByTagName  ('h1')


name = document.querySelector ('name') // .name  #name тег
name = document.querySelectorAll ('') // возвращает массив
name = document.querySelector ('#name  > ul ') // только дочерние елементы не уходя в глубь

name.innerHTML // содердимое HTML    .innerHTML = '<h2 style="color : red" >Hello</h2>'
name.textContent //контент тега
name.value  // содержимое импутов

name.getAttribut ('href') //возвращает сожержимое атрибута
name.attributes // возвращает обьект атребутов
name.setAttribute ('href', 'https://ya.ru')

name.classList.add('nameClass') // добавить класс
name.classList.remove('nameClass') // удалить класс
name.classList.contains('nameClass') // есть ли класс у елемента возвращвет true или false

name.addEvenListner ('click', function() {
                this.style.backgroundColor = 'green' // задать стиль //this елемент
}) // событие 
 // то же самое
name.addEvenListner ('click', function(event) {
    event.style.backgroundColor = 'green' // задать стиль //this елемент
})



name.addEvenListner ('click', function(){},  false )   // третий параметр порядок выполнения вложеных 
// елементов (true или false)

name.addEvenListner ('click', function(event){
    event.stopPropagation (); // останавливает событие родителя елемента в поле вложеного, действует только вложеный елемент
} ) 

event.preventDefault()  // отключает событие вроде как, делает елемент неактивным

event.target  // получаем елемент
event.target.tagName //получаем тег елемента

/*
if (event.target.tagName == 'p'){

}*/
event.target.classList.contains('nameCLass') // проверка на наличие класа 