const imputText = document.querySelector(".data-input__textarea");
const message = document.querySelector(".encryptor-result__message");
const image = document.querySelector(".encryptor-result__image");
const info = document.querySelector(".encryptor-result__info");
const copyBtn = document.querySelector(".copy-button")

message.value = ""
function encrypt(encryptedText) {
    let encryptionKeys = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    encryptedText = encryptedText.toLowerCase();
    for (let i = 0; i < encryptionKeys.length; i++) {
        if (encryptedText.includes(encryptedText[i][0])) {
            encryptedText = encryptedText.replaceAll(encryptionKeys[i][0], encryptionKeys[i][1]) 
        } 
    }
    return encryptedText
}
function encryptBtn() {
    const encryptMsg = encrypt(imputText.value);
    message.value = encryptMsg;
    message.setAttribute('rows','8')
    imputText.value = "";
    image.style.display = "none"
    info.style.display = "none"
    copyBtn.style.display = "flex" 
}

/* Funcion para desencriptar texto */

function decrypt(decryptedText){
    let decryptionKeys = [["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]]
    decryptedText = decryptedText.toLowerCase();
    for (let i = 0; i < decryptionKeys.length; i++) {
        if (decryptedText.includes(decryptedText[i][0])) {
            decryptedText = decryptedText.replaceAll(decryptionKeys[i][0], decryptionKeys[i][1]) 
        } 
    }
    return decryptedText
}
function decryptBtn() {
    const decryptMsg = decrypt(imputText.value);
    message.value = decryptMsg;
    message.setAttribute('rows','8')
    imputText.value = "";
    image.style.display = "none"
    info.style.display = "none"
    copyBtn.style.display = "flex" 
}
