// 9x9 array for the Sudoku grid.

let to_verify = new Array(9);
for (let i = 0; i < 9; i++) {
    to_verify[i] = new Array(9);
}

// F11 = Build_Table, is a function to read the table and to move it to_verify.

function Build_Table(table_digits) {
    for (let i = 0; i < 9; i++) {
        let row = table_digits[i].split(' ');
        for (let j = 0; j < 9; j++) {
            to_verify[i][j] = parseInt(row[j]);
        }
    }
}

// F12 = Display_Table is a function for display in the HTML.

function Display_Table() {
    let tableHTML = "<table border='1'>";
    for (let i = 0; i < 9; i++) {
        tableHTML += "<tr>";
        for (let j = 0; j < 9; j++) {
            tableHTML += '<td style ="width:20px; height:20px; text-align:center">' + to_verify[i][j] + "</td>";
        }
        tableHTML += "</tr>";
    }
    tableHTML += "</table>";

    document.getElementById("sudokuTable").innerHTML = tableHTML;
}


Build_Table(array_number);
Display_Table();
