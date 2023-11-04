document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    var name = document.getElementById("text").value;
    var email = document.getElementById("email").value;
    if(name && email)
    {
        alert("Name: " + name + "\nEmail: " + email);
        document.getElementById("text").value = '';
        document.getElementById("email").value = '';
    }
    else
    {
        alert("All attributes are empty");
    }
    
});