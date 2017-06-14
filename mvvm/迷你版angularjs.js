var obj = {
	name: 'xuqiang',
	sex: 'man',
	title: {
		'work': 'coder',
		'game': 'player'
	}
}

function Angular(obj){
	let that = this,
		copyData = {};
	for(let prop in obj){
		if(typeof obj[prop] == 'object'){
			copyData[prop] = {};
			for(let _prop in obj[prop]){
				copyData[prop][_prop] = obj[prop][_prop];
				Object.defineProperty(obj[prop], _prop, {
					set: function(value){
						copyData[prop][_prop] = value;
						console.log(`${obj.name}'s ${_prop} turn into ${value}`);
					},
					get: function(){
						return copyData[prop][_prop];
					}
				})
			}
		}else{
			copyData[prop] = obj[prop];
			Object.defineProperty(obj, prop, {
				set: function(value){
					copyData[prop] = value;
					console.log(`${obj.name}'s ${prop} turn into ${value}`);
				},
				get: function(){
					return copyData[prop];
				}
			})
		}
	}
}

new Angular(obj);

obj.name = 'wangguoming';