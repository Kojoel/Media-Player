const musicListContainer = document.querySelector('.music-list-container');
const playerWrapper = document.querySelector('.player-wrapper');
const playerBg = document.querySelector('.player-dark-bg');
let currentlyPlaying = null;
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
                        <audio controls id="Audio">
                            <source src="${item.songPath}">
                        </audio>
                    </div>`;
        musicListContainer.insertAdjacentHTML('beforeend', cardData);

        const musicList = musicListContainer.querySelectorAll('.music-card');
        // const audioList = musicListContainer.querySelectorAll('#audio');
        const progressBar = document.querySelector('#progress');
        const songTitle = document.querySelector('#song-title');
        const TimeCurrently = document.querySelector('#current-time');
        const TotalTime = document.querySelector('#total-time');

        musicList.forEach((card) => {
            card.addEventListener('click', () => {
                // console.log(card.innerText);
                playerBg.style.display = "flex";
                playerWrapper.style.display = "flex";

                // console.log(card);
                setInterval(() => {
                    const audios = card.querySelector('audio');
                    audios.play();
                    // console.log(audios.currentTime);
                    progressBar.max = audios.duration;
                    progressBar.value = audios.currentTime;

                    const songName = card.querySelector('#song-name');
                    const artistName = card.querySelector('#artist-name');
                    songTitle.textContent = songName.textContent + "   " + artistName.textContent;

                    //Gets song total play time in format MM:SS
                    const playTime = function () {
                        this.minutes = Math.floor(audios.duration/60);
                        this.seconds = Math.floor(audios.duration%60);
                        this.total = `${this.minutes} : ${this.seconds}`
                        return this.total;
                    }

                    //Gets song current play time in format MM:SS
                    const currentPlayTime = function () {
                        this.minutes = Math.floor((progressBar.value)/60);
                        this.seconds = Math.floor((progressBar.value)%60);
                        this.total = `${this.minutes} : ${this.seconds}`;
                        return this.total;
                    }

                    //Displays the current time and total time
                    TotalTime.textContent = playTime();
                    // console.log(TotalTime.textContent);
                    TimeCurrently.textContent = currentPlayTime();
                    // console.log(TimeCurrently.textContent);
                    
                    const playPause = document.querySelector('.middle-circle');

                    // playPause.addEventListener('click', (e) => {
                    //     let isRunning = true;
                    //     if(isRunning === true) {
                    //         audios.pause();
                    //         isRunning = false;
                    //     }else{
                    //         audios.play();
                    //         isRunning = true;
                    //     }
                    // });

                }, 1000);
                
            });
        });

    });   
}
getSongCards();

playerBg.addEventListener('click', () => {
    playerWrapper.style.display = "none";
    playerBg.style.display = "none";
    // console.log("Clicked");
})