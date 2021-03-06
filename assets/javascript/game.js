
        var wins = 0;
        var losses = 0;        
        var guessesLeft = 10;
        var lettersGuessed = [];
        answer = null;  // later set to a random letter

        var updateLettersGuessed = function () {
            document.getElementById("alreadyGuessed").innerHTML = lettersGuessed.join(", ");
        };

        var getNewCompLetter = function () {
            var randomNumber = Math.floor(Math.random() * 26) + 1;  // returns a random integer from 1 to 26
            var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            answer = alphabet.charAt(randomNumber);  // returns character at random index in string
           console.log(answer);            
        };

        var resetGame = function () {
            getNewCompLetter();
        }

        getNewCompLetter(); //sets computer answer onload
            console.log(answer);
        

        document.onkeyup = function (event) {

            var userGuess = event.key.toUpperCase(); //to take both lower and uppercase letters
            

            lettersGuessed.push(userGuess);  //adds guessed letters to array
            updateLettersGuessed();

            if (userGuess === answer) {
                console.log("Win");
                wins++;
                document.getElementById("wins").innerHTML = wins;
                guessesLeft = 10;
                lettersGuessed = [];
                getNewCompLetter();
            }

            else {
                guessesLeft = guessesLeft - 1;
                document.getElementById("guessesLeft").innerHTML = guessesLeft;
            }

            if (guessesLeft === 0) {
                console.log("Game over");
                losses++;
                document.getElementById("losses").innerHTML = losses;
                guessesLeft = 10;
                lettersGuessed = [];
                getNewCompLetter();
            }

        };

   