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
console.log("smallest and second smallest element in the array are >>>>",t);

var str = "aabbccdde";
function calculateuniqueCharacter(input){
	if(input == "")
		return false;
	var Arr = input.split("")
		, result={}
		, out = [];
	for(var i=0;i<Arr.length;i++){
		if(result[Arr[i]]==undefined)
			result[Arr[i]] = 1;
		else
			result[Arr[i]] = result[Arr[i]] + 1;
	}

  console.log(result);
  $.each(result,function(k,v){
  	if(v==1)
  		out.push(k);
  });
  return out;
}
var u = calculateuniqueCharacter(str);
console.log("unique elements in the input are >>>>",u);