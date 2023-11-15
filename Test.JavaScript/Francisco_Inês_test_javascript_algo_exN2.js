// F21 = Input_Table, is a function to accept the table as an input 
// A = tableToVerify

function Input_Table(tableToVerify) {
    if (!Array.isArray(tableToVerify) || tableToVerify.length !== 9) {
        console.error("Input must be an array with 9 positions.");
        return false;
    }

    for (let i = 0; i < 9; i++) {
        if (!Array.isArray(tableToVerify[i]) || tableToVerify[i].length !== 9) {
            console.error("Each row must have 9 positions.");
            return false;
        }

        // To see the positions.

        for (let j = 0; j < 9; j++) {
            let currentNumber = tableToVerify[i][j];

            if (typeof currentNumber !== 'number' || isNaN(currentNumber) || currentNumber < 1 || currentNumber > 9) {
                console.error("The positions must be between 1 and 9.");
                return false;
            }

            // To see if the number's are unique.

            for (let k = 0; k < 9; k++) {
                if (k !== j && tableToVerify[i][k] === currentNumber) {
                    console.error('Numbers must be unique in rows.');
                    return false;
                }

                if (k !== i && tableToVerify[k][j] === currentNumber) {
                    console.error('Numbers must be unique in columns.');
                    return false;
                }
            }

        }
    }

    console.log("Input array is valid:", tableToVerify);
    return true;
}

let isValidTable = Input_Table(to_verify);
console.log("Is the array valid? " + isValidTable);