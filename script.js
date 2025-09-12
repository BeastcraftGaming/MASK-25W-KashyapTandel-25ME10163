const mainContainer = document.getElementById('mainContainer');
const buttons = mainContainer.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('click', () => {
        if (button.id === 'animesButton') {
            mainContainer.classList.remove('mainPage');
            mainContainer.classList.add('animesPage');
        } else if (button.id === 'mangasButton') {
            mainContainer.classList.remove('mainPage');
            mainContainer.classList.add('mangasPage');
        }
    });
});