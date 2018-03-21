export default class Test extends PIXI.Container {
    private app: PIXI.Application;
    private stage: PIXI.Container;
    private dungeon: PIXI.Sprite;
    private explorer: PIXI.Sprite;
    private treasure: PIXI.Sprite;
    private door: PIXI.Sprite;
    private state: Function;

    public constructor(app) {
        super();
        this.app = app;
        this.stage = app.stage;
        PIXI.loader
            .add("images/treasureHunter.json")
            .load(this.setup.bind(this));
    }

    private setup(): void {
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

        this.state = this.play;
        this.app.ticker.add(delta => this.gameLoop(delta));

        let left = this.keyboard(37),
            up = this.keyboard(38),
            right = this.keyboard(39),
            down = this.keyboard(40);

        this.explorer["vx"] = 0;
        this.explorer["vy"] = 0;
        left.press = () => {
            this.explorer["vx"] = -5;
            this.explorer["vy"] = 0;
        };
        left.release = () => {
            if (!right.isDown && this.explorer["vy"] === 0) {
                this.explorer["vx"] = 0;
            }
        };

        up.press = () => {
            this.explorer["vy"] = -5;
            this.explorer["vx"] = 0;
        };
        up.release = () => {
            if (!down.isDown && this.explorer["vx"] === 0) {
                this.explorer["vy"] = 0;
            }
        }

        right.press = () => {
            this.explorer["vx"] = 5;
            this.explorer["vy"] = 0;
        };
        right.release = () => {
            if (!left.isDown && this.explorer["vy"] === 0) {
                this.explorer["vx"] = 0;
            }
        }

        down.press = () => {
            this.explorer["vy"] = 5;
            this.explorer["vx"] = 0;
        };
        down.release = () => {
            if (!up.isDown && this.explorer["vx"] === 0) {
                this.explorer["vy"] = 0;
            }
        }


        this.interactive = true;
        this.interactiveChildren = true;
        this.addEventListener("mousedown");
        // this.draw();
        // this.showMsg();
    }

    private gameLoop(delta): void {
        this.state(delta);
    }

    private play(delta): void {
        this.explorer.x += this.explorer["vx"];
        this.explorer.y += this.explorer["vy"];
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

    private addEventListener(evtName: string): void {
        this.on(evtName, (evt: PIXI.interaction.InteractionEvent) => {
            console.log(evt.currentTarget);
        })
    }

    private draw(): void {
        let rect = new PIXI.Graphics();
        rect.beginFill(0x66ccff);
        rect.lineStyle(4, 0xff3300, 1);
        rect.drawRect(0, 0, 64, 64);
        rect.endFill();
        rect.x = 170;
        rect.y = 170;
        this.addChild(rect);

        let circle = new PIXI.Graphics();
        circle.beginFill(0x9966ff);
        circle.drawCircle(0, 0, 32);
        circle.endFill();
        circle.x = 64;
        circle.y = 130;
        this.addChild(circle);

        let ellipse = new PIXI.Graphics();
        ellipse.beginFill(0xffff00);
        ellipse.drawEllipse(0, 0, 50, 20);
        ellipse.endFill();
        ellipse.x = 180;
        ellipse.y = 130;
        this.addChild(ellipse);

        let roundBox = new PIXI.Graphics();
        roundBox.lineStyle(4, 0x99ccff, 1);
        roundBox.beginFill(0xff9933);
        roundBox.drawRoundedRect(0, 0, 84, 36, 10);
        roundBox.endFill();
        roundBox.x = 48;
        roundBox.y = 190;
        this.addChild(roundBox);

        let line = new PIXI.Graphics();
        line.lineStyle(4, 0xffffff, 1);
        line.moveTo(0, 0);
        line.lineTo(80, 50);
        line.x = 32;
        line.y = 32;
        this.addChild(line);

        let triangle = new PIXI.Graphics();
        triangle.beginFill(0x66ff33);
        triangle.drawPolygon([
            -32, 64,
            32, 64,
            0, 0
        ]);
        triangle.endFill();
        triangle.x = 180;
        triangle.y = 22;
        this.addChild(triangle);
    }

    private showMsg(): void {
        let style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 36,
            fill: "white",
            stroke: '#ff3300',
            strokeThickness: 4,
            dropShadow: true,
            dropShadowColor: "#000000",
            dropShadowBlur: 4,
            dropShadowAngle: Math.PI / 6,
            dropShadowDistance: 6,
        });
        let msg = new PIXI.Text("Hello Pixi!", style);
        this.addChild(msg);
        msg.position.set(54, 96);
        msg.text = "Text changed!";
    }
}