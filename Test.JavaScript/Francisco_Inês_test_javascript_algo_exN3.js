// F31 = Validate_Table will serve to validate in the to_check table
// Calls F21 = Input_Table

function Validate_Table() {
    for (let i = 0; i < 9; i++) {
        let rowToCheck = to_check[i];

        if (!Input_Table(rowToCheck)) {
            console.error('Anomaly', i + 1, 'values:', rowToCheck)
        }
    }
}