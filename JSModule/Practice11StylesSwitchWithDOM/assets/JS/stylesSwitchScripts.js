function changeTheme() {
    switchClasses();
    switchTexts();
}

function switchClasses() {
    buttonItem.classList.toggle(darkModeItem);
    selectedHeader.classList.toggle(darkModeItem);
    selectedBody.classList.toggle(darkModeItem);
    selectedFooter.classList.toggle(darkModeItem);
}

function switchTexts() {
    const lightThemeText = "Lights ON!";
    const darkThemeText = "Lights OFF!";
    if (selectedBody.classList.contains(darkModeItem)) {
        buttonItem.innerHTML = lightThemeText;
        selectedHeader.innerHTML = lightThemeText;
        return;
    }

    buttonItem.innerHTML = darkThemeText;
    selectedHeader.innerHTML = lightThemeText;
}

const darkModeItem = 'darkTheme';
const buttonItem = document.getElementById('modeSelector');
const selectedHeader = document.getElementById('pageTitle');
const selectedBody = document.getElementsByTagName('body')[0];
const selectedFooter = document.getElementsByTagName('footer')[0];

buttonItem.addEventListener('click', changeTheme);