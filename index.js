var drumButtonsArr = document.querySelectorAll('.drum');
for (var i=0 ;i<drumButtonsArr.length ;i++){
    drumButtonsArr[i].addEventListener('click',function(){
        var buttonInnerHtml = this.innerHTML;
        makeSound(buttonInnerHtml);
        animateActive(buttonInnerHtml);
    });
}
document.addEventListener("keypress",function(e){
    makeSound(e.key);
    animateActive(e.key);
});
function makeSound(key){
    switch (key) {
        case 'w':
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'a':
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case 's':
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case 'd':
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'j':
            var snare = new Audio("sounds/snare.mp3");
            snare.play();
            break;
        case 'k':
            var kick_bass = new Audio("sounds/kick-bass.mp3");
            kick_bass.play();
            break;
        case 'l':
            var crash = new Audio("sounds/crash.mp3");
            crash.play();
            break;
        default:
            break;
    }
}
function animateActive(key){
    var currentKey = document.querySelector("."+key);
    currentKey.classList.add("active");
    setTimeout(function(){
        currentKey.classList.remove("active");
    },100)
}