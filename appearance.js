window.addEventListener('load', () => {
    const introWrapper = document.querySelector(".intro-wrapper");
    const optionWrapper = document.querySelector(".option-wrapper");
    const darkmode = document.querySelector(".darkmode");

    // Show introWrapper on load
    introWrapper.style.display = "flex";

    // Hide introWrapper and show optionWrapper after 1 second
    setTimeout(() => {
        introWrapper.style.display = "none";
        optionWrapper.style.display = "flex";
        musicWrapper.style.display = "none";
        darkmode.style.opacity ="1";
    }, 4000);
});


// window.addEventListener('load', () => {
//     const introWrapper = document.querySelector('.intro-wrapper');
//     const optionWrapper = document.querySelector(".option-wrapper");
//     musicWrapper.style.display = "none";
//     introWrapper.style.display = "none";
//     optionWrapper.style.display = "flex";
//     videoWrapper.style.display = "none";
// })


const optionM = document.querySelector('.optionM');
const optionV = document.querySelector('.optionV');
const optionWrapper = document.querySelector(".option-wrapper");
const musicWrapper = document.querySelector('.music-wrapper');
const playerDarkBg = document.querySelector('.player-dark-bg');
const videoWrapper = document.querySelector('.video-wrapper')

optionM.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log("clicked");
    optionWrapper.style.display = "none";
    // Show musicWrapper and wrapperForPlayer
    musicWrapper.style.display = "flex";
    videoWrapper.style.display = "none";
});

optionV.addEventListener('click', (e) => {
    e.stopPropagation();
    optionWrapper.style.display = "none";
    musicWrapper.style.display = "none";
    videoWrapper.style.display = "flex";
});


const gobackmusic = document.querySelector('.go-back-music');
gobackmusic.addEventListener('click', () => {
    optionWrapper.style.display = "flex";
})

const gobackvideo = document.querySelector('.go-back-video');
gobackvideo.addEventListener('click', () => {
    optionWrapper.style.display = "flex";
})

const gotovideoplayer = document.querySelector('.go-to-video-player');
gotovideoplayer.addEventListener('click', () => {
    musicWrapper.style.display = "none";
    videoWrapper.style.display = "flex";
})

const gotomusicplayer = document.querySelector('.go-to-music-player');
gotomusicplayer.addEventListener('click', () => {
    musicWrapper.style.display = "flex";
    videoWrapper.style.display = "none";
})


// Toggling dark and light mode 
const darkmodebutton = document.querySelector('.darkmodebutton');
console.log(darkmodebutton);
darkmodebutton.addEventListener('click', () => {

    darkmodebutton.classList.toggle('active');

    if(darkmodebutton.classList.contains("active")) {
        changeRootVariable('--white-bg', '#1e1e1e');
        changeRootVariable('--light-grey', '#272727');
        changeRootVariable('--light-grey-hover', '#494949')
        pTags = document.querySelectorAll('p');
        pTags.forEach(pTag => {
            pTag.style.color = "white"; 
        })
        h5Tags = document.querySelectorAll('h5');
        h5Tags.forEach(h5Tag => {
            h5Tag.style.color = "white";
        })
        h4Tags = document.querySelectorAll('h4');
        h4Tags.forEach(h4Tag => {
            h4Tag.style.color = "white";
        })
        h3Tags = document.querySelectorAll('h3');
        h3Tags.forEach(h3Tag => {
            h3Tag.style.color = "white";
        })
        inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.color = "white";
        })
        console.log(darkmodebutton);
    }
    else{
        changeRootVariable('--white-bg', 'white');
        changeRootVariable('--light-grey', '#ebebeb');
        changeRootVariable('--light-grey-hover', '#f0f0f0')
        pTags = document.querySelectorAll('p');
        pTags.forEach(pTag => {
            pTag.style.color = "black"; 
        })
        h5Tags = document.querySelectorAll('h5');
        h5Tags.forEach(h5Tag => {
            h5Tag.style.color = "black";
        })
        h4Tags = document.querySelectorAll('h4');
        h4Tags.forEach(h4Tag => {
            h4Tag.style.color = "black";
        })
        h3Tags = document.querySelectorAll('h3');
        h3Tags.forEach(h3Tag => {
            h3Tag.style.color = "purple";
        })
        inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.style.color = "black";
        })
    }
})

// const darkmode = document.querySelector(".darkmode");
// darrkmode.classList.toggle = 'active';

function changeRootVariable(variable, value) {
    document.documentElement.style.setProperty(variable, value);
  }