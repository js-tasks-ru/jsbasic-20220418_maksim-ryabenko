function highlight(table) {

  let tableRows = table.rows; 

  for (let i = 1; i < table.rows.length; ++i) {
    let row = tableRows[i];
    let elemAtr = row.cells[3].getAttribute('data-available');
    let elemGender = row.cells[2];
    let elemAge = row.cells[1];

    if(elemAtr === 'true') {
      row.classList.add('available');
    } else if (elemAtr === 'false') {
      row.classList.add('unavailable');
    } else if (elemAtr == null ) {
      row.setAttribute('hidden', 'true');
    }

    if (elemGender.innerText == "m") {
      row.classList.add('male');
    } else {
      row.classList.add('female');
    }

    elemAge.innerText < 18 ? row.style.textDecoration = 'line-through' : "";
  }
}
