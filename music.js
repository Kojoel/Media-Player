
const musicListContainer = document.querySelector('.music-list-container');
const playerWrapper = document.querySelector('.player-wrapper');
const playerBg = document.querySelector('.player-dark-bg');

const progressBar = document.querySelector('#progress');
const TimeCurrently = document.querySelector('#current-time');
const TotalTime = document.querySelector('#total-time');

const pauseBtn = document.querySelector('#pause-btn');
const playBtn = document.querySelector('#play-btn');
const prevBtn = document.querySelector('#prev-btn');


const songPaths = [
    "music-samples/Black-Sherif-Kilos-Milos.mp3",
    "music-samples/Chiké-&-Mohbad-Egwu.mp3",
    "music-samples/JP-Cooper-Holy-Water.mp3",
    "music-samples/Team-Eternity-Ghana-Defe-Defe-led-by-Naana Asiedu.mp3"
];

const artistNames = [
    "Black Sherif",
    "Chiké & Mohbad",
    "JP Cooper",
    "T.ENaana Asiedu"
]

const songTitle = [
    "Kilos Milos",
    "Egwu",
    "Holy Water",
    "Defe Defe"
]

let songLength = songTitle.length;
// console.log(songLength);

// Generate song cards
function generateMusicCards() {
    for (let i = 0; i < songTitle.length; i++) {
        musicListContainer.insertAdjacentHTML('beforeend', `
            <div class="music-card">
                <div class="box">
                    
                    <img id="box-icon" src="icons/music icon.png" alt="music icon">
                </div>
                <div class="song-title">
                    <h5 id="song-name" class="montserrat">SONG: ${songTitle[i]}</h5>
                    <h6 id="artist-name" class="montserrat">ARTIST: ${artistNames[i]}</h6>
                </div>
                <audio controls id="Audio" style="display: none">
                    <source src="${songPaths[i]}">
                </audio>
            </div>
        `);
    }
}
generateMusicCards();


Array.from(musicListContainer.children).forEach(card => {
    card.addEventListener('click', () => {
        const songAudio = card.querySelector('#Audio');
        setInterval(() => {
            while(songAudio.currentTime === songAudio.duration){
                songAudio.currentTime = 0;
                songAudio.play();
            }
        })
        
        songAudio.style.display = "none";
        playerWrapper.style.display = "flex";
        playerBg.style.display = "flex";
        
        songAudio.play();
        

        function getCurrentPlayTime(){
            setInterval(() => {
                // console.log(songAudio)
                this.minutes = Math.floor((progressBar.value)/60);
                this.seconds = Math.floor((progressBar.value)%60);
                this.total = `${this.minutes} : ${this.seconds}`;
                // console.log(this.total);
                TimeCurrently.textContent = this.total;
            return this.total;
            })
        };
        getCurrentPlayTime();


        function getPlayTime(){
            setInterval(() => {
                // const songAudio = card.querySelector('#Audio');
                // console.log(songAudio);
                this.minutes = Math.floor((songAudio.duration)/60);
                this.seconds = Math.floor((songAudio.duration)%60);
                this.total = `${this.minutes} : ${this.seconds}`
                // console.log(this.total);
                TotalTime.textContent = this.total;
                progressBar.max = songAudio.duration;
                return this.total;
            }, 500)
        };
        getPlayTime();


        function getProgressValueFromBar() {
            progressBar.addEventListener('click', () => {
                songAudio.pause();
                songAudio.currentTime = progressBar.value;
                // console.log(songAudio.value);
                songAudio.play();
            
                return songAudio.currentTime;
            })
        }
        getProgressValueFromBar();


        function getProgressValue(){
            setInterval(() => {
                // const songAudio = card.querySelector('#Audio');
                const progressValue = songAudio.currentTime;
                // console.log(progressValue);

                progressBar.value = progressValue;
            }, 1000);
        };
        getProgressValue();
      

        const songTitle = document.querySelector('#song-title');
        function getSongTitle(){
            const songname = card.querySelector('#song-name');
            const artistname = card.querySelector('#artist-name')
            const songval = songname.textContent;
            console.log(songval);
            songTitle.textContent = `${songval} - ${artistname.textContent}`;
            return songval;
        }
        getSongTitle();


        pauseBtn.addEventListener('click', () => {
            songAudio.pause();
            pauseBtn.style.display = "none";
            playBtn.style.display = "flex";
        })
        playBtn.addEventListener('click', () => {
            songAudio.play();
            pauseBtn.style.display = "flex"
            playBtn.style.display = "none";
        })
        prevBtn.addEventListener('click', () => {
            songAudio.pause();
            songAudio.currentTime = 0;
            console.log(card.sibling);
        })
        

        //Hide player using event listener on player background
        playerBg.addEventListener('click', () => {
            playerBg.style.display = "none";
            playerWrapper.style.display = "none";
            songAudio.pause();
            // location = 
            location.reload();
        })

    });
});


