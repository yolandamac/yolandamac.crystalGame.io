var totalLoses = 0;
    var totalWins = 0;
    var scoreCounter = 0;	
    var matchPoints = Math.floor(Math.random()*101+19);



     $('.matchPoints-display').text(matchPoints);

    	console.log(matchPoints);

     $('.losses').text(totalLoses); 
     $('.total-wins').text(totalWins);
     $('#yourCurrentScore').text(scoreCounter);


  var crystalRandom1 = Math.floor(Math.random()*11+1)
  var crystalRandom2 = Math.floor(Math.random()*11+1)
  var crystalRandom3 = Math.floor(Math.random()*11+1)
  var crystalRandom4 = Math.floor(Math.random()*11+1)


	$('#crystal1').on ('click', function(){
		console.log('clicked crystal 1');

		console.log('click crystal 1 scorecounter' + scoreCounter);

		console.log('adding scores' + scoreCounter + crystalRandom1);

    	scoreCounter = scoreCounter + crystalRandom1;
    
    	$('#yourCurrentScore').text(scoreCounter); 

    	setTimeout(checkScore, 600);

    });


	$('#crystal2').on ('click', function(){
		console.log('clicked crystal 2');

		console.log('click crystal 2 scorecounter' + scoreCounter);

		console.log('adding scores' + scoreCounter + crystalRandom1);

    	scoreCounter = scoreCounter + crystalRandom2; 
    
    	$('#yourCurrentScore').text(scoreCounter);

    	setTimeout(checkScore, 600);


    });

    	$('#crystal3').on ('click', function(){
		console.log('clicked crystal 3');

		console.log('click crystal 3 scorecounter' + scoreCounter);

		console.log('adding scores' + scoreCounter + crystalRandom3);

    	scoreCounter = scoreCounter + crystalRandom3; 
    
    	$('#yourCurrentScore').text(scoreCounter);

    	setTimeout(checkScore, 600);

    });

	$('#crystal4').on ('click', function(){
		console.log('clicked crystal 4');

		console.log('click crystal 4 scorecounter' + scoreCounter);

		console.log('adding scores' + scoreCounter + crystalRandom4);

    	scoreCounter = scoreCounter + crystalRandom4; 
    
    	$('#yourCurrentScore').text(scoreCounter);

    	setTimeout(checkScore, 600);

    });

    function checkScore() {
    	if (scoreCounter == matchPoints){
          alert('You are THE Crystal Collector!!  Your final points were ' + scoreCounter + '.');

             totalWins++; 
  			$('.total-wins').text(totalWins);
  			 resetGame();
        }

        else if (scoreCounter > matchPoints){
          	alert('Your Crystal Collecting Skills are Weak!!  Your final points were ' + scoreCounter + '.');
            totalLoses++;
        	$('.losses').text(totalLoses);
  			
  			resetGame();
        }; 
    }


    function resetGame() {

    	scoreCounter = 0;
	    matchPoints = Math.floor(Math.random()*101+19);

	    console.log('here is your new current score on reset ' + scoreCounter);

	   	//getRandomPointsToMatch();

    	$('.matchPoints-display').text(matchPoints);

     	$('#yourCurrentScore').text(scoreCounter);

    	console.log('here are the new match points' + matchPoints);

    	console.log('here is you new current score 2nd log ' + scoreCounter);

    	crystalRandom1 = Math.floor(Math.random()*11+1)
 		crystalRandom2 = Math.floor(Math.random()*11+1)
  		crystalRandom3 = Math.floor(Math.random()*11+1)
  		crystalRandom4 = Math.floor(Math.random()*11+1)

  	};