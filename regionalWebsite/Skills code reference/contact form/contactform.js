window.onload = validate;

function validate () {
   
	var form = document.getElementById('registration')
	//form.onsubmit
	document.getElementById('submit').onclick= function registration() {
		 
		document.getElementById('name_error').innerHTML="";
		document.getElementById('email_error').innerHTML="";
    	document.getElementById('comments_error').innerHTML="";	
		
		if(form.name.value == "")
			{   
				
			document.getElementById("name_error").innerHTML = "This field is required";
			document.getElementById("name").focus();
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
