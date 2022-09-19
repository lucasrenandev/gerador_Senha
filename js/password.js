const button = document.getElementById("button")
button.addEventListener("click", generatePassword)

function generatePassword() {
    const characters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?"
    const maxLengthCharacters = 16
    let newPassword = "" 
      
    for(i = 1; i <= maxLengthCharacters; i ++) {
        const randomPassword = Math.floor(Math.random() * characters.length)
        newPassword += characters.charAt(randomPassword, randomPassword + 1)
    }
    document.getElementById("password").value = newPassword
    
}