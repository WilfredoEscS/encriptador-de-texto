const imputText = document.querySelector(".data-input__textarea");
const message = document.querySelector(".encryptor-result__message");
const image = document.querySelector(".encryptor-result__image");
const info = document.querySelector(".encryptor-result__info");
const copyBttn = document.querySelector(".copy-button")

message.value = ""
function encrypt(encryptedText) {
    let encryptionKeys = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]]
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
    copyBttn.style.display = "flex" 
}