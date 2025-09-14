let animes = [];
let mangas = [];

fetch('animes.json')
    .then(response => response.json())
    .then(data => {
        animes = data;
    });

fetch('mangas.json')
    .then(response => response.json())
    .then(data => {
        mangas = data;
    });

const mainContainer = document.getElementById('mainContainer');
const buttons = document.getElementById('mainPageDiv').getElementsByClassName('buttons');

Array.from(buttons).forEach(button => {

    button.addEventListener('click', () => {

        if (button.id === 'animesButton') {
            mainContainer.classList.remove('mainPage');
            mainContainer.classList.add('animesPage');

            addAnimeList();

            let backButton = document.getElementById('backToMainFromAnime');
            backButton.addEventListener('click', () => {
                mainContainer.classList.remove('animesPage');
                mainContainer.classList.add('mainPage');
            });

        } else if (button.id === 'mangasButton') {
            mainContainer.classList.remove('mainPage');
            mainContainer.classList.add('mangasPage');

            addMangaList();

            let backButton = document.getElementById('backToMainFromManga');
            backButton.addEventListener('click', () => {
                mainContainer.classList.remove('mangasPage');
                mainContainer.classList.add('mainPage');
            });
        }
    });
});

function addAnimeList() {
    const animeListDiv = document.getElementById('animeList');
    animeListDiv.innerHTML = '';

    animes.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('animeItem');
        animeItem.innerHTML = `
            <h3>${anime.title}</h3>
            <img src="${anime.image}" alt="${anime.title}">
            <p>${anime.description}</p>
        `;
        animeListDiv.appendChild(animeItem);

        animeItem.addEventListener('click', () => {
            // Show info box when this anime is clicked
            document.getElementById('infoImage').src = anime.image;
            document.getElementById('infoTitle').innerText = anime.title;
            document.getElementById('infoDescription').innerText = anime.description;

            document.getElementById('infoBox').classList.remove('hidden');

            document.getElementById('closeInfoBox').addEventListener('click', () => {
                document.getElementById('infoBox').classList.add('hidden');
                closeInfoBox.removeEventListener('click', arguments.callee);

                document.getElementById('infoImage').src = '';
                document.getElementById('infoTitle').innerText = '';
                document.getElementById('infoDescription').innerText = '';
            });
        });

    });

    
     // add "add anime" button
     const addAnimeButton = document.createElement('button');
    addAnimeButton.innerHTML = `
    <div class="animeItem addItem">
        <div class="addContent">
            <span class="plusIcon">+</span>
            <p>Add Anime</p>
        </div>
    </div>`;
        
    animeListDiv.appendChild(addAnimeButton);

    addAnimeButton.addEventListener('click', () => {
        //const title = prompt('Enter anime title:');
        //const image = prompt('Enter anime image URL:');
        //const description = prompt('Enter anime description:');

        addAnimeButton.removeEventListener('click', arguments.callee);
        const submissionBox = document.getElementById('submissionBox');
        submissionBox.classList.remove('hidden');
    });
}

function addMangaList() {
    const mangaListDiv = document.getElementById('mangaList');
    mangaListDiv.innerHTML = '';

    mangas.forEach(manga => {
        const mangaItem = document.createElement('div');
        mangaItem.classList.add('mangaItem');
        mangaItem.innerHTML = `
            <h3>${manga.title}</h3>
            <img src="${manga.image}" alt="${manga.title}">
            <p>${manga.description}</p>
        `;
        mangaListDiv.appendChild(mangaItem);

        mangaItem.addEventListener('click', () => {
            // Show info box when this manga is clicked
            document.getElementById('infoImage').src = manga.image;
            document.getElementById('infoTitle').innerText = manga.title;
            document.getElementById('infoDescription').innerText = manga.description;

            document.getElementById('infoBox').classList.remove('hidden');

            const closeInfoBox = document.getElementById('closeInfoBox');
            closeInfoBox.addEventListener('click', () => {
                document.getElementById('infoBox').classList.add('hidden');
                closeInfoBox.removeEventListener('click', arguments.callee);
            });
        });
    });
}

