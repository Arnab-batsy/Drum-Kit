// Event Listener- To start registering the button clicks!
// Sets up a function to be called whenever any specified event is delivered to the target!

// document.querySelector("button").addEventListener("click", handleClick) 
// selecting first button and adding Event Listener so that function might be called on action
// No parenthesis cuz we're passing only the name of the function as input and not entirely calling it
// function handleClick(){
//     alert("I got Clicked!");
// }

// document.querySelector(".a").addEventListener("click", function(){alert("I got Tapped!");}) 
// Anonymous Function- without a name

function Switching(x){;
    switch (x) {
        case "w":
            var m= new Audio('sounds/tom-1.mp3'); //Creating audio object
                //Constructs HTML audio Element
                m.play(); //Calling play function (attribute of the audio element)
            break;
            case "a":
                var m= new Audio('sounds/crash.mp3');
                m.play();
            break;
            case "s":
                var m= new Audio('sounds/kick-bass.mp3');
                m.play();
            break;
            case "d":
                var m= new Audio('sounds/snare.mp3');
                m.play();
            break;
            case "j":
                var m= new Audio('sounds/tom-2.mp3');
                m.play();
            break;
            case "k":
                var m= new Audio('sounds/tom-3.mp3');
                m.play();
            break;
            case "l":
                var m= new Audio('sounds/tom-4.mp3');
                m.play();
            break;
        default: console.log(x);
            break;
    }
}

// for(var i=0; i<document.querySelectorAll(".drum").length; i++){
// document.querySelectorAll(".drum")[i].addEventListener("click", function(){alert("I got Clicked!");}) 

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){
        //'this'- Identity of the button that triggered the event listener. Selects current object.
       Switching(this.innerHTML);
    }) 
    }

// Adding event listener to keyboard keys
// Use Keydown in stead of key presses (Updated) to detect key presses

for(var i=0; i<document.querySelectorAll(".drum").length; i++){
document.addEventListener("keydown", function(event){
   //Passing 'event' as parameter to detect the keypress that triggered the event listener
//Using 'key' attribute to detect the key
    Switching(event.key);
})
}

// Higher order functions and passing functions as arguments

// function add(num1, num2){
//     return num1+num2;
// }
// function multiply(num1, num2){
//     return num1*num2;
// }
// you don't need to specify the types of parameters
// So, 3rd input will expect a function

// function calculate (num1, num2, operator){
//     return operator(num1, num2);
// }
// alert(calculate(2,3,multiply));

// Debugger in dev tools
// You select any element and inspect it using dev tools, the element can be accessed in the console 
// using $0 variable
