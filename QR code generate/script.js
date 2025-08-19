let imgBox = document.getElementById("qr");
let qrImage = document.getElementById("qr-img");
let qrText = document.getElementById("text");
let downloadBtn = document.getElementById("download-btn"); 

qrText.focus();

function generateQR() {
    if (qrText.value.length > 0) {      
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add("show-img");
        qrText.value = "";
        downloadBtn.style.display = "inline-block";
    } else {
        qrText.classList.add("error");
        setTimeout(() => qrText.classList.remove("error"), 1000); 
        qrText.focus();
    }
}

function downloadQR() {
    let link = document.createElement("a");
    link.href = qrImage.src;
    link.download = "qr-code.png";  
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

qrText.addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        generateQR();
    }
});

downloadBtn.addEventListener("click", downloadQR);
