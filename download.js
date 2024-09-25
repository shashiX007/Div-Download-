let downloadButton = document.getElementById("download");
let userImage = document.getElementById("photo");

userImage.addEventListener("change", function(event) {
    const file = event.target.files[0];
    const imgPreview = document.getElementById("userimg");
    if (file) {
        const reader = new FileReader();
        
        reader.onload = function(e) {
            imgPreview.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    } else {
        imgPreview.src = "";
    }
});

downloadButton.addEventListener("click", function() {
    html2canvas(document.getElementById("main")).then(function(canvas) {
        var link = document.createElement("a");
        link.href = canvas.toDataURL("image/png");
        link.download = "div_image.png";
        link.click();
    });
});
