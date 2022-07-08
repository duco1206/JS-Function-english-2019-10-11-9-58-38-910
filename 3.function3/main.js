function alphabetSort(message){
    var srtMes = String(message);
    var strArr = Array.from(srtMes);
    return strArr.sort().join('');
  }
  alphabetSort('hello'); // should return 'ehllo'