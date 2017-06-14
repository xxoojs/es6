function fn(x){
	var sum = x;
	var temp = function(y){
		sum += y;
		return temp;
	}
	temp.toString = function(){
		return sum;
	}
	return temp; 
}

fn(1)(2)(3)

1.function作为参数传递
2.把function作为返回值的




fn(1)(2,2)(3,3,3)

function fn(...x){
	var sum = 0;
	for(let item of x){
		sum += item;
	}
	var temp = function(...y){
		for(let item of y){
			sum += item;
		}
		return temp;
	}
	temp.toString = function(){
		return sum;
	}
	return temp; 
}