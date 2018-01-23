function matrix(input) {
  var obj = {};

  for (var i = 0; i < input.length; i++) {
    if (typeof parseInt(input[i]) === Number)
      console.log(obj.rows += input[i]);
  }
  for (var j = 0; j < input.length; j++) {
    if (typeof parseInt(input[j]) === Number)
      console.log(obj.columns += input[j]);
  }

  return obj;
}

console.log(matrix('1 2\n10 20'));
