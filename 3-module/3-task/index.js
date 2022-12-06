function camelize(str) {
  let splited = str.split('-');
  let newStr = [];
  for( let i = 0; i < splited.length; i ++) {
    let str = splited[i].split('');
    if( i >= 1 ) {
      str[0] = str[0].toUpperCase();
      newStr.push(str.join(''));
    }
  }
  newStr.unshift(splited[0]);
  newStr = newStr.join('')
  return newStr;
}
