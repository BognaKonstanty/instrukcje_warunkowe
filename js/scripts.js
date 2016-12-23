/// plik scripts.js

var a = 1;
var b = 9;
var value = (a*a) + (2 * a * b) - (b*b);
console.log(' Wynik: ' + value);

if (value > 0) {
	console.log('Wynik jest dodatni');
}

else if (value < 0) {
	console.log('Wynik jest ujemny');
}


else  {
	console.log('Wynik jest rowny zero');
}
