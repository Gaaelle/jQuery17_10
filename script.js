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

  $('#toggleStyle').on('click', function() {
    $('.test').toggleClass('myClass');
    // $('li:even').toggleClass('myClass');
  });

  function colorTask() {
    $('li:odd').css('background-color', 'aquamarine'); //odd ou even
  }

  colorTask();

  $('#content').text('Mon texte');

  $('.active').css('background-color', 'red');
  $('.active').hover(function() {
    $(this).css('background-color', 'green');
  }, function()  {
    $(this).css('background-color', 'red');
  });

  $('#nav').on('click', 'li:even', function() {
    var li = $(this);
    li.css('color', 'yellow');
  });

  var input = $('#task');
  input.on('keypress', function(event) {
    if (event.keyCode === 13) {
      var li = $(document.createElement('li'));
      li.text(input.val());
      li.hide().appendTo('#nav').slideDown(2500); //fadeIn = effet de fondu / 2500 = 2.5 secondes pout apparaître

      input.val(''); //pour vider l'input une fois appuyé sur entrée
      colorTask();
    }
  });

  $('#nav li i').on('click', function() {
    $(this).parent().remove();
  });
});
