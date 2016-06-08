

var a = ["a", "e", "h", "t", "f", "c", "g", "b", "d"];
var b = ["a", "d", "e", "f"];
function collect_same_elements(a, b) {
	if (a.length > b.length) {
		return test(a, b);
	}else{
		return test(b, a);
	}
}

function test(a, b){
	var arr = [];
	for(var i = 0; i < a.length; i++){
		for(var j = 0; j < b.length; j++){
			if(a[i] === b[j]){
				arr.push(b[j]);
				continue;
			}
		}
	}
	return arr;
}		

module.exports = collect_same_elements;
