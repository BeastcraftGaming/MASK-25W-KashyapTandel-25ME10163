let animes = [
    {
        "id": 1,
        "title": "Naruto",
        "image": "https://example.com/naruto.jpg",
        "description": "A young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village."
    },
    {
        "id": 2,
        "title": "One Piece",
        "image": "https://example.com/onepiece.jpg",
        "description": "A story about a group of pirates led by Monkey D. Luffy, who is searching for the ultimate treasure known as 'One Piece'."
    },
    {
        "id": 3,
        "title": "Attack on Titan",
        "image": "https://example.com/aot.jpg",
        "description": "In a world where humanity is on the brink of extinction due to giant humanoid creatures known as Titans, Eren Yeager vows to eradicate them."
    },
    {
        "id": 4,
        "title": "My Hero Academia",
        "image": "https://example.com/mha.jpg",
        "description": "In a world where nearly everyone has superpowers known as 'Quirks', Izuku Midoriya dreams of becoming a great hero despite being born without a Quirk."
    },
    {
        "id": 5,
        "title": "Demon Slayer",
        "image": "https://example.com/demonslayer.jpg",
        "description": "Tanjiro Kamado becomes a demon slayer after his family is slaughtered by demons and his sister Nezuko is turned into one."
    }
];
let mangas = [
    {
        "id": 1,
        "title": "Naruto",
        "image": "https://example.com/naruto.jpg",
        "description": "A story about a young ninja.",
        "chapters": 700,
        "author": "Masashi Kishimoto",
        "Last updated": "2024-05-01",
        "status": "Completed",
        "genre": ["Action", "Adventure", "Fantasy"],
        "rating": 4.5
    },
    {
        "id": 2,
        "title": "One Piece",
        "image": "https://example.com/onepiece.jpg",
        "description": "A tale of pirates searching for the ultimate treasure.",
        "chapters": 1000,
        "author": "Eiichiro Oda",
        "Last updated": "2024-05-01",
        "status": "Ongoing",
        "genre": ["Action", "Adventure", "Fantasy"],
        "rating": 4.8
    },

    {
        "id": 3,
        "title": "Attack on Titan",
        "image": "https://example.com/aot.jpg",
        "description": "Humanity's struggle against giant humanoid creatures known as Titans.",
        "chapters": 139,
        "author": "Hajime Isayama",
        "Last updated": "2024-05-01",
        "status": "Completed",
        "genre": ["Action", "Drama", "Fantasy"],
        "rating": 4.7
    },
    {
        "id": 4,
        "title": "My Hero Academia",
        "image": "https://example.com/mha.jpg",
        "description": "A world where nearly everyone has superpowers known as 'Quirks'.",
        "chapters": 350,
        "author": "Kohei Horikoshi",
        "Last updated": "2024-05-01",
        "status": "Ongoing",
        "genre": ["Action", "Comedy", "Superhero"],
        "rating": 4.6
    },
    {
        "id": 5,
        "title": "Demon Slayer",
        "image": "https://example.com/demonslayer.jpg",
        "description": "A story about a young boy who becomes a demon slayer.",
        "chapters": 205,
        "author": "Koyoharu Gotouge",
        "Last updated": "2024-05-01",
        "status": "Completed",
        "genre": ["Action", "Adventure", "Fantasy"],
        "rating": 4.7
    }
];

/*
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

*/


const mainContainer = document.getElementById('mainContainer');
const buttons = document.getElementById('mainPageDiv').getElementsByClassName('buttons');

let submissionInProcess = false;
Array.from(buttons).forEach(button => {

    button.addEventListener('click', () => {

        if (button.id === 'animesButton') {
            mainContainer.classList.remove('mainPage');
            mainContainer.classList.add('animesPage');

            addAnimeList();

            addButtonFunc("anime");

            let backButton = document.getElementById('backToMainFromAnime');
            backButton.addEventListener('click', () => {
                mainContainer.classList.remove('animesPage');
                mainContainer.classList.add('mainPage');
            });

        } else if (button.id === 'mangasButton') {
            mainContainer.classList.remove('mainPage');
            mainContainer.classList.add('mangasPage');

            addMangaList();
            addButtonFunc("manga");

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

    console.log("Adding anime list...");

    animes.forEach(anime => {
        const animeItem = document.createElement('div');
        animeItem.classList.add('animeItem');
        animeItem.innerHTML = `
            <h3>${anime.title}</h3>

            <p>${anime.description}</p>
        `;
        //            <img src="${anime.image}" alt="${anime.title}">
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

    
    
}

function addButtonFunc(submissionType){
    const animeListDiv = document.getElementById('animeList');

 // add "add anime" button
     const addButton = document.createElement('button');
     addButton.id = 'addButton';

    addButton.innerHTML = `
    <div class="animeItem addItem">
        <div class="addContent">
            <span class="plusIcon">+</span>
            <p>Add Anime</p>
        </div>
    </div>`;
        
    animeListDiv.appendChild(addButton);

    addButton.addEventListener('click', () => {
        //const title = prompt('Enter anime title:');
        //const image = prompt('Enter anime image URL:');
        //const description = prompt('Enter anime description:');

        //addButton.removeEventListener('click', arguments.callee); // can't submit twice simultaneously

        if (submissionInProcess) return;
        submissionInProcess = true;

        // Show submission box
        const submissionBox = document.getElementById('submissionBox');
        submissionBox.classList.remove('hidden');

        const submissionTitle = document.getElementById('titleInput');
        const submissionImage = document.getElementById('imageInput');
        const submissionDescription = document.getElementById('descriptionInput');
        const submitButton = document.getElementById('submitBtn');
        const closeSubmission = document.getElementById('closeSubmission');
        const submissionHeader = document.getElementById('submissionHeader');

        if (submissionType === "anime") {
            submissionHeader.innerText = "Add Anime";
        } else {
            submissionHeader.innerText = "Add Manga";
        }
        submissionTitle.value = '';
        submissionImage.value = '';
        submissionDescription.value = '';

        submitButton.addEventListener('click', () => {
            const title = submissionTitle.value;
            const image = submissionImage.value;
            const description = submissionDescription.value;
            let id = null;

            if (!title ||  !description) {
                alert('Please fill in all fields.');
                return;
            }

            if (submissionType === "anime") {
                // Add anime to the list

                id = animes.length > 0 ? animes[animes.length - 1].id + 1 : 1;
                animes.push({ id, title, image, description });

                addAnimeList();
                
                //addButtonFunc("anime");

                addButton.removeEventListener('click', arguments.callee);
                addButton.remove();
                
            } else {
                // Add manga to the list

                id = mangas.length > 0 ? mangas[mangas.length - 1].id + 1 : 1;
                mangas.push({ id, title, image, description });
                addMangaList();
            }

            // Close submission box
            submissionBox.classList.add('hidden');

            submissionInProcess = false;
        }
        );
        
        closeSubmission.addEventListener('click', () => {
            submissionBox.classList.add('hidden');
            //submitButton.removeEventListener('click', arguments.callee);

            closeSubmission.removeEventListener('click', arguments.callee);

            submissionInProcess = false;
        });
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
