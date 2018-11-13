function register(){//Function Definition
    var FirstName=document.getElementById('firstname').value;
    var LastName = document.getElementById('lastname').value;
	var DateOfBirth = document.getElementById('dob').value;
    var Email=document.getElementById('email').value;
    var Password=document.getElementById('password').value;
    var ConfirmPassword=document.getElementById('cnfpassword').value;
	var len = Password.length;
	
	var returnValue = true;
   if(FirstName === ''){
        alert('First Name can not be blank.');
		returnvalue = false;
    }
	
	if(LastName === ''){
		alert('Last Name can not be blank.');
		returnvalue = false;
	}
	
    else if(Email === ''){
        alert('Email can not be blank.');
		returnvalue = false;
    }
	
	else if(DateOfBirth === ''){
		alert('DateOfBirth can not be blank.');
		returnvalue = false;
	}
	
	else if ((Email.indexOf("@") === -1) || (Email.indexOf(".") === -1)){
		alert('Incorrect Email id');
		returnvalue = false;
	}
		
	/*else if(Password === ''){
        alert('Password can not be blank.');
		returnvalue = false;
    }

	else if(len < 8){
		alert('Password is too short');
		returnvalue = false;
	}

	else if(len > 15) {
		alert('Password is too long');
		returnvalue = false;
	}

	else if((Password.indexOf("%")== -1) && (Password.indexOf("!") == -1) && (Password.indexOf("@") == -1)){
		alert('Password should contain one special character');
		returnValue = false;
	}
	
    else if(ConfirmPassword === ''){
        alert('Confirm Password can not be blank.');
		returnValue = false;
    }
	
	else if(Password != ConfirmPassword){
		alert('Password and ConfirmPassword did not match!');
		returnvalue = false;
	}
*/
	if(returnvalue = true){
		// var FN = FirstName.substring(0,3);
		// var res = FN.concat(LastName.substring(0,3),DateOfBirth.substring(0,2),DateOfBirth.substring(3,5),DateOfBirth.substring(6,10));
		alert("New User successfully Registered");
	}
	
    return returnvalue;
}