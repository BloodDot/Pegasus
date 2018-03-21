import EXSprite from './EXSprite';
import HealthBar from './HealthBar';

export default class Game extends PIXI.Container {
    private app: PIXI.Application;
    private stage: PIXI.Container;
    private dungeon: PIXI.Sprite;
    private explorer: EXSprite;
    private treasure: PIXI.Sprite;
    private door: PIXI.Sprite;
    private state: Function;
    private blobs: EXSprite[];

    private gameScene: PIXI.Container;
    private gameOverScene: PIXI.Container;

    private healthBar: HealthBar;
    private message: PIXI.Text;

    private explorerHit: boolean;

    public constructor(app) {
        super();
        this.app = app;
        this.stage = app.stage;
        PIXI.loader
            .add("images/treasureHunter.json")
            .load(this.setup.bind(this));
    }

    private setup(): void {
        this.initView();
        this.addEvent();
    }

    private initView(): void {
        this.gameScene = new PIXI.Container();
        this.addChild(this.gameScene);

        this.gameOverScene = new PIXI.Container();
        this.addChild(this.gameOverScene);
        this.gameOverScene.visible = false;

        let TextureCache = PIXI.utils.TextureCache;

        this.dungeon = new PIXI.Sprite(TextureCache["dungeon.png"]);
        this.gameScene.addChild(this.dungeon);

        this.door = new PIXI.Sprite(TextureCache["door.png"]);
        this.door.position.set(32, 0);
        this.gameScene.addChild(this.door);

        this.explorer = new EXSprite(TextureCache["explorer.png"]);
        this.explorer.x = 68;
        this.explorer.y = this.stage.height / 2 - this.explorer.height / 2;
        this.explorer.vx = 0;
        this.explorer.vy = 0;
        this.gameScene.addChild(this.explorer);

        this.treasure = new PIXI.Sprite(TextureCache["treasure.png"]);
        this.treasure.x = this.stage.width - this.treasure.width - 48;
        this.treasure.y = this.stage.height / 2 - this.treasure.height / 2;
        this.gameScene.addChild(this.treasure);

        let numberOfBlobs = 6,
            spacing = 48,
            xOffset = 150,
            speed = 2,
            direction = 1;

        this.blobs = [];

        for (let i = 0; i < numberOfBlobs; i++) {
            let blob = new EXSprite(TextureCache["blob.png"]);
            let x = spacing * i + xOffset;
            let y = this.randomInt(0, this.stage.height - blob.height);
            blob.x = x;
            blob.y = y;
            blob.vy = speed * direction;
            direction *= -1;
            this.blobs.push(blob);
            this.gameScene.addChild(blob);
        }

        this.healthBar = new HealthBar();
        this.healthBar.position.set(this.stage.width - 170, 4);
        this.gameScene.addChild(this.healthBar);

        let innerBar = new PIXI.Graphics();
        innerBar.beginFill(0x000000);
        innerBar.drawRect(0, 0, 128, 8);
        innerBar.endFill();
        this.healthBar.addChild(innerBar);
        this.healthBar.inner = innerBar;

        let outerBar = new PIXI.Graphics();
        outerBar.beginFill(0xff3300);
        outerBar.drawRect(0, 0, 128, 8);
        outerBar.endFill();
        this.healthBar.addChild(outerBar);
        this.healthBar.outer = outerBar;

        let style = new PIXI.TextStyle({
            fontFamily: "Futura",
            fontSize: 64,
            fill: "black"
        });
        this.message = new PIXI.Text("The End!", style);
        this.message.x = 120;
        this.message.y = this.stage.height / 2 - 32;
        this.gameOverScene.addChild(this.message);
    }

    private addEvent(): void {
        this.state = this.play;
        this.app.ticker.add(delta => this.gameLoop(delta));

        let left = this.keyboard(37),
            up = this.keyboard(38),
            right = this.keyboard(39),
            down = this.keyboard(40);

        left.press = () => {
            this.explorer.vx = -5;
            this.explorer.vy = 0;
        };
        left.release = () => {
            if (!right.isDown && this.explorer.vy === 0) {
                this.explorer.vx = 0;
            }
        };

        up.press = () => {
            this.explorer.vy = -5;
            this.explorer.vx = 0;
        };
        up.release = () => {
            if (!down.isDown && this.explorer.vx === 0) {
                this.explorer.vy = 0;
            }
        }

        right.press = () => {
            this.explorer.vx = 5;
            this.explorer.vy = 0;
        };
        right.release = () => {
            if (!left.isDown && this.explorer.vy === 0) {
                this.explorer.vx = 0;
            }
        }

        down.press = () => {
            this.explorer.vy = 5;
            this.explorer.vx = 0;
        };
        down.release = () => {
            if (!up.isDown && this.explorer.vx === 0) {
                this.explorer.vy = 0;
            }
        }
    }

    private gameLoop(delta): void {
        this.state(delta);
    }

    private play(delta): void {
        this.explorer.x += this.explorer.vx;
        this.explorer.y += this.explorer.vy;
        this.explorerHit = false;
        this.contain(this.explorer, { x: 28, y: 10, width: 488, height: 480 });

        this.blobs.forEach(blob => {
            blob.y += blob.vy;

            let blobHitsWall = this.contain(blob, { x: 28, y: 10, width: 488, height: 480 });

            if (blobHitsWall === "top" || blobHitsWall === "bottom") {
                blob.vy *= -1;
            }

            if (this.hitTestRectangle(this.explorer, blob)) {
                this.explorerHit = true;
            }
        });

        if (this.explorerHit) {
            this.explorer.alpha = 0.5;
            this.healthBar.outer.width -= 1;
        } else {
            this.explorer.alpha = 1;
        }

        if (this.hitTestRectangle(this.explorer, this.treasure)) {
            this.treasure.x = this.explorer.x + 8;
            this.treasure.y = this.explorer.y + 8;
        }

        if (this.hitTestRectangle(this.treasure, this.door)) {
            this.state = this.end;
            this.message.text = "You Won!";
        }

        if (this.healthBar.outer.width < 0) {
            this.state = this.end;
            this.message.text = "You lose!";
        }
    }

    private end(): void {
        // 647ahb
        this.gameScene.visible = false;
        this.gameOverScene.visible = true;
    }

    private contain(sprite: PIXI.Sprite, container: { x, y, width, height }): string {
        let collision = undefined;

        if (sprite.x < container.x) {
            sprite.x = container.x;
            collision = "left";
        }

        if (sprite.y < container.y) {
            sprite.y = container.y;
            collision = "top";
        }

        if (sprite.x + sprite.width > container.width) {
            sprite.x = container.width - sprite.width;
            collision = "right";
        }

        if (sprite.y + sprite.height > container.height) {
            sprite.y = container.height - sprite.height;
            collision = "bottom";
        }

        return collision;
    }

    private keyboard(keyCode): any {
        let key: any = {};
        key.code = keyCode;
        key.isDown = false;
        key.isUp = true;
        key.press = undefined;
        key.release = undefined;
        key.downHandler = event => {
            if (event.keyCode === key.code) {
                if (key.isUp && key.press) {
                    key.press();
                }
                key.isDown = true;
                key.isUp = false;
            }
            event.preventDefault();
        };

        key.upHandler = event => {
            if (event.keyCode === key.code) {
                if (key.isDown && key.release) {
                    key.release();
                }
                key.isDown = false;
                key.isUp = true;
            }
            event.preventDefault();
        }

        window.addEventListener("keydown", key.downHandler.bind(key), false);
        window.addEventListener("keyup", key.upHandler.bind(key), false);
        return key;
    }

    private randomInt(min, max): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private hitTestRectangle(r1, r2) {
        //Define the variables we'll need to calculate
        let hit, combinedHalfWidths, combinedHalfHeights, vx, vy;

        //hit will determine whether there's a collision
        hit = false;

        //Find the center points of each sprite
        r1.centerX = r1.x + r1.width / 2;
        r1.centerY = r1.y + r1.height / 2;
        r2.centerX = r2.x + r2.width / 2;
        r2.centerY = r2.y + r2.height / 2;

        //Find the half-widths and half-heights of each sprite
        r1.halfWidth = r1.width / 2;
        r1.halfHeight = r1.height / 2;
        r2.halfWidth = r2.width / 2;
        r2.halfHeight = r2.height / 2;

        //Calculate the distance vector between the sprites
        vx = r1.centerX - r2.centerX;
        vy = r1.centerY - r2.centerY;

        //Figure out the combined half-widths and half-heights
        combinedHalfWidths = r1.halfWidth + r2.halfWidth;
        combinedHalfHeights = r1.halfHeight + r2.halfHeight;

        //Check for a collision on the x axis
        if (Math.abs(vx) < combinedHalfWidths) {

            //A collision might be occuring. Check for a collision on the y axis
            if (Math.abs(vy) < combinedHalfHeights) {

                //There's definitely a collision happening
                hit = true;
            } else {

                //There's no collision on the y axis
                hit = false;
            }
        } else {

            //There's no collision on the x axis
            hit = false;
        }

        //`hit` will be either `true` or `false`
        return hit;
    };
}