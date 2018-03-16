
	
	function Student(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
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
	Student.prototype.getStudentId = function(){
		return this.id;
	};
	Student.prototype.getStudentName = function(){
		return this.name;
	};
	Student.prototype.getStudentMobile = function(){
		return this.mobile;
	};
	Student.prototype.getStudentEmail = function(){
		return this.email;
	};
	Student.prototype.getStudentUserName = function(){
		return this.username;
	};
	Student.prototype.getStudentPassword = function(){
		return this.password;
	};
	Student.prototype.getStudentAddress = function(){
		return this.address;
	};
	Student.prototype.getStudentAge = function(){
		return this.age;
	};
	Student.prototype.addStudent = function(){
		studentStack[this.id]={};
		var student_id=this.id;
		if(window.sessionStorage.getItem('student_course_array')!=null){
			student_course_array = JSON.parse(window.sessionStorage.getItem('student_course_array'));
		}
		student_course_array[student_id] = [];
		studentStack[this.id]['name'] = this.name;
		studentStack[this.id]['mobile']= this.mobile;
		studentStack[this.id]['email'] = this.email;
		studentStack[this.id]['username'] = this.username;
		studentStack[this.id]['password'] = this.password;
		studentStack[this.id]['address'] = this.address;
		studentStack[this.id]['age'] = this.age;
		if(window.sessionStorage){
			window.sessionStorage.setItem('student_'+this.id,JSON.stringify(studentStack[this.id]));
			window.sessionStorage.setItem('student_course_array',JSON.stringify(student_course_array));
		}
		console.log(window.sessionStorage.getItem('student_'+this.id));
		$('.alert').show();
	};
	Student.prototype.editStudent = function(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
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
	Student.prototype.deleteStudent = function(student_id){
		if(!studentStack.hasOwnProperty(student_id))
		{
			alert('Student Id does not exist. you can delete existing student only.');
			return false;
		}
		delete studentStack[student_id];
		window.sessionStorage.removeItem('student_'+student_id);
	};
	Student.prototype.searchStudent = function(student_id){
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


	
