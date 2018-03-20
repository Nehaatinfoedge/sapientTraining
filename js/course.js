var  courseStack={}
	, course_fee_array={};

function Course(course_id,course_name,course_year,course_type,course_description,course_student_id){
	this.validate = function(){
		if(this.course_id==''){
			alert('Please enter course id.');
			return false;
		}
		if(this.course_name==''){
			alert('Please enter course name.');
			return false;
		}
		if(this.course_year=='')
			course_year='NULL';
		if(this.course_type=='')
			course_type='NULL';
		if(this.course_description=='')
			course_description = 'null';
		if(this.course_student_id==''){
			alert('Please enter COURSE STUDENT ID.');
			return false;
		}
		
		return true;	
	}
	if(this.validate()){
		this.course_id=course_id;
		this.course_name=course_name;
		this.course_year=course_year;
		this.course_type=course_type;
		this.course_description= course_description;
		this. course_student_id = course_student_id;
		this.addCourse();
	}
};

Course.prototype.addCourse = function(){
	courseStack[this.course_id]={};
	var course_id=this.course_id;
	
	courseStack [this.course_id]['name'] = this.course_name;
	courseStack [this.course_id]['year']= this.course_year;
	courseStack [this.course_id]['type'] = this.course_type;
	courseStack [this.course_id]['description'] = this.course_description;
	courseStack [this.course_id]['course_student_id'] = this.course_student_id;
	if(window.sessionStorage){
		window.sessionStorage.setItem('course_'+this.course_id,JSON.stringify(courseStack[this.course_id]));
		var student_course_array = JSON.parse(window.sessionStorage.getItem('student_course_array'));
		var sid = this.course_student_id;
		student_course_array[sid].push(this.course_id);
		window.sessionStorage.setItem('student_course_array',JSON.stringify(student_course_array));
		
		
	}
	console.log(window.sessionStorage.getItem('course_'+this.course_id));
	$('.alert').show();
};
Course.prototype.editCourse = function(course_id,course_name,course_year,course_type,course_description,course_student_id){
	if(!courseStack.hasOwnProperty(course_id))
	{
		alert('Course Id does not exist. you can edit existing course only.');
		return false;
	}
	courseStack[course_id]['name'] = course_name;
	courseStack [course_id]['year']= course_year;
	courseStack [course_id]['description'] = course_description;
	courseStack [course_id]['type'] = course_type;
	courseStack [course_id][course_student_id] = course_student_id;
	if(window.sessionStorage){
		window.sessionStorage.setItem('course_'+course_id,JSON.stringify(courseStack[course_id]));
	}
	console.log(window.sessionStorage.getItem('course_'+course_id));
};
Course.prototype.deleteCourse= function(course_id){
	if(!courseStack.hasOwnProperty(course_id))
	{
		alert('Course Id does not exist. you can delete existing course only.');
		return false;
	}
	delete courseStack[course_id];
	window.sessionStorage.removeItem('course_'+course_id);
};
Course.prototype.searchCourse = function(course_id){
	if(!courseStack.hasOwnProperty(course_id))
	{
		alert('Course Id does not exist. you can search existing course only.');
		return false;
	}
	if(window.sessionStorage){
		console.log(window.sessionStorage.getItem('course_'+course_id));
	}
};
function savecourseFrm(){
	var cid=$('#course_id').val()
		, cname=$('#course_name').val()
		, ctype=$('#course_type').val()
		, cyear=$('#year').val()
		, csid=$('#course_student_id').val()
		, cdescription=$('#course_description').val()
		, courseObj = new Course(cid,cname,cyear,ctype,cdescription,csid);	

	//courseObj.addCourse();
	return false;
}