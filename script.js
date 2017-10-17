/********* Exemple JS
var p = document.createElement('p');
var text = document.createTextNode('Mon text ajouté avec textNode');
p.appendChild(text); //comme appendChild est utilisé plus bas, celui-ci n'apparaît pas

p.innerHTML = "Mon text rajouté en innerHTML";

var content = document.getElementById('content');
content.appendChild(p);

var body = document.getElementsByTagName('body');
console.log(body);

body[0].appendChild(text);

var a = new Array([1]);
var b = a;

a[0] = 20;

console.log(b);
**************/

/**** Bienvenue dans votre apprentissage de jQuery ! ****/
// var $ = 'hello'; /***********UNE VARIABLE PEUT S'APPELLER AVEC UN $ ************/
// console.log($);

$(document).ready(function () {

  var list = $('li');
  list.css('background-color', 'aquamarine');
  console.log(list);

});
