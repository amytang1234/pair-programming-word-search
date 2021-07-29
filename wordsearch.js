//const transpose = require("../d2/matrix_transposition");
const transpose = function(matrix) {
    let arr = [];
    let temp=[];
    if (matrix.length !== 0){
    // put the elements of 2-D array into a temprory 1D array
    for (let i = 0;i < matrix.length; i++) {
      for (let j = 0; j < matrix[i].length; j++) 
        { temp.push(matrix[i][j]);
        }
    };
    
    // create a new empty array
    //get elements of temp array by the row and col of the new array

    let len =  matrix[0].length;
    for (let row = 0; row < len; row++) {
        arr[row] = [];
        for (let col= 0; col < matrix.length; col++) {
        let x = temp[col * len + row] ;
        arr[row].push(x);; 
     }
    }
}
    return arr;  
}
const wordSearch = (letters, word) => { 
  const horizontalJoin = letters.map(ls => ls.join(''));
  const verticaljoin = transpose(letters).map(ls => ls.join(''));
  let found = false;
  if (letters.length === 0) {
    return false;
  } else {
    for (l of horizontalJoin) {
      if (l.includes(word)) found = true; 
    }
    for (l of verticaljoin) {
      if (l.includes(word)) found = true;
    }
  }
  return found;
}

module.exports = wordSearch;
