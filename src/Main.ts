import Game from './Game';

// let app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor: 0xffffff });
let app = new PIXI.Application(800, 600, { backgroundColor: 0xffffff });

new GOWN.ThemeParser("./themes/aeon_desktop/aeon_desktop.json");
GOWN.loader
    .load(() => {
        document.body.appendChild(app.view);
        app.stage.addChild(new Game(app));
    });