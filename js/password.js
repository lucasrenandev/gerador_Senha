const button = document.getElementById("button")
button.addEventListener("click", generatePassword)

let exit = document.getElementById("exit")

function generatePassword() {
    const characters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?"
    const maxLengthCharacters = 16
    let newPassword = ""
      
    for(i = 0; i < maxLengthCharacters; i ++) {
        let randomPassword = Math.floor(Math.random() * characters.length)
        newPassword += characters.charAt(randomPassword, randomPassword + 1)
    }
    document.getElementById("password").value = newPassword
    exit.innerHTML = `Sua senha tem <strong>${maxLengthCharacters}</strong> digitos.`
}