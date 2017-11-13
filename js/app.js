/*var ul = document.getElementsByTagName('ul')[0]*/
/*var ul = document.querySelectorAll('ul')[0];
var ul = document.getElementsByClassName('ul-class');*/
var ul = document.getElementsByName('ul-name')[0];

for (var i = 0; i< ul.children.length; i++)
 console.log(ul.children[i].textContent);
//capturando el elemento padre//
 var padre = ul.firstElementChild.parentElement;
 //creando nuevo elemento li//
 var hijo = document.createElement('li');
 //agregando texto al nuevo li//
 hijo.textContent = 'item nuevo';
 //agregando
 padre.appendChild(hijo);
 var hermano = padre.children[2];

 padre.insertBefore(hijo,hermano);
