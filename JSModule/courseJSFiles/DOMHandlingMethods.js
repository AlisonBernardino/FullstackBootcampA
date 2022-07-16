// DOM handling methods

// Sample 01 - GetElementByID
document.getElementById('title');

// Sample 02 - GetElementsByTagName
document.getElementsByTagName('ul');

// Sample 03 - GetElementsByClassName
document.getElementsByClassName('texts');

// Sample 04 - querySelectorAll - Type A
document.querySelectorAll('.class01 .class02');

// querySelectorAll - Type B
document.querySelectorAll('li .element');

// Insertion and removal methods
// To create a new HTML item
document.createElement(element);

// To remove an element
document.removeChild(element);

// To add an element
document.appendChild(element);

// To replace an element
document.replaceChild(newItem, oldItem);