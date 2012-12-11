
function subscribe(){
	var x=document.forms["input"]["firstname"].value;
	var y=document.forms["input"]["cardnumber"].value;
	var z=document.forms["input"]["lastname"].value;
	var a=document.forms["input"]["email"].value;
	var b=document.forms["input"]["phone"].value;

	x = x.replace(/^\s+/, '').replace(/\s+$/, '');
	y = y.replace(/^\s+/, '').replace(/\s+$/, '');
	z = z.replace(/^\s+/, '').replace(/\s+$/, '');
	a = a.replace(/^\s+/, '').replace(/\s+$/, '');
	b = b.replace(/^\s+/, '').replace(/\s+$/, '');
	
	if (x==null || x=="" || y==null || y=="" || z==null || z=="" || a==null || a=="" || b==null || b=="")
	{
		alert("All fields are required!");
		return false;
	}

	else{alert("Thank you!  You are now subscribed."); }
	
	return true;
		
}