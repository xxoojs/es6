for(var i=0; i<4; i++){
	(function(j){
		setTimeout(function(){
			console.log(j);
		},100);
	})(i);
}

for(let i=0; i<4; i++){
	setTimeout(function(){
		console.log(i);
	},100);
}