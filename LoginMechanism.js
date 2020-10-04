var account = [
    {
        username: "risqull",
        password: "qwerty"
    }, 
    {
        username: "admin",
        password: "admin"
    },
    {
        username: "guest",
        password: "guest"
    }
]

function checkUser() {
    let validated = false
    var username = document.getElementById("user").value
    var password = document.getElementById("userpass").value

    for (i = 0; i < account.length; i++) {
        if (username == account[i].username && password == account[i].password) {
            validated = !validated
            break
        }
        
    }

    if (validated == true) {
        window.location.href = "https://rizqul.github.io/"
    } else{
        alert("incorect username or password")
    }
}