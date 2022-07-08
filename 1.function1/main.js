function reverseString(message){
    var reslut = '';
    var str = String(message);
    for(i = str.length-1; i>=0; i--){
        reslut = reslut + str[i];
    }
    return reslut;
  }
reverseString('hello');
console.log(reverseString('hello'));