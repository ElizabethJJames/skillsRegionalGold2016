// JavaScript Document
window.onload = validate;

function validate () {
   
	var form = document.getElementById('registration')
	//form.onsubmit
	document.getElementById('submit').onclick= function registration() {
		 
		document.getElementById('user_error').innerHTML="";
		document.getElementById('password_error').innerHTML="";
		document.getElementById('email_error').innerHTML="";
		document.getElementById('confirm_error').innerHTML="";
    	document.getElementById('first_error').innerHTML="";	
	    document.getElementById("last_error").innerHTML ="";
		
		if(form.user.value == "")
			{   
				
			document.getElementById("user_error").innerHTML = "This field is required";
			document.getElementById("user").focus();
			return false;	
				
			}
			
		if(form.password.value == "")
			{   
				
			document.getElementById("password_error").innerHTML = "This field is required";
			document.getElementById("password").focus();
			return false;	
				
			}
			
		var emailPattern =/^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,7}$/;
		var email_addr = document.getElementById("email").value;
		var email_addr_1 = document.getElementById('confirm').value;
	
		if((emailPattern.test(email_addr)) == false)  	
			{
			 document.getElementById("email_error").innerHTML = "Valid email required";
			 document.getElementById("email").focus();
			 return false;
			 }
				
		if((emailPattern.test(email_addr_1)) == false)
			{
			document.getElementById("confirm_error").innerHTML = "Valid email required";
			document.getElementById("confirm").focus();
			return false;
			}
	
	
		if(document.getElementById('email').value != document.getElementById('confirm').value)
			{
			document.getElementById('confirm_error').innerHTML = "Your emails should match";
			document.getElementById('confirm').focus();
			return false;	
			}
			
	
		if	(form.first.value == "")
			{   
			document.getElementById("first_error").innerHTML = "This field is required";
			document.getElementById("first").focus();
			return false;
			}
			
		if (form.last.value == "")
			{  
			document.getElementById("last_error").innerHTML = "This field is required";
			document.getElementById("last").focus();
			return false;
			}
		if(true)
			{	
			document.getElementById('thanks').className = "thankyou";
			}
			
		else
			{	
			return true;
			
			}
		
		};
}
