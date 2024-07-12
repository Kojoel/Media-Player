const musicListContainer = document.querySelector('.music-list-container');
const playerWrapper = document.querySelector('.player-wrapper');
const playerBg = document.querySelector('.player-dark-bg');

const volumeProgress = document.querySelector('.volume-progress');
const volumeIcon = document.querySelector('#volume-icon');
const progressBar = document.querySelector('#progress');
const TimeCurrently = document.querySelector('#current-time');
const TotalTime = document.querySelector('#total-time');

const playerSongTitle = document.querySelector('#song-title');

const pauseBtn = document.querySelector('#pause-btn');
const playBtn = document.querySelector('#play-btn');
const prevBtn = document.querySelector('#prev-btn');
const nextBtn = document.querySelector('#next-btn');

const upArrow = document.querySelector("up-arrow")
const downArrow = document.querySelector("down-arrow")

let currentAudio = null;
let progressInterval = null;
let currentSongIndex = null;

const audio = document.createElement('audio');

const songPaths = [
    "music-samples/Black-Sherif-Kilos-Milos.mp3",
    "music-samples/Chiké-&-Mohbad-Egwu.mp3",
    "music-samples/JP-Cooper-Holy-Water.mp3",
    "music-samples/Team-Eternity-Ghana-Defe-Defe-led-by-Naana Asiedu.mp3",
    "music-samples/King-Promise-Favourite-Story-ft-Sarkodie--Olivetheboy.mp3",
    "music-samples/Joe-Mettle-Hallelujah-Live-feat-Dunsin-Oyekan.mp3",
    "music-samples/Manus-Akpanke-The-Same-feat-Dunsin-Oyekan.mp3",
    "music-samples/Joe-Mettle-Kadosh.mp3",
    "music-samples/Joe-Mettle-My-Everything.mp3",
    "music-samples/King-Paluta-Aseda.mp3",
    // "music-samples/artist7-song7.mp3",
    // "music-samples/artist8-song8.mp3",
    // "music-samples/artist9-song9.mp3",
    // "music-samples/artist10-song10.mp3",
    // "music-samples/artist10-song11.mp3",
    // "music-samples/artist10-song12.mp3",
    // "music-samples/artist10-song13.mp3",
    // "music-samples/artist10-song14.mp3",
    // "music-samples/artist10-song15.mp3"
];

const artistNames = [
    "Black Sherif",
    "Chiké & Mohbad",
    "JP Cooper",
    "T.ENaana Asiedu",
    "King Promise ft. Sarkodie",
    "Joe Mettle ft. Dunsin Oyekan",
    "Manus Akpanke ft. Dunsin Oyekan",
    "Joe Mettle",
    "Joe Mettle",
    "King Paluta",
    // "Artist 7",
    // "Artist 8",
    // "Artist 9",
    // "Artist 10",
    // "Artist 11",
    // "Artist 12",
    // "Artist 13",
    // "Artist 14",
    // "Artist 15"
];

const songTitle = [
    "Kilos Milos",
    "Egwu",
    "Holy Water",
    "Defe Defe",
    "Favourite Story",
    "Hallelujah",
    "The Same",
    "Kadosh",
    "My Everything",
    "Aseda",
    // "Song 7",
    // "Song 8",
    // "Song 9",
    // "Song 10",
    // "Song 11",
    // "Song 12",
    // "Song 13",
    // "Song 14",
    // "Song 15"
];

function generateMusicCards() {
    songTitle.forEach((title, index) => {
        const card = document.createElement('div');
        card.className = 'music-card';

        const box = document.createElement('div');
        box.className = 'box';

        const favgrey= document.createElement('img')
        favgrey.classList = "favorites-mini-grey-icon";
        favgrey.src = "icons/favorite-grey icon.png";
        favgrey.alt = "favorite icon greyed out"

        const fav= document.createElement('img')
        fav.classList = "favorites-mini-icon";
        fav.src = "icons/favorites icon.png";
        fav.alt = "favorite icon active"

        const icon = document.createElement('img');
        icon.id = 'box-icon';
        icon.src = 'icons/music icon.png';
        icon.alt = 'music icon';

        const songInfo = document.createElement('div');
        songInfo.className = 'song-title';

        const songName = document.createElement('h5');
        songName.id = 'song-name';
        songName.className = 'montserrat';
        songName.textContent = `SONG: ${title}`;

        const artistName = document.createElement('h6');
        artistName.id = 'artist-name';
        artistName.className = 'montserrat';
        artistName.textContent = `ARTIST: ${artistNames[index]}`;

        // const audio = document.createElement('audio');
        // audio.controls = true;
        // audio.id = 'Audio';
        // audio.style.display = 'none';
        const audioSrcName = document.createElement('p');
        audioSrcName.textContent = songPaths[index];
        audioSrcName.id = "audio-src-name";

        const source = document.createElement('source');
        source.src = songPaths[index];
        console.log(source.src)

        audio.appendChild(source);
        songInfo.appendChild(songName);
        songInfo.appendChild(artistName);
        box.appendChild(icon);
        box.appendChild(favgrey);
        box.appendChild(fav);
        card.appendChild(box);
        card.appendChild(songInfo);
        // card.appendChild(audio);
        card.appendChild(audioSrcName);

        musicListContainer.appendChild(card);
    });
}
generateMusicCards();

function stopAudio(audioElement) {
    if (audioElement) {
        audioElement.pause();
        audioElement.currentTime = 0;
    }
}

function updateProgress(itemAudio) {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
    progressInterval = setInterval(() => {
        progressBar.max = itemAudio.duration;
        progressBar.value = itemAudio.currentTime;
        TimeCurrently.textContent = `${Math.floor(itemAudio.currentTime / 60)} : ${Math.floor(itemAudio.currentTime % 60)}`;
        TotalTime.textContent = `${Math.floor(itemAudio.duration / 60)} : ${Math.floor(itemAudio.duration % 60)}`;
    }, 1000);

    progressBar.addEventListener('input', () => {
        itemAudio.currentTime = progressBar.value;
    });
}

function playSong(index) {
    if (currentAudio) {
        stopAudio(currentAudio);
        clearInterval(progressInterval);
    }

    const cards = Array.from(musicListContainer.children);
    const card = cards[index];
    const itemAudio = card.querySelector('#Audio');
    const itemSongTitle = card.querySelector('#song-name').textContent;
    const itemArtistName = card.querySelector('#artist-name').textContent;

    itemAudio.play();
    currentAudio = itemAudio;
    currentSongIndex = index;

    playerWrapper.style.display = "flex";
    playerBg.style.display = "flex";
    playerSongTitle.textContent = `${itemSongTitle} --- ${itemArtistName}`;

    updateProgress(itemAudio);

    pauseBtn.addEventListener('click', () => {
        itemAudio.pause();
        pauseBtn.style.display = "none";
        playBtn.style.display = "flex";
    });

    playBtn.addEventListener('click', () => {
        itemAudio.play();
        pauseBtn.style.display = "flex";
        playBtn.style.display = "none";
    });

    playerBg.addEventListener('click', () => {
        stopAudio(itemAudio);
        clearInterval(progressInterval);
        playerWrapper.style.display = "none";
        playerBg.style.display = "none";
    });

    volumeProgress.addEventListener('input', () => {
        actualVolume = volumeProgress.value/100;
        itemAudio.volume = actualVolume;
        // console.log(actualVolume);
        // console.log(itemAudio.volume);
    })

    volumeIcon.addEventListener('click', () => {
        volumeProgress.classList.toggle('active');
    })
}

// Array.from(musicListContainer.children).forEach((item, index) => {
//     item.addEventListener('click', () => {
        
//         // audio.play();
//     });
// });

const audioSrc = document.querySelectorAll('.musicListContainer .music-card');
// console.log(audioSrc);

prevBtn.addEventListener('click', () => {
    if (currentSongIndex > 0) {
        playSong(currentSongIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentSongIndex < songPaths.length - 1) {
        currentSongIndex = currentSongIndex + 1;
        playSong(currentSongIndex);
        // console.log(currentSongIndex);
        console.log(currentAudio.src);
    }
});


const searchInput = document.querySelector("[data-search]");
// console.log(searchInput);

searchInput.addEventListener('input', (e) => {
    let inputValue = e.target.value;
    inputValue = inputValue.toLowerCase();
    // console.log(inputValue);

    const cardsForSearch = musicListContainer.querySelectorAll(".music-card");
    // console.log(cardsForSearch);

    cardsForSearch.forEach(card => {
            // console.log(card);
            const cardSong= card.querySelector("#song-name");
            const newcardSong = cardSong;
            // console.log(newcardSong.textContent);
            newcardSong.textContent = newcardSong.textContent.toLowerCase();
            console.log(newcardSong.textContent);

            const isVisible = newcardSong.textContent.includes(inputValue);
            card.classList.toggle("hide", !isVisible);
    })
})


const cards = musicListContainer.querySelectorAll(".music-card");
// console.log(cards)


cards.forEach(card => {
    const fav = card.querySelector(".favorites-mini-icon");
    const favGrey = card.querySelector(".favorites-mini-grey-icon");
    favGrey.addEventListener('click', (event) => {
        event.stopPropagation();
        console.log("favorited");
        favGrey.style.dislay = "none";
        fav.style.display = "flex";
        card.setAttribute("favorited", '');
        // console.log(card);
    });

    fav.addEventListener('click', (event) => {
        const fav = card.querySelector(".favorites-mini-icon");
        const favGrey = card.querySelector(".favorites-mini-grey-icon");
        event.stopPropagation();
        console.log("unfavorited");
        fav.style.display = "none";
        favGrey.style.display = "flex";
        card.removeAttribute("favorited", '');
        // console.log(card);
    })
})


const favSort = musicListContainer.querySelector(".favSort");
console.log(favSort);

const favInactive = favSort.querySelector('.favPlayListInactive');
// console.log(favInactive);

const favActive = favSort.querySelector('.favPlayListActive');
// console.log(favActive);


// Event listener for clicking the inactive favorite icon
favInactive.addEventListener('click', (event) => {
    event.stopPropagation();
    favInactive.style.display = "none";
    favActive.style.display = "flex";

    const cards = musicListContainer.querySelectorAll('.music-card');
    cards.forEach(card => {
        const checkFav = card.querySelector(".favorites-mini-icon");
        const isFavorited = card.hasAttribute('favorited');
        card.classList.toggle("hide", !isFavorited); // Hide the card if not favorited
    });
});

// Event listener for clicking the active favorite icon
favActive.addEventListener('click', (event) => {
    event.stopPropagation();
    favActive.style.display = "none";
    favInactive.style.display = "flex";

    const cards = musicListContainer.querySelectorAll('.music-card');
    cards.forEach(card => {
        card.classList.remove("hide"); // Show all cards
    });
});

