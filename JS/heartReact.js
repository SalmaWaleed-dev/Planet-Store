let hearts = document.querySelectorAll(".heart-icon");

hearts.forEach(function(heart) {
    heart.addEventListener("click", function() {
        heart.classList.toggle("active");

        if (heart.classList.contains("active")) {
            heart.classList.remove("fa-regular");
            heart.classList.add("fa-solid");
            heart.style.color = "red";
        } else {
            heart.classList.remove("fa-solid");
            heart.classList.add("fa-regular");
            heart.style.color = "";
        }
    });
});