// validation
function mydata() {
    let x = document.getElementById("name").value;
    let y = document.getElementById("pass").value;
    
    // field validation
    if (x == "" || y == "")
        {
        alert("All fields are mandatory!");
        return false;
        }
    
    // name validation
    else if (x.length < 3)
        {
            alert("Name must contain atleast 3 characters!");
            return false;
        }
    
    // password validation
    else if (y.length < 8)
        {
            alert("password must contain length 8!");
            return false;
        } 
    else 
        {
            return true;
        }
}

// shows password
function show() {
    let p = document.getElementById("pass");
    if (p.type === "password")
    {
        p.type = "text";
    }
    else {
        p.type = "password";
    }
}

// clears input field
function clr(){
    document.getElementById("name").value = "";
    document.getElementById("pass").value = "";
    return false;
}