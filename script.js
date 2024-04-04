const table = document.querySelector('table');
const maxNumber = 10;  // Set the range for the multiplication chart 

// Create header row
let headerRow = table.insertRow();
headerRow.insertCell(); // Empty top-left corner
headerRow.innerHTML = "s/no";
headerRow.style.border = "solid 5px red";
headerRow.style.textAlign  = 'center';

headerRow.style.fontWeight = 'bold';
headerRow.style.background = '#d9e3f7'

for (let i = 1; i <= maxNumber; i++) {
    let headerCell = headerRow.insertCell();
    headerCell.textContent = i;
    headerCell.style.color = "blue";
}

// Create multiplication table grid
for (let i = 1; i <= maxNumber; i++) {
    let row = table.insertRow();
    row.style.fontSize = "2.1em"
    row.style.backgroundColor = 'white';
    

    let firstCell = row.insertCell();
    firstCell.textContent = i;
    firstCell.style.background = "black"
    firstCell.style.color  = "#fff"
    firstCell.style.fontSize = "0.5em"
    firstCell.style.paddingRight = "23px"

    for (let j = 1; j <= maxNumber; j++) {
        let cell = row.insertCell();
        cell.textContent = i * j;
    }
}
