function makeDiagonalRed(table) {

  for(let i = 0 ; i < table.rows.length; i++ ) {
    let row = table.rows[i];
    let elemRedBg = row.cells[row.rowIndex].style.backgroundColor = "red";
  }
  
}
