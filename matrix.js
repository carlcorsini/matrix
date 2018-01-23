function matrix (string) {
  let strArr = string.split('\n');
  //console.log(strArr, "..... strArr");



  for (var i = 0; i < strArr.length; i ++) {
    rows = strArr[i].trim();
    console.log(rows, "......rows");

  }

}






console.log(matrix("1 2 3 \n 4 5 6 \n 7 8 9"));
console.log(matrix("9 8 7 \n 5 3 2 \n 6 6 7"));
