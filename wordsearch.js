// Pair programming by @willsmores and @wayandandae

// transpose a 2D array diagonally, then return an array with its width and length switched
const transpose = matrix => {
// create a variable to hold the resulting array
const result = [];
// error message for different array length than the first array
const lError = "Every array's length should match the length of the first array. Please try again.";
// number of elements of the first array
const matrixL = matrix[0].length;
const matrixH = matrix.length

// // iterate through each array
// matrix.forEach(array => {
//   // if the length of another array is different than matrixL, throw the error message
//   if (array.length !== matrixL) throw new Error(lError);
// })

// iterate through each array, until width of array is reached
for(let i = 0; i < matrixL; i++){
    // create a varaible to hold each line of array
    result[i] = [];
    // iterate through each element of array, until height of array
    for(let j = 0; j < matrixH; j++){
    // push element of same index from each array
    result[i].push(matrix[j][i])
    }
}

// return the resulting transposed array
return result;
};


const wordSearch = (letters, word) => { 

let wordFound = false;
if (word === "") return false;
const horizontalJoin = letters.map(ls => ls.join(''));
const horizontalJoinBw = letters.map(ls => ls.reverse().join(''));
const verticalJoin = transpose(letters).map(ls => ls.join(''));
const verticalJoinBw = transpose(letters).map(ls => ls.reverse().join(''));
const directions = [horizontalJoin, horizontalJoinBw , verticalJoin, verticalJoinBw]

console.log(directions)
directions.forEach(direction => {
    for (line of direction) {
    if (line.includes(word)) wordFound = true;
    }
})


return wordFound;
};

module.exports = wordSearch