module.exports = function check(str, bracketsConfig) {
  if(str.length % 2 === 1) {
    return false;
  }
  else{
  let x = 100;
  for(let i = 0; i < str.length; i++) {
    switch(str[i]) {
      case '(':
        x += 2;
        break;
      case ')':
        x -= 2;
        if( x < 100) {
          return false;
        }
        break;
      case '[':
        x *= 3;
        break;
      case ']':
        x /= 3;
        if( x < 100) {
          return false;
        }
        break;
      case '{':
        x = x ** 2;
        break;
      case '}':
        x = Math.sqrt(x);
        if( x < 100) {
          return false;
        }
        break;
      case '|':
        x = 1 / x;
        break;
    }
    
  }
  if( x === 100) {
    return true;
  }
  else {
    return false;
  }
}
}