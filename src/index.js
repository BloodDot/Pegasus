import Game from './Game';

// let app = new PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0xffffff });
let app = new PIXI.Application(window.innerWidth, window.innerHeight, { backgroundColor: 0xffffff });

let theme = new GOWN.ThemeParser("./themes/aeon_desktop/aeon_desktop.json");
theme.once(GOWN.Theme.COMPLETE, onThemeComplete, this);

function onThemeComplete() {
    document.body.appendChild(app.view);
    app.stage.addChild(new Game());
}
GOWN.loader.load();