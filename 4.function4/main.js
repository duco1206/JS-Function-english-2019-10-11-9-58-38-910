function countWords(message){
    var strMes = String(message);
    return strMes.split(' ').length;
  }
  countWords('Good morning, I love JavaScript.'); // should return 5

  console.log(countWords('Good morning, I love JavaScript.'));