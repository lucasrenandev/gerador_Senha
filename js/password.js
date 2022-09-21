const generatePass = document.getElementById("generatePass")
generatePass.addEventListener("click", generatePassword)

const copyPass = document.getElementById("copyPass")
copyPass.addEventListener("click", copyPassword)

let inputPassword = document.getElementById("password")
let exit = document.getElementById("exit")
const characters = "123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%&?"
const maxLengthCharacters = 16
let newPassword = ""

// Gerar Senha
function generatePassword() {
    
    newPassword = ""
    for(i = 0; i < maxLengthCharacters; i ++) {
        let randomPassword = Math.floor(Math.random() * characters.length)
        newPassword += characters.charAt(randomPassword, randomPassword + 1)
    }
    inputPassword.value = newPassword
    exit.innerHTML = `Sua senha tem <mark>${maxLengthCharacters}</mark> digitos.`
}

// Copiar Senha
function copyPassword() {
    if(!inputPassword.value) {
        window.alert("Gere uma senha para continuar!")
    }
    else {
        navigator.clipboard.writeText(newPassword)
        window.alert("Senha copiada com sucesso!")
    }
}