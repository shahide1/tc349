function searchKeyPress(e)
    {
        // look for window.event in case event isn't passed in
        if (typeof e == 'undefined' && window.event) { e = window.event; }
        if (e.keyCode == 13)
        {
            check(login);
        }
    }
    function check(form)/*function to check userid & password*/
    {
    /*the following code checkes whether the entered userid and password are matching*/
    if(form.pswrd.value == "apcaspss21")
    {
    document.location.href = 'info/localinfo.html'; /*opens the target page while Id & password matches*/
    }
    else
    {
    alert("Invalid credentials - please try again");/*displays error message*/
    }
    }

