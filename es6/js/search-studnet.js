var dataSet ={}
	,eachStudentArray={};

function searchStudenMain(){
		if(JSON.parse((sessionStorage.getItem('student_'+$('#student_id').val())))==undefined)
		{
			alert('Student Id does not exist. you can search existing student only.');
			return false;
		}
		$('.alert').show();
		if(window.sessionStorage){
			
			var student_course_array = JSON.parse(window.sessionStorage.getItem('student_course_array'));
			if(student_course_array.hasOwnProperty($('#student_id').val()) && student_course_array[$('#student_id').val()].length){
				console.log(window.sessionStorage.getItem('student_'+$('#student_id').val()));
				$('.out').append("Student details are the following:"+window.sessionStorage.getItem('student_'+$('#student_id').val()));
				var sd = JSON.parse(window.sessionStorage.getItem('student_'+$('#student_id').val()));
				eachStudentArray['name']=sd['name'];
				eachStudentArray['email']=sd['email'];
				eachStudentArray['username']=sd['username'];
				eachStudentArray['address']=sd['address'];
				$.each(student_course_array[$('#student_id').val()],function(key,value){
					if(value!=undefined)
					{			

						if(value instanceof Array){
							for(var i=0;i< value.length;i++){
								$('.out').append("courses allocated to the mentioned student with course id "+value[i] +"have the following details \n"+ window.sessionStorage.getItem('course_'+value[i])+"\n");
								console.log('courses allocated to the mentioned student with course id '+value[i]+' have the following details \n');
								console.log(window.sessionStorage.getItem('course_'+value[i]));
								var cd = JSON.parse(window.sessionStorage.getItem('course_'+value[i]));
								console.log(cd);
								eachStudentArray[value[i]]=[];
								eachStudentArray[value[i]]['name']=cd['name'];
								var course_fee_array = JSON.parse(window.sessionStorage.getItem('course_fee_array_'));
								if(course_fee_array!=null && course_fee_array!=undefined && course_fee_array[value[i]]!=null && course_fee_array[value[i]]!=undefined){
									eachStudentArray[value[i]]['fee']=[];
									$.each(course_fee_array,function(index,val){
										console.log('fees associated with course'+ value[i] +' for the mentioned student with fee id '+val+'\n');
										console.log(window.sessionStorage.getItem('fees_'+val));
										$('.out').append("fees associated with course "+ value[i] +" for the mentioned student with fee id "+val+"\n"+
											window.sessionStorage.getItem('fees_'+val));
										var fd = JSON.parse(window.sessionStorage.getItem('fees_'+val));
										eachStudentArray[value[i]]['fee'][val]=fd['name'];

									});

								}
							}
						}
						else{
							$('.out').append("courses allocated to the mentioned student with course id "+value +"have the following details \n"+ window.sessionStorage.getItem('course_'+value)+"\n");
							console.log('courses allocated to the mentioned student with course id '+value+' have the following details \n');
							console.log(window.sessionStorage.getItem('course_'+value));
							var cd = JSON.parse(window.sessionStorage.getItem('course_'+value));
							console.log(cd);
							eachStudentArray[value]={};
							eachStudentArray[value]['name']=cd['name'];
							var course_fee_array = JSON.parse(window.sessionStorage.getItem('course_fee_array_'));
							if(course_fee_array!=null && course_fee_array!=undefined && course_fee_array[value]!=undefined && course_fee_array[value]!=null){
								eachStudentArray[value]['fee']={};
								$.each(course_fee_array,function(index,val){
									console.log('fees associated with course'+ value +' for the mentioned student with fee id '+val+'\n');
									console.log(window.sessionStorage.getItem('fees_'+val));
									$('.out').append("fees associated with course "+ value +" for the mentioned student with fee id "+val+"\n"+
										window.sessionStorage.getItem('fees_'+val));
									var fd = JSON.parse(window.sessionStorage.getItem('fees_'+val));
									eachStudentArray[value]['fee'][val]=fd['amount'];
								});

							}

						}
					}
					
				});
				dataSet[$('#student_id').val()] = eachStudentArray;
				window.sessionStorage.setItem('dataSet_'+$('#student_id').val(),JSON.stringify(dataSet[$('#student_id').val()]));
			
			}
			else {
				$('.out').append("Student details are the following:"+window.sessionStorage.getItem('student_'+$('#student_id').val()));
				$('.out').append("No Data Available.");
			}
			

		}
		setTimeout(function(){
			//window.location.replace("student-detail.html?student_id="+$('#student_id').val());
			return false;
		},10000)
		return false;
	}


	