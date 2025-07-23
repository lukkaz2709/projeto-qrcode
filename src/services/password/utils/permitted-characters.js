//extract method
async function permittedCharacters() {
    let permitted = [];
    if(process.env.UPPERCASE_LETTERS === 'true') 
        permitted.push(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ'); // Uppercase letters
    
    if(process.env.LOWERCASE_LETTERS === 'true') 
        permitted.push(...'abcdefghijklmnopqrstuvwxyz'); // Lowercase letters
    
    if(process.env.NUMBERS === 'true') 
        permitted.push(...'0123456789'); // Numbers
    
    if(process.env.SPECIAL_CHARACTERS === 'true') 
        permitted.push(...'!@#$%^&*()-_'); // Special characters

    return permitted;
}

export default permittedCharacters;