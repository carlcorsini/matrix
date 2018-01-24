let input = "987\n532\n667\n112\n222";

class Matrix {
  constructor(str) {
    this.rows = function (str) {
      let arr = [];
      let rows = input.split('\n');
      for (var i=0; i<rows.length; i++) {
        arr.push(Array.from(rows[i]));
      }
    return arr;
    }();
    this.columns = function(str) {
      let arr = [];
      let rows = input.split('\n');
      for (var i=0; i<rows.length; i++) {
        arr.push(Array.from(rows[i++]));
      }

    }();
  }
}


var rowz = new Matrix(input);
console.log(rowz)

// driver code
if (Matrix('89 1903 3\n18 3 1\n9 4 800').columns[1] === [1903, 3, 4]) {
  console.log('true')
} else {
  console.log('You are a failure, give up.')
}

