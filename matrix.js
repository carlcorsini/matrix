class Matrix {
  constructor(str) {
    this.rows = str.split('\n').map(function(arr) {
      return arr.split(' ').map(function(e) {
        return parseInt(e);
      });
    });
    this.cols = new Array(this.rows[0].length).fill().map(function() {
    return [];
  });
    for (var i = 0; i < this.rows.length; i++) {
      for (var j = 0; j < this.rows[i].length; j++) {
        this.cols[j].push(this.rows[i][j]);
      }
    }
  }
}

var matrixObj = new Matrix("9 8 7\n5 3 2\n6 6 7\n1 1 2\n2 2 2");
console.log("rows = ", matrixObj.rows);
console.log("columns = ", matrixObj.cols);
console.log(matrixObj.rows[3]);
console.log(matrixObj.cols[1]);
