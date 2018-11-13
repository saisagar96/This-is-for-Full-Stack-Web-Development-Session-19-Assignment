function login(){//Function Definition
    obj = [
        {
        "Firstname":"SAI",
        "Lastname":"SAGAR",
        "DOB":"08/09/1996",
        "Email":"y.saisagar@gmail.com",
        "Password":"sagarcool@96"
        },
    
        {
            "Firstname":"JAGGU",
            "Lastname":"MOHAN",
            "DOB":"03/06/1997",
            "Email":"jagan72@gmail.com",
            "Password":"jagan@123"
        },
    
        {
            "Firstname":"VENKATA",
            "Lastname":"RATNAM",
            "DOB":"21/03/1998",
            "Email":"yvratnam61@gmail.com",
            "Password":"ratnam@123"
        }
    ]
    var username = document.getElementById('username').value;
    var pwd = document.getElementById('password').value;
	var returnvalue = true;

    if(username === ''){ // validating if username is blank
        alert('Username can not be blank.');
		returnvalue = false;
    }

    else if(pwd === ''){ // validating if Password is blank
        alert('Password can not be blank.');
		returnvalue = false;
    }

   if (returnvalue == true )
   {

        // var url = './static/data/userdata.json';
        // fetch(url)
        // .then(function(response) {
        //     return response.json()
        // })
        // .then(function(loginJson) {
        //     alert('ddsfdsd');
             returnvalue = Validite(obj);
        // })
        // .catch(function(err) {
        //     console.log(err);
        // });

        function Validite(obj) {
            //alert('inside validate....');
            var i=0;
            while (i<=obj.length-1)
            {
                //  alert(obj[i].Email);
                if(username == obj[i].Email && pwd == obj[i].Password) {
                    // alert('Username is valid');
                    // alert('Password is valid')
                    returnvalue = true;
                    i = obj.length;
                }
                else {
                    // alert('Username is invalid!');
                    // alert('Password is invalid!');
                    returnvalue = false;
                    i++;
                }
            }
                if(returnvalue == true) {
                    alert('Successfully Logged in');
                } 

                else {
                    alert('Invalid User Details');
                    returnvalue = false;
                }
                //alert(returnvalue);
                return returnvalue;
        }

   }// end JOSN reading
    //alert('return value at last ' + returnvalue);
    return returnvalue;
}