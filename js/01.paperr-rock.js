 //Over here I am restoring the the value from the LocalStorage into a variable name score.
 //The JSON.parse method is used to convert back the JSON formatted object into a JavaScript object.
 //Also using the getItem method helps to retrieve the the data from LocalStorage
        let score = JSON.parse(localStorage.getItem('score'));
        
        if (score === null){
            score = {
            wins: 0,
            losses: 0,
            ties: 0
        }

        
        }
        function playGame(chose){
            const computerMove = pickComputerMove();
            let result = '';
            if (chose === 'scissors'){
                if (computerMove === 'rock'){
                    result = 'You lose';
                }
                else if(computerMove === 'paper'){
                    result = 'You win';
                }
                else if (computerMove === 'scissors'){
                    result = 'Tie';
                }
            }
            else if (chose === 'paper'){
                    if (computerMove === 'rock'){
                        result = 'You win';
                    }
                    else if(computerMove === 'paper'){
                        result = 'Tie';
                    }
                    else if (computerMove === 'scissors'){
                        result = 'You lose';
                    }
                }   

                else if (chose === 'rock'){
                    if (computerMove === 'rock'){
                        result = 'Tie';
                    }
                    else if(computerMove === 'paper'){
                        result = 'You lose';
                    }
                    else if (computerMove === 'scissors'){
                       result = 'You win';
                    }
                }
                    //To update the game to keep the score
                    //This uses objects also known as dictionary in python
                if (result === 'You win'){
                    score.wins++;
                }
                else if(result === 'You lose'){
                    score.losses++;
                }
                else if(result === 'Tie'){
                    score.ties++;
                }


                //This store the score of the the game in memory.
                //It retains the score from the previous played game score
                //The JSON.stringify is used to convert our object to JSON format.
                localStorage.setItem('score',JSON.stringify(score));
                

                updateScoreElement();


                document.querySelector('.js-result').innerHTML  = result;
                document.querySelector('.js-moves').innerHTML  = `You picked ${chose}. Computer picked ${computerMove}`;
                
            //     alert(`You picked ${chose}. Computer picked ${computerMove}. ${result}
            // Wins: ${score.wins}, Losses: ${score.losses} and Ties: ${score.ties}`);  
            }

      function pickComputerMove(){
                const randomNumber= Math.random();
        if(randomNumber >= 0 && randomNumber < 1/3){
             computerMove = 'rock';
        }
        else if (randomNumber >= 1/3 && randomNumber < 2/3){
                computerMove = 'paper';
       }
        else if(randomNumber >= 2/3 && randomNumber < 1){
            computerMove = 'scissors';
        }

        return computerMove;
      }
      function updateScoreElement(){
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses} and Ties: ${score.ties}`;

      }
      updateScoreElement();