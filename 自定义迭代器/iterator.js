var obj = {
	name: 'xuqiang',
	sex: 'man',
	[Symbol.iterator]: function(){
		let arr = [],
			that = this,
			len = -1;
		for(let prop in this){
			arr.push({
				key: prop,
				value: that[prop]
			});
		}
		return {
			next: function(){
				++len;
				if(len < arr.length){
					return {
						value: arr[len],
						done: false
					}
				}else{
					return {
						done: true
					}
				}
				
			}
		};
	}
}

for(let item of obj){
	console.log(item);
}