// Stylizations with JS DOM

// Sample 01
const websiteElement = document.getElementById("sampleElement");

// Adds the "newStyles" class
websiteElement.classList.add("newStyles");

// Removes the "neonStylesClass"
websiteElement.classList.remove("neonStyleClass");

// It works like a switch
// adding OR removing the "lightTheme"
// class when it's inside the list
// OR outside of it

websiteElement.classList.toggle("lightTheme");

// To access an element CSS

document.getElementsByTagName("h2").style.color = 'aquamarine';
