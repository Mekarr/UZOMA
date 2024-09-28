// const countdownElement = document.getElementById('countdown');
// const birthdayMessageElement = document.querySelector('.birthday-message');

// // Set the end date for the countdown (7 days from now)
// const endDate = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

// // Update the countdown every second
// setInterval(()=> {
//     const now = new Date();
//     const timeRemaining = endDate - now;
//     const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
//     const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
//     const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

//     countdownElement.textContent = ` ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

//     // Show the birthday message when the countdown reaches 0
//     if (timeRemaining <= 0) {
//         countdownElement.style.display = 'none';}
// })
const countdownElement = document.getElementById('countdown');
const birthdayMessageElement = document.querySelector('.birthday-message');

// Set the end date for the countdown (6 days from 28/9/24)
const endDate = new Date('2024-09-28T00:00:00.000Z');
endDate.setDate(endDate.getDate() + 6);

// Update the countdown every second
setInterval(() => {
    const now = new Date();
    const timeRemaining = endDate - now;
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    countdownElement.textContent = `Uzzy's Day: ${days} days, ${hours} hours, ${minutes} minutes, ${seconds} seconds`;

    // Show the birthday message when the countdown reaches 0
    if (timeRemaining <= 0) {
        countdownElement.style.display = 'none';
        birthdayMessageElement.style.display = 'block';
    }
}, 1000);