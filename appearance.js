window.addEventListener('load', () => {
    const introWrapper = document.querySelector(".intro-wrapper");
    const optionWrapper = document.querySelector(".option-wrapper");

    // Show introWrapper on load
    introWrapper.style.display = "flex";

    // Hide introWrapper and show optionWrapper after 1 second
    setTimeout(() => {
        introWrapper.style.display = "none";
        optionWrapper.style.display = "flex";
    }, 2000);
});

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

// const introWrapper = document.querySelector(".intro-wrapper");
// const optionWrapper = document.querySelector(".option-wrapper");
// const musicWrapper = document.querySelector('.music-wrapper');

// introWrapper.style.display = "none";
// optionWrapper.style.display = "none";
// musicWrapper.style.display = "none";