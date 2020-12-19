
/*
function makePasswd() {
    let passwd = '';
    let chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (i=1;i<8;i++) {
      let c = Math.floor(Math.random()*chars.length + 1);
      passwd += chars.charAt(c)
    }
  
    return passwd;
  
  }
*/

  function generatePassword(length=8, charset="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
    return new Array(length)
      .fill(null)
      .map(()=> charset.charAt(Math.floor(Math.random() * charset.length)))
      .join('');
}

console.log(generatePassword()); // 02kdFjzX
console.log(generatePassword(4)); // o8L5
console.log(generatePassword(16)); // jpPd7S09txv9b02p
console.log(generatePassword(16, "abcd1234")); // 4c4d323a31c134dd