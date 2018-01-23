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


console.log(matrix('1 2\n10 20'));
