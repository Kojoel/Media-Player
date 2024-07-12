
const videos = document.querySelector('.list');
const vidSrc = document.querySelector('video source');
const video = document.querySelector('#myVideo');
// console.log(vidSrc);
// console.log(videos);

const videoUrls = [
    "video-samples/Life is fragile _ Reduce speed _ motivational video 👍.mp4"
]

const videoTitles = [
    "Life is fragile_Reduce Speed",
]


function getVideoList() {
    videoTitles.map((title) => {
        const parTitle = document.createElement('p');
        parTitle.textContent = title;

        console.log(parTitle);
        parTitle.classList.add('video-title');
        videos.appendChild(parTitle);
    })
}
getVideoList();


// Playing video after click on parTitle
const getVideos = document.querySelectorAll('.video-title');
getVideos.forEach((titleElement, index) => {
    titleElement.addEventListener('click', () => {
        vidSrc.src = videoUrls[index];
        video.load(); 
        video.play();  
    });

    const gobackvideo = document.querySelector('.go-back-video');
    gobackvideo.addEventListener('click', () => {
    video.pause();
    })

    const gotomusicplayer = document.querySelector('.go-to-music-player');
    gotomusicplayer.addEventListener('click', () => {
    video.pause();
    })
});

