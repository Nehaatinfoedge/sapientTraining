	var studentStack={}
		, student_course_array={};
		alert('neha');
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
				console.log('Student Id does not exist. you can delete existing student only.');
				return false;
			}
			delete studentStack[student_id];
			window.sessionStorage.removeItem('student_'+student_id);
		}
		searchStudent(student_id){
			if(!studentStack.hasOwnProperty(student_id))
			{
				console.log('Student Id does not exist. you can search existing student only.');
				return false;
			}
			if(window.sessionStorage){
				console.log(window.sessionStorage.getItem('student_'+student_id));
				
				const student_course_arr = student_course_array[student_id];
				for(const[index,elem] of student_course_arr.entries()){
					if(elem!=undefined && elem.entries())
					{			
						console.log('courses allocated to the mentioned student with course id '+elem+' have the following details \n');
						console.log(window.sessionStorage.getItem('course_'+elem));
					}
					const course_fee_arr = course_fee_array[elem]; 
					if(course_fee_arr!=undefined && course_fee_arr.entries()){
						console.log('fees associated with course'+ elem +' for the mentioned student with fee id '+course_fee_array[elem]+'\n');
						console.log(window.sessionStorage.getItem('fees_'+course_fee_array[item]));

					}
				
				}
			}
		}

	} 
	function saveStudentFrm(){
		var id=$('#student_id').val()
			, name=$('#student_name').val()
			, mobile=$('#studemt_mobile').val()
			, email=$('#student_email').val()
			, address=$('#address').val()
			, username=$('#username').val()
			, password=$('#password').val()
			, confirm_password=$('#password_confirmation').val()
			, age=$('#age').val()
			, studentObj = new Student(id,name,mobile,email,username,password,address,age);	

		//studentObj.addStudent();
		//window.location.replace("course-MIS.html");
		return false;
	}
