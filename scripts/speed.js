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
    } // Conversion from meters per second:
    else if (inputChosenUnit == 'mes') {
        if (outputChosenUnit == 'kmh') {
            operand2 = operand1 * 3.6
        }
        else if (outputChosenUnit == 'mph') {
            operand2 = operand1 * 2.237
        }
        else if (outputChosenUnit == 'kno') {
            operand2 = operand1 / 1.944
        }
        else if (outputChosenUnit == 'fes') {
            operand2 = operand1 / 3.281
        }
    } // Conversion from kilometers per second:
    else if (inputChosenUnit == 'kmh') {
        if (outputChosenUnit == 'mes') {
            operand2 = operand1 / 3.6
        }
        else if (outputChosenUnit == 'mph') {
            operand2 = operand1 / 1.609
        }
        else if (outputChosenUnit == 'kno') {
            operand2 = operand1 / 1.852
        }
        else if (outputChosenUnit == 'fes') {
            operand2 = operand1 / 1.097
        }
    } // Conversion from miles per hour:
    else if (inputChosenUnit == 'mph') {
        if (outputChosenUnit == 'mes') {
            operand2 = operand1 / 2.237
        }
        else if (outputChosenUnit == 'kmh') {
            operand2 = operand1 * 1.609
        }
        else if (outputChosenUnit == 'kno') {
            operand2 = operand1 / 1.151
        }
        else if (outputChosenUnit == 'fes') {
            operand2 = operand1 * 1.467
        }
    } // Convers??o from knots:
    else if (inputChosenUnit == 'kno') {
        if (outputChosenUnit == 'mes') {
            operand2 = operand1 / 1.944
        }
        else if (outputChosenUnit == 'kmh') {
            operand2 = operand1 * 1.852
        }
        else if (outputChosenUnit == 'mph') {
            operand2 = operand1 * 1.151
        }
        else if (outputChosenUnit == 'fes') {
            operand2 = operand1 * 1.688
        }
    } // Conversion from feet per second:
    else if (inputChosenUnit == 'fes') {
        if (outputChosenUnit == 'mes') {
            operand2 = operand1 / 3.281
        }
        else if (outputChosenUnit == 'kmh') {
            operand2 = operand1 * 1.097
        }
        else if (outputChosenUnit == 'mph') {
            operand2 = operand1 / 1.467
        }
        else if (outputChosenUnit == 'kno') {
            operand2 = operand1 / 1.688
        }
    }

    operand2 = operand2.toString()

    if (inputTypedValue.includes(',')) {
        outputValue.value = operand2.replace(".", ",")
    } else {
        outputValue.value = operand2
    }

}
