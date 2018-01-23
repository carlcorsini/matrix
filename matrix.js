function matrix(input) {
  var j = 0;
  var array = [];
  for (var i = 0; i <= input.length; i++) {
    if (input[i] === " " || i === input.length) {
      while (j < i) {
        array += input[j];
        j++;
        console.log(array, " this is the array");
        console.log(j, " this is j count");
      }
    }
}
return array;
}


console.log(matrix('1 2\n10 20'));
