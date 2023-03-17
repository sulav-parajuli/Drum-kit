for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var key = this.innerHTML;
        // if (document.querySelector(".w") === this) {
        //     var audio = new Audio("sounds/crash.mp3");
        //     audio.play();
        // } else if (document.querySelector(".a") === this) {
        //     var audio = new Audio("sounds/kick-bass.mp3");
        //     audio.play();
        // } else if (document.querySelector(".s") === this) {
        //     var audio = new Audio("sounds/snare.mp3");
        //     audio.play();
        // } else if (document.querySelector(".d") === this) {
        //     var audio = new Audio("sounds/tom-1.mp3");
        //     audio.play();
        // } else if (document.querySelector(".j") === this) {
        //     var audio = new Audio("sounds/tom-2.mp3");
        //     audio.play();
        // } else if (document.querySelector(".k") === this) {
        //     var audio = new Audio("sounds/tom-3.mp3");
        //     audio.play();
        // } else if (document.querySelector(".l") === this) {
        //     var audio = new Audio("sounds/tom-4.mp3");
        //     audio.play();
        // }

        keyevent(key);
        buttonAnimation(key);
    });
}

document.addEventListener("keypress", function(event) {

    var ke = event.key;
    keyevent(ke);
    buttonAnimation(ke);
});

function keyevent(event) {

    switch (event) {
        case "w":
            var audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;
        default:
            console.log(event);
    }
}

function buttonAnimation(currentKey) {
    var activebutton = document.querySelector("." + currentKey);
    activebutton.classList.add("pressed");
    setTimeout(function() {
        activebutton.classList.remove("pressed");
    }, 100);
}