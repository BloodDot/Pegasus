export default class Game extends PIXI.Container {
    constructor() {
        super();
        let lg = new GOWN.LayoutGroup();
        lg.width = 800;
        let layout = new GOWN.layout.HorizontalLayout();
        layout.gap = 10;
        lg.layout = layout;
        this.addChild(lg);

        for (let i = 0; i < 10; i++) {
            let btn = new GOWN.Button();
            btn.percentWidth = 100;
            btn.height = 46;
            btn.label = (i + 1) + ". button";
            lg.addChild(btn);
        }
    }
}