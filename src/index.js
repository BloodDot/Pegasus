// let app = new PIXI.Application({ width: 256, height: 256 });
// document.body.appendChild(app.view);

import Game from './Game';

let gg = new Game();
gg.lalala();
var stage = new PIXI.Container();
var NUM_THEMES = 1;
var themesLoaded = 0;


var renderer = PIXI.autoDetectRenderer(800, 600, { backgroundColor: 0xffffff });
document.body.appendChild(renderer.view);

var metalbtn;
function onCompleteMetal() {
    metalbtn = new GOWN.Button();
    metalbtn.width = 150;
    metalbtn.height = 100;
    metalbtn.x = 320;
    metalbtn.y = 30;
    metalbtn.label = "third";
    stage.addChild(metalbtn);

    metalbtn.on(GOWN.Button.TRIGGERED, function () {
        if (window.console) {
            console.log("you clicked the third button!");
        }
    });

    themesLoaded++;
    if (themesLoaded === NUM_THEMES) {
        requestAnimationFrame(animate);
    }

    let a = new GOWN.shapes.Line(0, 1, 500, 1);
    stage.addChild(a);
}

var theme = new GOWN.ThemeParser("../themes/aeon_desktop/aeon_desktop.json");
theme.once(GOWN.Theme.COMPLETE, onCompleteMetal, this);

function animate() {
    // render the stage
    renderer.render(stage);
    requestAnimationFrame(animate);
}
GOWN.loader.load();

