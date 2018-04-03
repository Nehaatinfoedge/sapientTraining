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
	var userExist =  specificUser($('#inputEmail').val());
	if(userExist){
		window.location.replace("user-list.html");
		return false;
	}
	else{
		window.location.replace("create-user.html");
		return false;
	}

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
	var data = getUserList();
	if(data.hasOwnProperty(email)){
		return true;
	}
	return false;
}
