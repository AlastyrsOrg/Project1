document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("button");
    const audio = new Audio("audio/sound.mp3");

    button.addEventListener("click", function (event) {
      event.preventDefault();
      audio.play();
    });
});

console.log("this is a test");