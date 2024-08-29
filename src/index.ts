import  dayjs from 'dayjs'

export interface ValuesModel {
    values: any[];
    treatZeroOneAsBoolean?: boolean;
}



export function predictType (model:ValuesModel) {
    let isString = false;
    let isInt = false;
    let isFloat = false;
    let isBit = false;
    let isBoolean = false;
    let isDate = false;
    let isDatetime2 = false;

    let { values, treatZeroOneAsBoolean = false } = model;
    console.log(treatZeroOneAsBoolean)
    for (let i = 0; i < values.length; i++) {
        let value = String(values[i]);
        

        //check if the value is date
        let isDateCheck = isDateString(value)
        if (isDateCheck) {
            const date = new Date(value);
            if (!isNaN(date.getTime())) {
                isDate = true;
                if (value.includes('T') || value.includes('.') || value.includes(':')) {
                    isDatetime2 = true;
                }
            }
            continue;
        }


        let IsFloatCheck = parseFloat(value);

        // Check if it's an integer
        if (Number.isInteger(IsFloatCheck)) {
            if ((value === "1" || value === "0") && treatZeroOneAsBoolean) {
                isBit = true;
            }
            else{
                isInt = true;
            }
            continue;
        }

        // Check if it's a float
        if (Number.isFinite(IsFloatCheck)) {
            isFloat = true;
            continue;
        }

        // Check if the value is "true" or "false"
        if (value === "true" || value === "false") {
            isBoolean = true;
            continue;
        }

        //if one value is true, then all the group should considered as true
        isString = true;
        break;
    }    


    // Apply the logic
    if (isString) {
        return "string";
    }
    if ((isFloat || (isFloat && isInt)) && !isBit && !isBoolean && !isDate) {
        return "float";
    }
    if (isInt && !isFloat) {
        return "number";
    }
    if ((isBoolean || isBit) && !isDate) {
        return "boolean";
    }
    if (isDate && !isInt && !isBit && !isBoolean) {
        return isDatetime2 ? "datetime2" : "date";
    }
    
    return "string";
}

function isDateString(input:any) {
    // Check if the input is a number or can be converted to a number
    if (!isNaN(input) && input.trim() !== '') {
        return false; // It's a number, not a date string
    }
    
    // Try to parse it with dayjs
    const date = dayjs(input);
    
    // Return true if valid date and not purely numeric
    return date.isValid();
}
