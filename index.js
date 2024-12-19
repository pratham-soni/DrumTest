var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i=0; i<numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // var audio = new Audio("./sounds/crash.mp3");
        // audio.play();

        var buttonPressed = this.innerHTML;
        var audioPath = '';
        switch (buttonPressed) {
            case 'w':
                audioPath = "tom-1";
                break;
            case 'a':
                audioPath = "tom-2";
                break;
            case 's':
                audioPath = "tom-3";
                break;
            case 'd':
                audioPath = "tom-4";
                break;
            case 'j':
                audioPath = "crash";
                break;
            case 'k':
                audioPath = "kick-bass";
                break;
            case 'l':
                audioPath = "snare";
                break;
            default:
                break;
        }
        audioPath = "./sounds/"+audioPath+".mp3";
        console.log(audioPath);
        var audio = new Audio(audioPath);
        audio.play();

    });
}