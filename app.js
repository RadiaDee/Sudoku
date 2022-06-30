// sudoku checker

let sampleSudoku= [ 
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8] ];


function getRow(puzzle, row) {    // grab the first row using row index
    return puzzle[row];
  }
  
function getColumn(puzzle, col) {   // get the column using column index
  let colArr = [];   // final column that is returned

  for (let i = 0; i < puzzle.length; i++) {
      let row = puzzle[i];   // grab the row
      let element = row[col];  // the row at given element col is part of our column
    colArr.push(element);     // push that element to the array we will return
  }
  console.log("console sample column " + colArr);
  return colArr;    // return le array representing column
}

  getColumn(sampleSudoku, 3);
  // grab section in a specified x, y coordinate
  function getSection(puzzle, x, y) {
    x *= 3;  // 0 becomes 0 (0 to 2), 1 becomes 3 (3 to 5), 2 becomes 6 (6 to 9)
    y *= 3;
  
    let section = [];   // return the array of the section
  
    for (let i = x; i < x + 3; i++) {   // iterate through the rows
      // let row = puzzle[i];
      for (let j = y; j < y + 3; j++) {   // iterate through each element of the rows
        section.push(puzzle[j][i]);   // or the reverse? puzzle[i][j] ?
      }
    }
  
    return section;
  }




  //-------------- check if the puzzle is valid and only has one of each digit of 1-9function includes1to9(arr) {
    function includes1to9(arr) {   // mini function that checks if there is 1 to 9
        for (let i = 1; i <= arr.length; i++) {
          if (arr.indexOf(i) === -1) {   // dont think this works?
            return false;
          }
        }
      
        return true;
      }
      
      function sudokuIsValid(puzzle) {    
          let checks = [];   // should I have 3 different checks?
        
          for(let i = 0; i < 9; i++) {
            checks.push(getRow(puzzle, i));   // get every row
            checks.push(getColumn(puzzle, i));   // get every column
          }
        
          for(let i = 0; i < 3; i++) {
            for(let j = 0; j < 3; j++) {
              checks.push(getSection(puzzle, i, j));  // get every section
            }
          }
        
          for(let i = 0; i < checks.length; i++) {
            if(!includes1to9(checks[i])) { 
              return false; 
            }   // check every array?
          }
      
        return true;
      }