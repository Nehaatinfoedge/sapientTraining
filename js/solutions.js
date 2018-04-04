var arr = [13,11,12,8,6,13];
function findSecondSmallElement(input){
	if(input.constructor === Array && input.length){
		var small1 = input[0];
		var small2 = input[1];
		for(var index=2;index<input.length;index++){
			if(input[index] < small1){
				if(input[index] < small2){
					small2 = small1;
					small1 = input[index];
					
				}
				else {
					small1 = small2;
					small2 = input[index];
					
				}
			}
		}
		console.log(small1,small2)
		var arr = [];
		arr[0]=small1;
		arr[1]=small2;
		return arr;
	}
	
}
var t = findSecondSmallElement(arr);
console.log(t);
