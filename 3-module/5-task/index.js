function getMinMax(str) {

  str = str.split(' ');
  str = str.filter((item) => parseInt(item));
  str = str.map((item) => {
    return +item
  })
  let maxNum = Math.max(...str);
  let minNum = Math.min(...str);
  
  return {
    min: minNum,
    max: maxNum,
  }

}
