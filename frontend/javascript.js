document.getElementById("pdf-upload").addEventListener("change", function() {
    const fileInput = this.files[0];
    if (fileInput) {
        document.getElementById("file-name").textContent = `Selected file: ${fileInput.name}`;
    } else {
        document.getElementById("file-name").textContent = "";
    }
});

function displayPdf() {
    const fileInput = document.getElementById("pdf-upload").files[0];
    if (fileInput) {
        // Here you can handle displaying or uploading the PDF file to the server
        alert("Display PDF functionality is not yet implemented.");
    } else {
        alert("Please upload a PDF file first.");
    }
}



// introduction.js
function openLogin() {
    window.open('login.html', '_blank');
}
