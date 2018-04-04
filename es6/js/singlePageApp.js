function createUser(){
	var obj = {}
		, email = $('#email').val();

	obj[email]={};
	obj[email]['fn']=$('#fn').val();
	obj[email]['ln']=$('#ln').val();
	obj[email]['add']=$('#add').val();
	obj[email]['ph']=$('#ph').val();
	obj[email]['city']=$('#city').val();

	var data = getUserList();
	if(data.hasOwnProperty(email)){
		data[email] = obj[email];
		window.sessionStorage.setItem('userList',JSON.stringify(data));
	}
	else {
		window.sessionStorage.setItem('userList',JSON.stringify(obj));
	}

}
function signIn(){
	return specificUser($('#inputEmail').val()).
	then((response)=>{
		if(response.hasOwnProperty($('#inputEmail').val())){
			
			return 1;
			//return false;
			
			//return new Promise((resolve,reject)=>{resolve("user-list.html");});
			
		}
		else{
			
			//return new Promise((resolve,reject)=>{resolve("create-user.html");});
			//window.location.href="create-user.html";
			return 2;
			
		}
	})
	.catch((err)=>{
			
			
	});

}
function getUserList(){
	if(window.sessionStorage){
		const obj = JSON.parse(window.sessionStorage.getItem('userList'));
		let output = {};
		for(var key in obj){
			output[key] = obj[key];
		}
		return output;
	}
}
function getUsers(){
	var data = getUserList();
	var tr = '<tr><th>Name</th><th>Address</th><th>City</th><th>Phone</th></tr>';
	var tableRow = [];
	tableRow.push(tr);
	for(var key in data){
		var tr = '<tr><th>'+data[key].fn+' '+data[key].ln+'</th><th>'+data[key].add+'</th><th>'+data[key].city+'</th><th>'+data[key].phone+'</th></tr>';
		tableRow.push(tr);
	}
	
	$('.table').html(tableRow);
	return false;
}
function specificUser(email){
	const p = new Promise((resolve,reject)=>{
		var data = getUserList();
		resolve(data);
	});
	
	return p;
	
}
