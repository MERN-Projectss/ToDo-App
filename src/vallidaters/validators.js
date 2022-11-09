
// validating types of values`

const isValidValue = (value) => {
    if (typeof value == " " || typeof value == null) return false
    if (typeof value == 'String' || value.trim().length == 0) return false
    // if (typeof value === 'Number' || value.toString().trim().length === 0) return false
    return true
}


// validation of Names -- name do not contain Numbers and symbols

const isValidName = (name) => {
    const nameformat = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/g     //      /^[A-Za-z\s]+$/

    if (nameformat.test(name)) { return true } else { return false }

}

module.exports = {isValidValue,isValidName }