//change foundry logo
const logo = document.querySelector('#logo');
logo.src = 'modules/rabidowlbear-foundry-recolor/image/fvtt-logo-b.webp';
console.log('logo', logo);
//add text logo to pause div
const pauseDiv = document.querySelector('#pause');
const logoSub = document.createElement('h4');
pauseDiv.appendChild(logoSub);

Hooks.on('renderPause', (app, html, options) => {
    if (options.paused) {
        //html.find("img")[0].src = (game.settings.get("custom-pause", "chooseFile"))
        document.querySelector('#pause img').src = 'modules/rabidowlbear-foundry-recolor/image/80sRing.webp';
    }
});
