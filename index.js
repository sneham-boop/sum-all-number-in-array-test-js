function sumItems(array) {
  let sum =0;
  if(!Array.isArray(array)){
    return array;
  }
  for(const i of array){
      sum += sumItems(i);
  }
  return sum;
}

//console.log(sumItems([1,1,[2,8,8],3]));
module.exports = sumItems;