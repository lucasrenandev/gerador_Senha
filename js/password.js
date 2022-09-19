const button = document.getElementById("button")
button.addEventListener("click", generatePassword)

function generatePassword() {
    let characters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?"
    let maxLengthCharacters = 16
    let newPassword = "" 
      
    for(i = 0; i < maxLengthCharacters; i ++) {
        const randomPassword = Math.floor(Math.random() * characters.length)
        newPassword += characters.charAt(randomPassword, randomPassword + 1)
    }
    document.getElementById("password").value = newPassword
    
}