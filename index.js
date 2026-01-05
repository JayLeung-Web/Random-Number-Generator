const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOneEl = document.getElementById("password-text-one-el")
let passwordTwoEl = document.getElementById("password-text-two-el")



function generatePassword(){
    let passwordOne = ""
    let passwordTwo = ""
    
    for ( i = 0; i < 15; i++){
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomNumber]
}
    passwordOneEl.textContent = passwordOne
    
    
    for ( i = 0; i < 15; i++){
    let randomNumber = Math.floor(Math.random() * characters.length);
    passwordTwo += characters[randomNumber]
}
    passwordTwoEl.textContent = passwordTwo
}


