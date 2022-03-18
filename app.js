// sudoku checker, will be made into full sudoku game

let sampleSudoku= [ [0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8],
[0,1,2,3,4,5,6,7,8] ];
// grab the first row using the index
function getRow(puzzle, row) {
    return puzzle[row];
  }
  
  function getColumn(puzzle, col) {
    let colArr = [];
  
    for (let i = 0; i < puzzle.length; i++) {
        let row= puzzle[i];
        let element = row[col]
      colArr.push(element);
    }
    console.log("console sample column " + colArr);
    return colArr;
  }

  getColumn(sampleSudoku,3);
  // grab section in a specified x, y coordinate  ???
  function getSection(puzzle, x, y) {
    x *= 3;
    y *= 3;
  
    let section = [];
  
    for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
        section.push(puzzle[j][i]);
      }
    }
  
    return section;
  }




  //-------------- check if the puzzle is valid and only has one of each digit of 1-9function includes1to9(arr) {
    function includes1to9(arr) {
        for (let i = 1; i <= arr.length; i++) {
          if (arr.indexOf(i) === -1) {
            return false;
          }
        }
      
        return true;
      }
      
      function sudokuIsValid(puzzle) {
        let checks = [];
      
        for(let i = 0; i < 9; i++) {
          checks.push(getRow(puzzle, i));
          checks.push(getColumn(puzzle, i));
        }
      
        for(let i = 0; i < 3; i++) {
          for(let j = 0; j < 3; j++) {
            checks.push(getSection(puzzle, i, j));
          }
        }
      
        for(let i = 0; i < checks.length; i++) {
          if(!includes1to9(checks[i])) { return false; }
        }
      
        return true;
      }