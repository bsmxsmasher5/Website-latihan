document.addEventListener("DOMContentLoaded", function() {
    const infoButton = document.getElementById("info-button");
    const infoPopup = document.getElementById("info-popup");

    infoButton.addEventListener("click", function(event) {
        event.preventDefault();
        infoPopup.style.display = "block";
        
        setTimeout(() => {
            infoPopup.style.display = "none";
        }, 3000); // Pop-up akan menghilang setelah 3 detik
    });
});
