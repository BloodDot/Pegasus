export default class Game extends PIXI.Container {
    private app: PIXI.Application;
    private stage: PIXI.Container;
    private dungeon: PIXI.Sprite;
    private explorer: PIXI.Sprite;
    private treasure: PIXI.Sprite;
    private door: PIXI.Sprite;

    public constructor(app) {
        super();
        this.app = app;
        this.stage = app.stage;
        PIXI.loader
            .add("images/treasureHunter.json")
            .load(this.setup.bind(this));
    }

    private setup() {
        let TextureCache = PIXI.utils.TextureCache;

        this.dungeon = new PIXI.Sprite(TextureCache["dungeon.png"]);
        this.addChild(this.dungeon);

        this.explorer = new PIXI.Sprite(TextureCache["explorer.png"]);
        this.addChild(this.explorer);
        this.explorer.x = 68;
        this.explorer.y = this.stage.height / 2 - this.explorer.height / 2;

        this.treasure = new PIXI.Sprite(TextureCache["treasure.png"]);
        this.addChild(this.treasure);
        this.treasure.x = this.stage.width - this.treasure.width - 48;
        this.treasure.y = this.stage.height / 2 - this.treasure.height / 2;
        this.addChild(this.treasure);

        this.door = new PIXI.Sprite(TextureCache["door.png"]);
        this.door.position.set(32, 0);
        this.addChild(this.door);

        let numberOfBlobs = 6,
            spacing = 48,
            xOffset = 150;

        for (let i = 0; i < numberOfBlobs; i++) {
            let blob = new PIXI.Sprite(TextureCache["blob.png"]);
            let x = spacing * i + xOffset;
            let y = this.randomInt(0, this.stage.height - blob.height);
            blob.x = x;
            blob.y = y;
            this.addChild(blob);
        }

        this.app.ticker.add(delta => this.gameLoop(delta));
    }

    private gameLoop(delta) {
        this.explorer.x++;
    }

    private randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}