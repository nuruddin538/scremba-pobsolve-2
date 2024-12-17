// Get the reference to the container
const calendarContainer = document.getElementById('calendar');

// Loop through 24 days to create the calendar dynamically
for(let i = 1; i <= 24; i++) {
    // create a box (list item)
    const box = document.createElement('li');
    box.classList.add('calendar-box');

    // Add the day number
    const number = document.createElement('p');
    number.textContent = i; //Display the day number

    // Add a gift icon using Font Awesome
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-gift');

    // Add a description
    const description = document.createElement('p');
    description.textContent = 'Open me!';

    // Append all the elements to the box
    box.appendChild(number);
    box.appendChild(icon);
    box.appendChild(description);

    // Add interactivity: toggle "Opened" state on click
    box.addEventListener('click', () => {
        if(box.classList.contains('opened')) {
            // If already opened, revert to unopened state
            box.classList.remove('opened');
            box.style.backgroundColor = '#ffcccc';
            box.style.color = '#660000';
            description.textContent = 'Open me!';
        } else {
            // If unopened, mark as opened
            box.classList.add('opened');
            box.style.backgroundColor = '#4CAF50';
            // for opened
            box.style.color = '#ffffff';
            description.textContent = "🎉 Unwrapped!";
        }
    })
    calendarContainer.appendChild(box);
}