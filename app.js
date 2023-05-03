let idPlayerName = document.getElementById("player-name");
// idPlayerName.innerHTML = 'yourname';

// alert("Enter Your Name");

alert("Enter Your Name");



function alert(el) {
  const boxCon = document.getElementById('alertbox');
  // boxCon.appendChild(boxEl)
  const boxEl = document.createElement("div");
  const onUrl = window.location.href;
  // const onUrl = `onclick="location.href='${url}'"`
  // const alertCon = document.getElementById('alert');
;

  // boxEl.classList.add("note");
  boxEl.classList.add('alertbox');
  boxEl.classList.add('alert');
  // boxEl.style.top = '-50%';
  boxEl.style.opacity = 0;
  boxEl.innerHTML = ''
  boxEl.style.top = 0;
  boxEl.innerHTML = `
      <h2 onclick="window.location.href='${onUrl}'">${el}</h2><span id='close-add'>&times;</span>
      <input onclick="this.select()" type="text" id="input-name-value" value="User...">
      <button onclick="updateBtnName()" id="btn-save-name">save</button>
  `;

  setTimeout (() => {
    boxEl.style.opacity = 1;
  } , 1000)



  document.body.appendChild(boxEl);

  function transitionBox() {
    // boxEl.style.opacity = 0;
    setTimeout(() => {
    // boxEl.style.top = '-40%';
    boxEl.style.opacity = 0;
    }, 500);
    setTimeout(() => {
      boxEl.remove();
    }, 1600)
  }
  

  // setTimeout(box.style.opacity = 0, 1000);
  // setTimeout(() => {const box = document.getElementById('box');}
  // setTimeout(alertCon.style.display = none, 3000);

  const close = document.getElementById('close-add');
  close.addEventListener('click', transitionBox);

  // setTimeout(() => {
  //     boxEl.style.top = '-50%';
  // }, 6000);
  // setTimeout(() => {
  //     boxEl.remove()
  // }, 7000);

}



// idPlayerName.innerHTML = inputNamePass.value;

function updateBtnName() {
  // idPlayerName.innerHTML = inputNamePass.value;

  // var inputNamePass = document.getElementById("myText").value;
  let inputNamePass = document.getElementById('input-name-value').value;

  idPlayerName.innerHTML = inputNamePass;
}



const game = () => {
  let pScore = 0;
  let cScore = 0;

  //Start the Game
  const startGame = () => {
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  const playMatch = () => {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function () {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function () {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

        setTimeout(() => {
          //Here is where we call compare hands
          compareHands(this.textContent, computerChoice);
          //Update Images
          playerHand.src = `./assets/${this.textContent}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
        }, 2000);
        //Animation
        playerHand.style.animation = "shakePlayer 2s ease";
        computerHand.style.animation = "shakeComputer 2s ease";
      });
    });
  };

  const updateScore = () => {
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };

  const compareHands = (playerChoice, computerChoice) => {

    // let inputNamePass = document.getElementById('input-name-value').value;


    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice) {
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        // winner.textContent = "Player Wins";
        winner.innerHTML = `${idPlayerName.innerText} wins`;
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Bot Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Bot Wins";
        cScore++;
        updateScore();
        return;
      } else {
        // winner.textContent = "Player Wins";
        winner.innerHTML = `${idPlayerName.innerText} wins`;
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Bot Wins";
        cScore++;
        updateScore();
        return;
      } else {
        // winner.textContent = "Player Wins";
        winner.innerHTML = `${idPlayerName.innerText} wins`;
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //Is call all the inner function
  startGame();
  playMatch();
};

//start the game function
game();
