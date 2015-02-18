load('list.js');
var list = JSON.parse(FIGHTERS_FILE);
function filter(array, test) {i
  var passed = [];
  for (var i = 0; i < array.length; i++) {
	if (test(array[i]))
	passed.push(array[i]);
	}
	return passed
}
print(JSON.stringify(filter(filter, function(person) {
 return person. age > 20 && person.age >29;
})));
	
