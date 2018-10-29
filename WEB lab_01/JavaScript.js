var name;
name = 'Yurii';                 //1
alert(name);


var a = 13, d = 7, b = 9;
var c = a - b;                  //2
var result = c + d;
alert(result);


var variant = prompt('Variant ?');
if (variant == 7) {
    alert('Вірно!');}
else if (variant > 7) {
    alert('Вірно!');
}else {                                       //3
    alert('Невірно!'); 
}
if (a % 2 == 0) {
    a = a + 7;
} else {
    a = a - 3;
}
alert(a);

var i = 1;
do {

    var div = document.getElementById('list');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    div.appendChild(ul);                     //4
    ul.appendChild(li);

    li.innerHTML = (i * i);


    i++;
} while (i <= 23);


nextPrime:
for (var i = 2; i <= 13; i++) {

    for (var j = 2; j < i; j++) {
        if (i % j == 0) continue nextPrime;
    }

    var div = document.getElementById('list');
    var ul = document.createElement('ul');
    var li = document.createElement('li');

    div.appendChild(ul);                     //4
    ul.appendChild(li);

    li.innerHTML = (i);
}