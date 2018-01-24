class Matrix {
  constructor(str) {
    this.rows = str.split('\n').map(function(arr) {
      return arr.split(' ').map(function(e) {
        return parseInt(e);
      });
    });
    this.cols = new Array(this.rows[0].length);
    console.log(this.cols); // create a new array with row[0].length empty arrays
    for (var i = 0; i < this.rows.length; i++) {
      // console.log("row number ", i);
      for (var j = 0; j < this.rows[i].length; j++) {
        // console.log("column number", j);
        // console.log("column value", this.rows[i][j]);
        this.cols[j].push(this.rows[i][j]);
      }
    }
  }
}

var matrixObj = new Matrix("9 8 7\n5 3 2\n6 6 7\n1 1 2\n2 2 2");
console.log(matrixObj.rows, " = rows");
console.log(matrixObj.cols, " = cols");
// console.log(matrixObj.rows[0]);
// console.log(matrixObj.rows[0][1]);
// console.log(matrixObj.rows.length);
console.log(matrixObj.cols);



//PSEUDO
//input "string"
//output rows key: string, columns key: string

// obj with rows and columns keys
// add to rows and columns keys by looping over string in different ways
// //for loop for rows key
// create rows[0]
// add "1 2"
// when hit newline marker
// i++ (i will equal 1 to create next row)
// create rows[1]
// add "10 20"
//
// for loop for columns key
// create columns[0]
// add "1 10"
// create columns[1]
// add "2 20"
// columns is harder to just take first numbers of line,
// then second set of numbers in line, etc









// function matrix(input) {
//   var j = 0;
//   var array = [];
//   for (var i = 0; i <= input.length; i++) {
//     if (input[i] === " " || i === input.length) {
//       while (j < i) {
//         array += input[j];
//         j++;
//         console.log(array, " this is the array");
//         console.log(j, " this is j count");
//       }
//     }
// }
// return array;
// }




// console.log(matrix('1 2\n10 20'));
