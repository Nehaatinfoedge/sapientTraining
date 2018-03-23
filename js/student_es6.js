	var studentStack={}
		, student_course_array={};

	class Student {
		constructor(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
			if(this.validate(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age)){
				this.id=student_id;
				this.name=student_name;
				this.mobile=student_mobile;
				this.email=student_email;
				this.username=student_username;
				this.password=student_password;
				this.address=student_address;
				this.age=student_age;
				this.addStudent();  // this will add student details if validations all pass easily.
			}
		}
		validate(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
			if(student_id==''){
				console.log('Please enter student id.');
				return false;
			}
			if(student_name==''){
				console.log('Please enter student name.');
				return false;
			}
			if(student_mobile=='')
				student_mobile='NULL';
			if(student_email=='')
				student_email='NULL';
			if(student_username==''){
				console.log('Please enter username.');
				return false;
			}
			if(student_password==''){
				console.log('Please enter password.');
				return false;
			}
			if(student_address=='')
				student_address='NULL';
			if(student_age=='')
				student_age='NULL';
			return true;	
		}
		addStudent(){
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
		}
		editStudent(student_id,student_name,student_mobile,student_email,student_username,student_password,student_address,student_age){
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
		}
		deletStudent(student_id){
			if(!studentStack.hasOwnProperty(student_id))
			{
				alert('Student Id does not exist. you can delete existing student only.');
				return false;
			}
			delete studentStack[student_id];
			window.sessionStorage.removeItem('student_'+student_id);
		}
		searchStudent(student_id){
			if(!studentStack.hasOwnProperty(student_id))
			{
				alert('Student Id does not exist. you can search existing student only.');
				return false;
			}
			if(window.sessionStorage){
				console.log(window.sessionStorage.getItem('student_'+student_id));
				
				for(var i=0;i<student_course_array[student_id].length;i++){
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
		}

	} 