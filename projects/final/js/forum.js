	// Popup window code
	function PopupCenter(pageURL, title,w,h) {
	var left = (screen.width/2)-(w/2);
	var top = (screen.height/2)-(h/2);
	var targetWin = window.open (pageURL,title,'toolbar=yes, location=no, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
	} 

	function validateForm()
	{
		var x=document.forms["input"]["user"].value;
		var y=document.forms["input"]["editor"].value;

		x = x.replace(/^\s+/, '').replace(/\s+$/, '');
		y = y.replace(/^\s+/, '').replace(/\s+$/, '');
		
		if (x==null || x=="" || y==null || y=="")
  		{
  			alert("You must enter your name and a discussion.");
  			return false;
  		}
 
	}