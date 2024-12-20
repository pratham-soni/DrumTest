var numberOfButtons = document.querySelectorAll(".drum").length;

function audPath (char) {  
    switch (char) {
        case 'w':
            return "tom-1";
        case 'a':
            return "tom-2";
        case 's':
            return "tom-3";
        case 'd':
            return "tom-4";
        case 'j':
            return "crash";
        case 'k':
            return "kick-bass";
        case 'l':
            return "snare";
        default:
            return;
    }
};

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonPressed = this.innerHTML;
        var audioPath = audPath(buttonPressed);
        
        audioPath = "./sounds/"+audioPath+".mp3";
        animation(buttonPressed)
        var audio = new Audio(audioPath);
        audio.play();
    });
};

document.addEventListener("keydown", function (event) {
    var keyPressed = event.key;
    var audioPath = audPath(keyPressed);
    
    audioPath = "./sounds/"+audioPath+".mp3";
    var audio = new Audio(audioPath);
    animation(keyPressed)
    audio.play();
});

function animation(key){
    var keyToAnimate = document.querySelector("."+key);
    keyToAnimate.classList.add("pressed");

    setTimeout(() => {
        keyToAnimate.classList.remove("pressed");
    }, 100);
}