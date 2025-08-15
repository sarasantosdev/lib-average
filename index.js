function average(...args){
    let values = Array.isArray(args[0]) ? args[0] : args;
    
    let validNumbers = values.filter(item => typeof item === 'number' && !isNaN(item));

    if(validNumbers.length === 0) return NaN;

    let sum = validNumbers.reduce((acc, val) => acc + val, 0);

    return sum / validNumbers.length;
}

module.exports = {average};