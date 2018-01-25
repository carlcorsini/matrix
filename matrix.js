class Matrix {
  constructor(str) {
// This creates a rows key and populates the rows with each string line and turns them into numbers with separate indexes in each array.
    this.rows = str.split('\n').map(function(arr) {
      return arr.split(' ').map(function(e) {
        return parseInt(e);
      });
    });
    // This makes a columns key and fills it with empty arrays at each index from the length each row
    this.cols = new Array(this.rows[0].length).fill().map(function() {
    return [];
  });
  // This populates the column arrays with the numbers from the rows
    for (var i = 0; i < this.rows.length; i++) {
      for (var j = 0; j < this.rows[i].length; j++) {
        this.cols[j].push(this.rows[i][j]);
      }
    }
  }
}
//Testing
var matrixObj = new Matrix("9 8 7\n5 3 2\n6 6 7\n1 1 2\n2 2 2");
console.log("rows = ", matrixObj.rows);
console.log("columns = ", matrixObj.cols);
console.log(matrixObj.rows[3]);
console.log(matrixObj.cols[1]);
