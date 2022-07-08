function palindrome(message){
    var flag = true;
    var strMes = String(message);
    for(var i = 0; i< strMes.length/2; i++){
        if(strMes.charAt(i)!==strMes.charAt(strMes.length-1-i)){
            flag = false;
            break;
        }
    }
    return flag;
  }
palindrome('hello'); // should return false
palindrome('abcba'); // should return true

console.log(palindrome('hello'));
console.log(palindrome('abcba'));