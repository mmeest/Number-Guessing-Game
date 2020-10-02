var data = "";
var guesses = 0;
var x = Math.floor(Math.random() * 100) + 1;
var guessed = "guessed: "
var smallest = 0;
var biggest = 101;

function compare(){    
    console.log(x);
    dataStr = document.getElementById("userInput").value;
    data = parseInt(dataStr);
    console.log(data);
    hello();
    if (data === parseInt(data, 10) && parseInt(data) <= 100){
        if(data > x){
            document.getElementById("alerts").innerHTML = "Your number is too big!";
            console.log(biggest);
            if(data < biggest){
                biggest = data;
                document.getElementById("biggest").innerHTML = " < " + data;
            }            
        } else if (data < x) {
            document.getElementById("alerts").innerHTML = "Your number is too small!";
            if(data > smallest){
                smallest = data;
                document.getElementById("smallest").innerHTML = data + " < ";
            }            
        } else {
            document.getElementById("alerts").innerHTML = "Good work, You guessed right!";
            document.getElementById("gameArea").style.backgroundImage = 
                "radial-gradient(rgb(124, 252, 0) 50%, rgb(50, 205, 50) 50%)";
            document.getElementById("userInput").remove();
            document.getElementById("btnOk").style.visibility = "hidden";
        }
        guessed += data.toString() + "; ";
        document.getElementById("guessed").innerHTML = guessed;
        guesses += 1;
        document.getElementById("guesses").innerHTML = "Guesses: " + guesses;
    }
    else{
        /* if alert("data is not an integer") */
        return;
    }

}

// clear input field
function hello(){
    document.getElementById('userInput').value = "";
}