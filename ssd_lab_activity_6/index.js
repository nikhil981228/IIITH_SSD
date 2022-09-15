function validateForm() {
    let x = document.forms["myForm"]["email"].value;
    console.log(x);
    var validRegex = /^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/;
    if (!x.match(validRegex))
    {
        document.getElementById('emailError').innerHTML="Please enter a valid EMail";
        return false;
    }
    else{
        document.getElementById('emailError').innerHTML="";
    }
    
    let y = document.forms["myForm"]["servername"].value;
    if (!y.match(/^[A-Z]*$/))
    {
        document.getElementById('serverError').innerHTML="Please enter a valid Server Name";
        return false;
    }
    else{
        document.getElementById('serverError').innerHTML="";
    }
   

    var pass1 = document.getElementById("spass").value;
    var pass2 = document.getElementById("scpass").value;
    console.log(pass1);

    if(pass1 != pass2)
    {
        alert("Not Valid");
        // document.getElementById('spassError').innerHTML="Password not Matching";
        // document.getElementById('scpassemailError').innerHTML="Password not Matching";
        return false;
    }

    return true;
  }