function exam(exam_id,exam_name,exam_type,exam_description,exam_date,exam_student_id){
	this.validate = function(){
		if(this.exam_id==''){
			alert('Please enter exam id.');
			return false;
		}
		if(this.exam_type==''){
			alert('Please enter exam type.');
			return false;
		}
		if(this.exam_name==''){
			alert('Please enter exam name.');
			return false;
		}
		if(this.exam_description=='')
			exam_descriptionr='NULL';
			
		if(this.exam_date==''){
			alert('Please enter exam date.');
			return false;
		}
		if(this.exam_student_id==''){
			alert('Please enter exam student id.');
			return false;
		}
		
		return true;	
	}
	if(this.validate())
	{	
		this.exam_id=exam_id;
		this.exam_name=exam_name;
		this.exam_type=exam_type;
		this.fees_description=fees_description;
		this.fees_date=fees_date;
		this.fees_course_id= fees_course_id;
		this.exam_student_id= exam_student_id;
	}
};

exam.prototype.addexam = function(){
	examStack[this.exam_id]={};
	examStack [this.exam_id]['exam_name'] = this.exam_name;
	feesStack [this.exam_id]['exam_type']= this.exam_type;
	feesStack [this.exam_id]['exam_description'] = this.exam_description;
	feesStack [this.exam_id]['exam_date'] = this.exam_date;
	feesStack [this.exam_id]['exam_student_id'] = this.exam_student_id;
	if(window.sessionStorage){
		window.sessionStorage.setItem('exam_'+this.exam_id,JSON.stringify(examStack[this.exam_id]));
	}
	console.log(window.sessionStorage.getItem('exam_'+this.exam_id));
};
fees.prototype.editFees = function(exam_id,exam_name,exam_type,exam_description,exam_date,exam_student_id){
	if(!examStack.hasOwnProperty(exam_id))
	{
		alert('Exam Id does not exist. you can edit existing exam only.');
		return false;
	}
	feesStack[exam_id]['exam_name'] = exam_name;
	feesStack [exam_id]['exam_type']= fees_type;
	feesStack [exam_id]['exam_description'] = exam_description;
	feesStack [exam_id]['exam_date'] = exam_date;
	feesStack [exam_id]['exam_student_id'] = exam_student_id;
	if(window.sessionStorage){
		window.sessionStorage.setItem('exam_'+exam_id,JSON.stringify(examStack[exam_id]));
	}
	console.log(window.sessionStorage.getItem('exam_'+exam_id));
};
exam.prototype.deleteExam= function(exam_id){
	if(!examStack.hasOwnProperty(exam_id))
	{
		alert('Exam Id does not exist. you can delete existing Exam only.');
		return false;
	}
	delete examStack[exam_id];
	window.sessionStorage.removeItem('exam_'+exam_id);
};
exam.prototype.searchExam = function(exam_id){
	if(!examStack.hasOwnProperty(exam_id))
	{
		alert('Exam Id does not exist. you can search existing exam only.');
		return false;
	}
	if(window.sessionStorage){
		console.log(window.sessionStorage.getItem('exam_'+exam_id));
	}
}
