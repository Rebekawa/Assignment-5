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
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
  
    return memory_array;
  }
  
  
  memory_array = shuffle(memory_array);
  console.log(memory_array);

var card = $('.col-sm-3 img')
function showCards(){
    for (var i = 0; i < card.length; i++) {
        var x = event.target;
        if (x === card[i]) {
            card[i].src = memory_array[i];
        }
    }
    
}

$('.col-sm-3').on('click',showCards);








