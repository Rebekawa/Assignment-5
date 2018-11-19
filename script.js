var memory_array = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwksR-5KF7zP5qIhQtNq6Hqk1Psnmn4il9dbFHYcNkDPDNrXq',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzwksR-5KF7zP5qIhQtNq6Hqk1Psnmn4il9dbFHYcNkDPDNrXq',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47NNW_Mpm-ERVjgWSEWBDQeA6FdqWwdDKMX1_d1F11sn-G1lu5A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ47NNW_Mpm-ERVjgWSEWBDQeA6FdqWwdDKMX1_d1F11sn-G1lu5A',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAMj7za2VP_V-SRAsbrTIfPn_Q3sp1-_04xF_znD2FM_jdAIr',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmAMj7za2VP_V-SRAsbrTIfPn_Q3sp1-_04xF_znD2FM_jdAIr',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfguI1fi5AqtQyB0ESjNqHopL1qlfLZWGGYv1uERI7f8OUf8Xkrg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfguI1fi5AqtQyB0ESjNqHopL1qlfLZWGGYv1uERI7f8OUf8Xkrg',
    'http://usa4russia.com/wp-content/smImg/64478ac125ded98db4b203020654c900.jpg',
    'http://usa4russia.com/wp-content/smImg/64478ac125ded98db4b203020654c900.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKyr_2bbcP-pie_7AryUHU9g8oXNwvsP_CKYzDE-udeoAwi1GjA',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyKyr_2bbcP-pie_7AryUHU9g8oXNwvsP_CKYzDE-udeoAwi1GjA'
];

var endOfGameTally = 12;
var isClicked = true;
//start a new game

var newGame = function () {
    shuffle(memory_array);
    back();
    showCards();
    
}

//Func that returns all the cards back
var back = function () {
    for (var i = 0; i < card.length; i++) {
        card[i].src ="https://vignette.wikia.nocookie.net/logopedia/images/0/0f/Barbie_2000s.svg/revision/latest?cb=20170705215137";
    }
}


$('#newGame').on('click',newGame);

//Func to shuffle

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
  
    while (0 !== currentIndex) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return memory_array;
  }
  
  
  memory_array = shuffle(memory_array);

var card = $('.col-sm-3 img');


//Func to change the src of the image from the back to the front

function showCards(){
    if(isClicked){
        var currentNum = parseInt(event.target.parentElement.id.substring(4));
        card[currentNum].src = memory_array[currentNum];
    }
}

var openedCard = [];

//Func that pushes the 2 cards into an array

function cardOpen() {
      
openedCard.push(event.target);
    var len = openedCard.length;
    if (len === 2){
        isClicked = false;
        if (openedCard[0].src === openedCard[1].src) {
            matched();
            endOfGameTally -= 2;
            endGameModal()


        } else {
            unmatched();
        }
    } else {
        
    }
}

$('.col-sm-3').on('click',showCards);
$('.col-sm-3').on('click',cardOpen);


//2 cards are the same

function matched(){
    openedCard[0].removeEventListener("click", showCards);
    openedCard[1].removeEventListener("click", showCards);
    isClicked =  true;
    
    openedCard[0].classList.add("match");
    openedCard[1].classList.add("match");
    
    
    cardOpen();
    showCards();
    openedCard = [];
    
    

}

//2 cards are different

function unmatched(){
    setTimeout(function(){
        
        openedCard[0].src = "https://vignette.wikia.nocookie.net/logopedia/images/0/0f/Barbie_2000s.svg/revision/latest?cb=20170705215137";
        openedCard[1].src = "https://vignette.wikia.nocookie.net/logopedia/images/0/0f/Barbie_2000s.svg/revision/latest?cb=20170705215137";
        openedCard = [];

        isClicked =  true;

    },1000)
    
}

//Modal

var closeicon = document.querySelector(".close");
var modal = document.getElementById("popup1");
var arrOfMatches = document.getElementsByClassName("match");

function endGameModal() {
    if (endOfGameTally === 0) {
        modal.classList.add("show");
        modal.style.display = "block";
        document.getElementsByClassName("close").onclick = function () {
            modal.style.display = "none";
        }
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        document.getElementById("play-again").addEventListener("click", function (e) {
            playAgain()
        });
        closeModal();
    };
}

function closeModal() {
    closeicon.addEventListener("click", function (e) {
        playAgain()
    });
}

function playAgain() {
    modal.classList.remove("show");
    newGame();
}










