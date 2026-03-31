'use strict';

// Function to get the current date and time in UTC
function getCurrentDateTime() {
    const now = new Date();
    const utcDateString = now.toISOString().slice(0, 19).replace('T', ' ');
    return utcDateString;
}

console.log('Current Date and Time (UTC):', getCurrentDateTime());