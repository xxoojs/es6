function test(){
	console.log(this);
}

setTimeout(function(){
	test();
},100)

function parent(){

	function child(){
		console.log(this);
	}

	return child;

	return {a:1;b:1}
}

let {a,b} = parent()();

var obj = {a:1,b:2};
parent(obj)
function parent({a,b}}){
	a
}