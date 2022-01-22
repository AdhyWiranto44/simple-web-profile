const theWindow = document.querySelector('.theWindow');
const appShortcut = document.querySelector('.appShortcut');

function closeApp() {
    theWindow.style.display = 'none';
    appShortcut.style.display = 'block';
}

function openApp() {
    theWindow.style.display = 'block';
    appShortcut.style.display = 'none';
}