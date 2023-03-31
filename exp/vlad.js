function validation(){
    var username = document.getElementById("Uname").value;
    var password = document.getElementById("Pass").value;
    if(username == ""){
        alert("Username must be entered!");
        return false;
    }else if(password == ""){
        alert("Please enter Password!");
        return false;
    }else if(password.length<5){
        alert("Password length must be of 6 characters");
        return false;
    }else{
        alert("Logged in Sucessfully");
        return true;
    }
}