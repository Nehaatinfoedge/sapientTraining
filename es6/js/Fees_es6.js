var feesStack = {}
, course_fee_array={};

class Fees {
	constructor(fees_id,fees_type,fees_description,fees_amount,fees_course_id,fees_total){
		if(this.validate(fees_id,fees_type,fees_description,fees_amount,fees_course_id,fees_total)){
			this.fees_id=fees_id;
			this.fees_type=fees_type;
			this.fees_description=fees_description;
			this.fees_amount=fees_amount;
			this.fees_course_id= fees_course_id;
			this.fees_total= fees_total;
			this.addFees();
		}
	}
	validate(fees_id,fees_type,fees_description,fees_amount,fees_course_id,fees_total){
		if(fees_id==''){
			console.log('Please enter fees id.');
			return false;
		}
		if(fees_type==''){
			console.log('Please enter fees type.');
			return false;
		}
		if(fees_description=='')
			fees_description='NULL';
		if(fees_amount==''){
			console.log('Please enter fees amount.');
			return false;
		}
		if(fees_course_id==''){
			console.log('Please enter fees course id.');
			return false;
		}
		if(fees_total==''){
			console.log('Please enter total fees.');
			return false;
		}
		
		return true;	
	}
	addFees(){
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
	}
	editFees(fees_id,fees_type,fees_description,fees_amount,fees_course_id,fees_total){
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
	}
	deleteFees(fees_id){
		if(!feesStack.hasOwnProperty(fees_id))
		{
			alert('Fees Id does not exist. you can delete existing fees only.');
			return false;
		}
		delete feesStack[course_id];
		window.sessionStorage.removeItem('fees_'+fees_id);
	}
	searchFees (fees_id){
		if(!feesStack.hasOwnProperty(fees_id))
		{
			alert('Fees Id does not exist. you can search existing fees only.');
			return false;
		}
		if(window.sessionStorage){
			console.log(window.sessionStorage.getItem('fees_'+fees_id));
		}
	}
};
function saveFeesFrm(){
	var fid=$('#fees_id').val()
		, ftype=$('#fees_type').val()
		, fdescription=$('#fees_description').val()
		, famount=$('#fees_amount').val()
		, ftotal=$('#fees_total').val()
		, fcourseid=$('#fees_course_id').val()
		, feesObj = new Fees(fid,ftype,fdescription,famount,fcourseid,ftotal);	

	//esObj.addFees();
	return false;
}