let inputUnit = document.getElementById('inputUnit')
let outputUnit = document.getElementById('outputUnit')
let inputValue = document.getElementById('inputValue')
let outputValue = document.getElementById('outputValue')

inputValue.addEventListener('keyup', converter)
inputUnit.addEventListener('change', converter)
outputUnit.addEventListener('change', converter)

function converter() {

    let inputChosenUnit = inputUnit.value
    let outputChosenUnit = outputUnit.value
    let inputTypedValue = inputValue.value
    let operand1
    let operand2

    if (inputTypedValue.includes(',')) {
        operand1 = Number(inputTypedValue.replace(",", "."))
    } else {
        operand1 = Number(inputTypedValue)
    }

    if (inputChosenUnit == outputChosenUnit) {
        operand2 = operand1
    } // Conversion from seconds:
    else if (inputChosenUnit == 'sec') {
        if (outputChosenUnit == 'min') {
            operand2 = operand1 / 60
        }
        else if (outputChosenUnit == 'hr') {
            operand2 = operand1 / (60 * 60)
        }
        else if (outputChosenUnit == 'day') {
            operand2 = operand1 / (24 * 60 * 60)
        }
        else if (outputChosenUnit == 'yrs') {
            operand2 = operand1 / (365 * 60 * 60)
        }
        else if (outputChosenUnit == 'cen') {
            operand2 = operand1 / (100 * 365 * 60 * 60)
        }
    } // Conversion from minutes:
    else if (inputChosenUnit == 'min') {
        if (outputChosenUnit == 'sec') {
            operand2 = operand1 * 60
        }
        else if (outputChosenUnit == 'hr') {
            operand2 = operand1 / 60
        }
        else if (outputChosenUnit == 'day') {
            operand2 = operand1 / (24 * 60)
        }
        else if (outputChosenUnit == 'yrs') {
            operand2 = operand1 / (365 * 24 * 60)
        }
        else if (outputChosenUnit == 'cen') {
            operand2 = operand1 / (100 * 365 * 24 * 60)
        }
    } // Conversion from hours:
    else if (inputChosenUnit == 'hr') {
        if (outputChosenUnit == 'sec') {
            operand2 = operand1 * (60 * 60)
        }
        else if (outputChosenUnit == 'min') {
            operand2 = operand1 * 60
        }
        else if (outputChosenUnit == 'day') {
            operand2 = operand1 / 24
        }
        else if (outputChosenUnit == 'yrs') {
            operand2 = operand1 / (365 * 24)
        }
        else if (outputChosenUnit == 'cen') {
            operand2 = operand1 / (100 * 365 * 24)
        }
    } // Conversion from days:
    else if (inputChosenUnit == 'day') {
        if (outputChosenUnit == 'sec') {
            operand2 = operand1 * (24 * 60 * 60)
        }
        else if (outputChosenUnit == 'min') {
            operand2 = operand1 * (24 * 60)
        }
        else if (outputChosenUnit == 'hr') {
            operand2 = operand1 * 24
        }
        else if (outputChosenUnit == 'yrs') {
            operand2 = operand1 / 365
        }
        else if (outputChosenUnit == 'cen') {
            operand2 = operand1 / (100 * 365)
        }
    } // Conversion from years:
    else if (inputChosenUnit == 'yrs') {
        if (outputChosenUnit == 'sec') {
            operand2 = operand1 * (365 * 24 * 60 * 60)
        }
        else if (outputChosenUnit == 'min') {
            operand2 = operand1 * (365 * 24 * 60)
        }
        else if (outputChosenUnit == 'hr') {
            operand2 = operand1 * (365 * 24)
        }
        else if (outputChosenUnit == 'day') {
            operand2 = operand1 * 365
        }
        else if (outputChosenUnit == 'cen') {
            operand2 = operand1 / 100
        }
    } // Conversion from centuries:
    else if (inputChosenUnit == 'cen') {
        if (outputChosenUnit == 'sec') {
            operand2 = operand1 * (100 * 365 * 24 * 60 * 60)
        }
        else if (outputChosenUnit == 'min') {
            operand2 = operand1 * (100 * 365 * 24 * 60)
        }
        else if (outputChosenUnit == 'hr') {
            operand2 = operand1 * (100 * 365 * 24)
        }
        else if (outputChosenUnit == 'day') {
            operand2 = operand1 * (100 * 365)
        }
        else if (outputChosenUnit == 'yrs') {
            operand2 = operand1 * 100
        }
    }

    operand2 = operand2.toString()

    if (inputTypedValue.includes(',')) {
        outputValue.value = operand2.replace(".", ",")
    } else {
        outputValue.value = operand2
    }

}
