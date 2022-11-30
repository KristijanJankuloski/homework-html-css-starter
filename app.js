document.addEventListener("keypress", function(event) {
    if (event.key === "Enter"){
        document.getElementById("form").submit();
    }
});

function sendMessage(){
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    alert("Message sent " + email + " " + message);
}

function toggleDropdown(){
    let toggle = document.getElementById("mobile-catalog");
    if(window.getComputedStyle(toggle).display === "none"){
        toggle.style.display = 'block';
    }
    else{
        toggle.style.display = 'none';
    }
}