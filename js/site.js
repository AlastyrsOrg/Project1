document.addEventListener("DOMContentLoaded", function() {
    let form = document.getElementById("myForm");
    let audio = new Audio("audio/sound.mp3"); 

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        console.log("Form submission stopped, playing audio...");

        audio.play().then(() => {
            console.log("Audio played successfully, submitting form...");
            setTimeout(() => {
                form.submit();
            }, 15000); // Adjust timing based on sound length
        }).catch(error => {
            console.error("Audio failed to play:", error);
            form.submit();
        });
    });
});

console.log("this is a test")