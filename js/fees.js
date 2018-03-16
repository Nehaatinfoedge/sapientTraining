var feesStack = {};

function Fees(fees_id,fees_type,fees_description,fees_amount,fees_course_id,fees_total){
	this.validate = function(){
		if(this.fees_id==''){
			alert('Please enter fees id.');
			return false;
		}
		if(this.fees_type==''){
			alert('Please enter fees type.');
			return false;
		}
		if(this.fees_descriptionr=='')
			fees_descriptionr='NULL';
		if(this.fees_amount==''){
			alert('Please enter fees amount.');
			return false;
		}
		if(this.fees_course_id==''){
			alert('Please enter fees course id.');
			return false;
		}
		if(this.fees_total==''){
			alert('Please enter total fees.');
			return false;
		}
		
		return true;	
	}
	if(this.validate()){
		this.fees_id=fees_id;
		this.fees_type=fees_type;
		this.fees_description=fees_description;
		this.fees_amount=fees_amount;
		this.fees_course_id= fees_course_id;
		this.fees_total= fees_total;
	}
};

Fees.prototype.addFees = function(){
	feesStack[this.fees_id]={};
	feesStack [this.fees_id]['type'] = this.fees_type;
	feesStack [this.fees_id]['description']= this.fees_description;
	feesStack [this.fees_id]['amount'] = this.fees_amount;
	feesStack [this.fees_id]['course_id'] = this.fees_course_id;
	feesStack [this.fees_id]['total'] = this.fees_total;
	if(window.sessionStorage){
		window.sessionStorage.setItem('fees_'+this.fees_id,JSON.stringify(feesStack[this.fees_id]));
		
		var course_id=this.fees_course_id;
		if(JSON.parse(window.sessionStorage.getItem('course_fee_array_')))
			course_fee_array = JSON.parse(window.sessionStorage.getItem('course_fee_array_'));
		course_fee_array[course_id]=this.fees_id;
		window.sessionStorage.setItem('course_fee_array_',JSON.stringify(course_fee_array));
	}
	console.log(window.sessionStorage.getItem('fees_'+this.fees_id));
	$('.alert').show();
};
Fees.prototype.editFees = function(fees_id,fees_type,fees_description,fees_amount,fees_course_id,fees_total){
	if(!feesStack.hasOwnProperty(fees_id))
	{
		alert('Fees Id does not exist. you can edit existing fee only.');
		return false;
	}
	feesStack[fees_id]['type'] = fees_type;
	feesStack [fees_id]['description']= fees_description;
	feesStack [fees_id]['amount'] = fees_amount;
	feesStack [fees_id]['course_id'] = fees_course_id;
	feesStack [fees_id]['total'] = fees_total;
	if(window.sessionStorage){
		window.sessionStorage.setItem('fees_'+fees_id,JSON.stringify(feesStack[course_id]));
	}
	console.log(window.sessionStorage.getItem('fees_'+fees_id));
};
Fees.prototype.deleteFees= function(fees_id){
	if(!feesStack.hasOwnProperty(fees_id))
	{
		alert('Fees Id does not exist. you can delete existing fees only.');
		return false;
	}
	delete feesStack[course_id];
	window.sessionStorage.removeItem('fees_'+fees_id);
};
Fees.prototype.searchFees = function(fees_id){
	if(!feesStack.hasOwnProperty(fees_id))
	{
		alert('Fees Id does not exist. you can search existing fees only.');
		return false;
	}
	if(window.sessionStorage){
		console.log(window.sessionStorage.getItem('fees_'+fees_id));
	}
};