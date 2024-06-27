const musicListContainer = document.querySelector('.music-list-container');

// console.log(musicListContainer);

const url = 'songs.json';

async function getSongCards() {
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);

    data.songs.forEach(item => {
        const cardData = `<div class="music-card">
                        <div class="box">
                            <img class="favorites-mini-grey-icon" src="icons/favorite-grey icon.png" alt="favorites icon">
                            <img class="favorites-mini-icon" src="icons/favorites icon.png" alt="favorites icon">
                            <img id="box-icon" src="icons/music icon.png" alt="music icon">
                        </div>
                        <div class="song-title">
                            <h5 id="song-name" class="montserrat">SONG: ${item.songTitle}</h6>
                            <h6 id="artist-name"class="montserrat">ARTIST: ${item.songArtist}</h6>
                        </div>
                        <audio controls>
                            <source src="${item.songPath}">
                        </audio>
                    </div>`;
        musicListContainer.insertAdjacentHTML('beforeend', cardData);

    });   
}
getSongCards();


// Music Player Customization

musicListContainer.addEventListener('click', (e) => {
    if(e.target && e.target.matches('.music-card')){
        console.log(e.textContent);
    }
    // playerBg.style.display = "flex";
    // playerWrapper.style.display = "flex";
    // console.log(e.target.parentNode.parentNode);
    // // console.log(musicListContainer.children);
})

const playerWrapper = document.querySelector('.player-wrapper');
const playerBg = document.querySelector('.player-dark-bg');

playerBg.addEventListener('click', () => {
    playerWrapper.style.display = "none";
    playerBg.style.display = "none";
    console.log("Clicked");
})