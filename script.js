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
  console.log(memory_array);

var card = $('.col-sm-3 img');
var openedCard = [];
function showCards(){
    var currentNum = parseInt(event.target.parentElement.id.substring(4));
    card[currentNum].src = memory_array[currentNum];
    

    openedCard.push(event.target);
    var len = openedCard.length;
    if (len === 2){
        console.log('hey');
        if (openedCard[0].src === openedCard[1].src) {
            console.log("same");
            matched();


        } else {
            console.log("different");
            unmatched();
        }
    } else {
        console.log('bah');
        
    }

}

$('.col-sm-3').on('click',showCards);



function matched(){
    openedCard[0].removeEventListener("click", showCards);
    openedCard[1].removeEventListener("click", showCards);
    openedCard = [];

}

function unmatched(){
    setTimeout(function(){
        
        openedCard[0].src = "https://vignette.wikia.nocookie.net/logopedia/images/0/0f/Barbie_2000s.svg/revision/latest?cb=20170705215137";
        openedCard[1].src = "https://vignette.wikia.nocookie.net/logopedia/images/0/0f/Barbie_2000s.svg/revision/latest?cb=20170705215137";
        openedCard = [];

    },1000)
}






