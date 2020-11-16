let email=document.getElementById("Email");
let error=document.getElementById("error");
function validate(){
   let regex= /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
   if(regex.test(email.value)){
       error.innerHTML="valid";
       error.style.color="green";
       return true;
   }
   else
   {
       error.innerHTML="Invalid email address";
       error.style.color="red";
       return false;
   }
}

function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{7,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{6,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = 'More Characters';
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green">Strong!</span>';
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange">Medium!</span>';
    } else {
        strength.innerHTML = '<span style="color:red">Weak!</span>';
    }
}

function phnValidate(){
    let phn = document.form1.number;
let error1 = document.getElementById("error1");
let phoneno =/^\(?([0-9]{3})\)?[-.]?(0-9){3})[-.]?([0-9]{4})$/;
if(phoneNo.value.match(phoneno)){
        error1.innerHTML="phone number accepted";
       error1.style.color="green";
    
       
    return true;
    
      }
      else
        {
            
            
             error1.innerHTML="invalid phone number";
             error1.style.color="red";
    return false;
        }
    }
