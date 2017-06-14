function Parents(){
	this.name = 'parent';

	this.sayName = function(){
		alert(1);
	}
}

function Child(){
	this.name = 'child';
}

Child.prototype = new Parents();

var child = new Child();
child.sayName();





(function(){
	class Parents {
		constructor(){
			
		}

		sayName(){
			alert(2);
		}
	}

	class Child extends Parents {
		constructor(){
			super();
		}
	}

	var child = new Child();
	child.sayName();
})()




(function(){
	function Parents(){
		this.name = 'parent';

		this.sayName = function(){
			alert(1);
		}
	}

	function Child(){
		this.name = 'child';
	}

	Child.prototype = new Parents();

	console.log(Child.prototype);
})()