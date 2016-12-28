/// plik scripts.js

var a = 1;
var b = 9;
var value = (a*a) + (2 * a * b) - (b*b);

if (value > 0) {
	console.log(' Wynik wynosi: ' + value+' Wynik jest dodatni');
}else if (value < 0) {
	console.log(' Wynik wynosi: ' + value+' Wynik jest ujemny');
}else  {
	console.log(' Wynik wynosi: ' + value+' Wynik jest rowny zero');
}

