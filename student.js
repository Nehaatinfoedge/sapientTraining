function student(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
	this.validate = function(){
		if(this.student_id==''){
			alert('Please enter student id.');
			return false;
		}
		if(this.student_name==''){
			alert('Please enter student name.');
			return false;
		}
		if(this.student_mobile=='')
			student_mobile='NULL';
		if(this.student_email=='')
			student_email='NULL';
		if(this.student_username==''){
			alert('Please enter username.');
			return false;
		}
		if(this.student_password==''){
			alert('Please enter password.');
			return false;
		}
		if(this.student_address=='')
			student_address='NULL';
		if(this.student_age=='')
			student_age='NULL';
		return true;	
	}
	if(this.validate()){
		this.id=student_id;
		this.name=student_name;
		this.mobile=student_mobile;
		this.email=student_email;
		this.username=student_username;
		this.password=student_password;
		this.address=student_address;
		this.age=student_age;
	}
}
student.prototype.getStudentId = function(){
	return this.id;
};
student.prototype.getStudentName = function(){
	return this.name;
};
student.prototype.getStudentMobile = function(){
	return this.mobile;
};
student.prototype.getStudentEmail = function(){
	return this.email;
};
student.prototype.getStudentUserName = function(){
	return this.username;
};
student.prototype.getStudentPassword = function(){
	return this.password;
};
student.prototype.getStudentAddress = function(){
	return this.address;
};
student.prototype.getStudentAge = function(){
	return this.age;
};
student.prototype.addStudent = function(){
	studentStack[this.id]={};
	student_course_array[this.id] = [];
	studentStack[this.id]['name'] = this.name;
	studentStack[this.id]['mobile']= this.mobile;
	studentStack[this.id]['email'] = this.email;
	studentStack[this.id]['username'] = this.username;
	studentStack[this.id]['password'] = this.password;
	studentStack[this.id]['address'] = this.address;
	studentStack[this.id]['age'] = this.age;
	if(window.sessionStorage){
		window.sessionStorage.setItem('student_'+this.id,JSON.stringify(studentStack[this.id]));
	}
	console.log(window.sessionStorage.getItem('student_'+this.id));
};
student.prototype.editStudent = function(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
	if(!studentStack.hasOwnProperty(student_id))
	{
		alert('Student Id doesnot exist. you can edit existing studdent only.');
		return false;
	}
	studentStack[student_id]['name'] = student_name;
	studentStack[student_id]['mobile']= student_mobile;
	studentStack[student_id]['email'] = student_email;
	studentStack[student_id]['username'] = student_username;
	studentStack[student_id]['password'] = student_password;
	studentStack[student_id]['address'] = student_address;
	studentStack[student_id]['age'] = student_age
	if(window.sessionStorage){
		window.sessionStorage.setItem('student_'+student_id,JSON.stringify(studentStack[student_id]));
	}
	console.log(window.sessionStorage.getItem('student_'+student_id));
};
student.prototype.deleteStudent = function(student_id){
	if(!studentStack.hasOwnProperty(student_id))
	{
		alert('Student Id does not exist. you can delete existing student only.');
		return false;
	}
	delete studentStack[student_id];
	window.sessionStorage.removeItem('student_'+student_id);
};
student.prototype.searchStudent = function(student_id){
	if(!studentStack.hasOwnProperty(student_id))
	{
		alert('Student Id does not exist. you can search existing student only.');
		return false;
	}
	if(window.sessionStorage){
		console.log(window.sessionStorage.getItem('student_'+student_id));
		
		for(var i=0;i<=student_course_array[student_id].length;i++){
			if(student_course_array[student_id][i]!=undefined && student_course_array[student_id][i].length)
			{			
				console.log('courses allocated to the mentioned student with course id'+student_course_array[student_id][i]+' have the following details \n');
				console.log(window.sessionStorage.getItem('course_'+student_course_array[student_id][i]));
			}

			if(course_fee_array[student_course_array[student_id][i]]!=undefined && course_fee_array[student_course_array[student_id][i]].length){
				console.log('fees associated with course'+ student_course_array[student_id][i] +' for the mentioned student with fee id '+course_fee_array[student_course_array[student_id][i]]+'\n');
				console.log(window.sessionStorage.getItem('fees_'+course_fee_array[student_course_array[student_id][i]]));

			}
		
		}
		

	}
};
