function palindrome(str) {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Check if the cleaned string is the same forwards and backwards
    return cleanedStr === cleanedStr.split('').reverse().join('');
}



module.exports = palindrome;
