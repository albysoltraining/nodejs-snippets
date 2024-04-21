function checkDob(dateOfBirth) {
    // Parse the given date string into a Date object
    const dob = new Date(dateOfBirth);
    
    // Calculate the current date
    const currentDate = new Date();
    
    // Calculate the date 18 years ago
    const eighteenYearsAgo = new Date(currentDate.getFullYear() - 18, currentDate.getMonth(), currentDate.getDate());
    
    // Compare the date of birth with 18 years ago
    return dob <= eighteenYearsAgo;
}

module.exports = {
    isValidDate: checkDob
}