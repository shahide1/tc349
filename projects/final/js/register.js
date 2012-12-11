function register(){
	
	var x=document.forms["signup"]["username"].value;
	var y=document.forms["signup"]["password"].value;

	x = x.replace(/^\s+/, '').replace(/\s+$/, '');
	y = y.replace(/^\s+/, '').replace(/\s+$/, '');
	
	if (x==null || x=="" || y==null || y=="")
	{
		alert("All fields are required!");
		return false;
	}
	
	else{
	alert("Thank you!  Your account is now setup.");
	}
	return true;
}