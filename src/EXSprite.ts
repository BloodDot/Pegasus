export default class EXSprite extends PIXI.Sprite {
    public vx: number;
    public vy: number;

    public constructor(texture?: PIXI.Texture) {
        super(texture);
    }
}