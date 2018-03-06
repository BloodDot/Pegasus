declare namespace GOWN {
    /**
     * basic shapes
     */
    namespace shapes {

        class Shape extends PIXI.Graphics {
            /**
             * Shape base class
             *
             * @class Shape
             * @extends PIXI.Graphics
             * @memberof GOWN.shapes
             * @constructor
             * @param color Color of the shape {Number}
             * @param [alpha=1.0] Alpha value of the shape {Number}
             * @param width Width of the shape {Number}
             * @param height Height of the shape {Number}
             */
            constructor(color: Number, alpha: Number = 1.0, width: Number, height: Number);

            /**
             * The width of the shape, setting this will redraw the component.
             *
             * @name GOWN.shapes.Shape#width
             * @type Number
             */
            width: Number;

            /**
             * The height of the shape, setting this will redraw the component.
             *
             * @name GOWN.shapes.Shape#height
             * @type Number
             */
            height: Number;

            /**
             * The fill color of the shape, setting this will redraw the component.
             *
             * Setting the color to a negative value or 'null', the shape will not be filled
             * (comes in handy when you only want to draw the border).
             *
             * @name GOWN.shapes.Shape#color
             * @type Number
             */
            color: Number;

            /**
             * The alpha of the shape, setting this will redraw the component.
             *
             * @name GOWN.shapes.Shape#alpha
             * @type Number
             * @default 1.0
             */
            alpha: Number = 1;

            /**
             * Change the border color of shape
             *
             * @property borderColor
             * @type Number
             */
            borderColor: Number;

            /**
             * Change the border alpha of shape (between 0.0 - 1.0)
             *
             * @property borderAlpha
             * @type Number
             * @default 1.0
             */
            borderAlpha: Number = 1.0;

            /**
             * Change the border size
             *
             * @property border
             * @type Number
             */
            border: Number;
        }

        class Arrow extends GOWN.shapes.Shape {
            /**
             * Basic arrow shape
             *
             * @class Arrow
             * @extends GOWN.shapes.Shape
             * @memberof GOWN.shapes
             * @constructor
             * @param color Color of the arrow {Number}
             * @param alpha Alpha value of the arrow {Number}
             * @param tailWidth Tail width of the arrow {Number}
             * @param tailHeight Tail height of the arrow {Number}
             * @param width Width of the arrow {Number}
             * @param height Height of the arrow {Number}
             */
            constructor(color: Number, alpha: Number = 1.0, tailWidth: Number, tailHeight: Number, width: Number, height: Number);
        }

        class Diamond extends GOWN.shapes.Shape {
            /**
            * Basic diamond shape
            *
            * @class Diamond
            * @extends GOWN.shapes.Shape
            * @memberof GOWN.shapes
            * @constructor
            * @param color Color of the diamond shape {Number}
            * @param alpha Alpha value of the diamond shape {Number}
            * @param width Width of the diamond shape {Number}
            * @param height Height of the diamond shape {Number}
            */
            constructor(color: Number, alpha: Number, width: Number, height: Number);
        }

        class Ellipse extends PIXI.Ellipse {
            /**
             * Basic ellipse shape
             *
             * @class Ellipse
             * @extends PIXI.Ellipse
             * @memberof GOWN.shape
             * @constructor
             * @param color Color of the ellipse shape {Number}
             * @param alpha Alpha value of the ellipse shape {Number}
             * @param width Width of the ellipse shape {Number}
             * @param height Height of the ellipse shape {Number}
             */
            constructor(color: Number, alpha: Number, width: Number, height: Number);
        }

        class Line implements PIXI.IShape {
            /**
             * Basic line
             *
             * @class Line
             * @implements PIXI.IShape
             * @memberof GOWN.shape
             * @constructor
             * @param color Color of the line {Number}
             * @param alpha Alpha value of the line {Number}
             * @param width Width of the line {Number}
             * @param height Height of the line {Number}
             * @param [lineWidth=1] Width of the line {Number}
             * @param reverse
             */
            constructor(color: Number, alpha: Number, width: Number, height: Number, lineWidth: Number, reverse: Number);
        }

        class Rect implements PIXI.IShape {
            /**
             * Basic rectangular shape
             *
             * @class Rect
             * @extends GOWN.shapes.Shape
             * @memberof GOWN.shapes
             * @constructor
             * @param color Color of the rectangular shape {Number}
             * @param alpha Alpha value of the rectangular shape {Number}
             * @param width Width of the rectangular shape {Number}
             * @param height Height of the rectangular shape {Number}
             * @param radius Radius of the rectangular shape {Number}
             */
            constructor(color: Number, alpha: Number, width: Number, height: Number, radius: Number);
            /**
             * The radius of the rectangle border, setting this will redraw the component.
             *
             * @name GOWN.shapes.Rect#radius
             * @type Number
             */
            radius: Number;
            /**
             * Reverses the line
             *
             * @name GOWN.shapes.Line#reverse
             * @type bool
             */
            reverse: Boolean;
        }
    }

    namespace layout {
        class HorizontalLayout
    }






















    /**
     * Utility functions
     */
    namespace utils {
        /**
         * Utility functions to position an element relative to its parent
         */
        namespace position {
            /**
             * Put an element to the bottom of its parent
             * @param elem The element
             * @param parent The parent
             */
            function bottom(elem: PIXI.Container, parent?: PIXI.Container): void;
            /**
             * Center an element on the parent
             * @param elem The element
             * @param parent The parent
             */
            function center(elem: PIXI.Container, parent?: PIXI.Container): void;
            /**
             * Center an element on the parent horizontally
             * @param elem The element
             * @param parent The parent
             */
            function centerHorizontal(elem: PIXI.Container, parent?: PIXI.Container): void;
            /**
             * Center an element on the parent vertically
             * @param elem The element
             * @param parent The parent
             */
            function centerVertical(elem: PIXI.Container, parent?: PIXI.Container): void;
            /**
             * Put an element to the right of its parent.
             * @param elem The element
             * @param parent The parent
             */
            function right(elem: PIXI.Container, parent?: PIXI.Container): void;
        }

        namespace resizeScaling {
            interface defineProperty {
                height: Number;
                width: Number;
            }
            /**
             * This should be called from inside the constructor
             */
            function initResizeScaling(): void;
            /**
             * Update before draw call. Redraw control for current state from theme
             */
            function redraw(): void;
            function updateDimensions(): void;
            function updateTransform(): void;
        }

        /**
         * Mixin utility
         * @param destination Destination object
         * @param source Source object
         */
        function mixin(destination: Object, source: Object): Object;
        /**
         * Rounds a Number down to the nearest multiple of an input. For example, by rounding 16 down to the nearest 10, you will receive 10. Similar to the built-in function Math.floor().
         * @param number The number to round down
         * @param nearest The number whose multiple must be found
         */
        function roundDownToNearest(number: Number, nearest: Number): Number;
        /**
         * Rounds a Number up to the nearest multiple of an input. For example, by rounding 16 up to the nearest 10, you will receive 20. Similar to the built-in function Math.ceil().
         * @param number The number to round up
         * @param nearest The number whose multiple must be found
         */
        function roundUpToNearest(number: Number, nearest: Number): Number;
        /**
         * Rounds a Number to the nearest multiple of an input. For example, by rounding 16 to the nearest 10, you will receive 20. Similar to the built-in function Math.round().
         * @param number The number to round
         * @param nearest The number whose multiple must be found
         */
        function roundToNearest(number: Number, nearest: Number): Number;
        /**
         * Rounds a number to a certain level of precision. Useful for limiting the number of decimal places on a fractional number.
         * @param number The number to round
         * @param precision The number of decimal digits to keep
         */
        function roundToPrecision(number: Number, precision: Number): Number;
        function itemDimensions(item): [];
    }

    class Application extends GOWN.Control {
        /**
         * Entry point for your application, makes some assumptions, (e.g. that you always want fullscreen) and shortcuts some fancy stuff like a gradient background.
         * @param config Equals the renderer config for pixi with an exception: the backgroundColor is an Array a of colors it will drawn as vertical gradient
         * @param screenMode Screen mode of the canvas
         * @param parentId DOM id of the canvas element
         * @param width Width of the canvas
         * @param height Height of the canvas
         * @param renderer Renderer of the canvas
         * @param stage Root container
         */
        constructor(config?: { backgroundColor }, screenMode?: String = Application.SCREEN_MODE_RESIZE, parentId?: String, width?: Number = 800, height?: Number = 600, renderer?: PIXI.WebGLRenderer | PIXI.CanvasRenderer = PIXI.autoDetectRenderer(), stage?: PIXI.Container = new PIXI.Container()): void;
        /**
         * Use fixed width/height in pixel.
         */
        static get SCREEN_MODE_FIXEDString(): String;
        /**
         * Use window.innerWidth/innerHeight to get the whole browser page width
         */
        static get SCREEN_MODE_FULLSCREENString(): String;
        /**
         * Use resize to parent div width/height
         */
        static get SCREEN_MODE_RESIZEString(): String;
        /**
         * Set and draw background. Create a gradient by passing an array of hex color numbers.
         */
        background: Number | Array<Number>;
        /**
         * Enables/Disables the control. (not implemented yet)
         */
        enabled: Boolean;
        /**
         * Allow layouting of children
         */
        layoutGOWN: GOWN.layout.Layout;
        /**
         * Set the screen mode
         */
        screenModeString: String;
        /**
         * Call requestAnimationFrame to render the application at max. FPS
         */
        animate(): void;
        /**
         * Clean application: remove event listener, free memory (can also remove the canvas from the DOM tree if wanted)
         * @param destroyChildren if set to true, all the children will have their destroy method called as well
         * @param removeCanvas destroys the canvas and remove it from the dom tree
         */
        destroy(destroyChildren?: Boolean = false, removeCanvas?: Boolean = true): void;
        /**
         * called when the browser window / the application is resized will set the dimensions of the canvas and layout children (if it has a layout)
         */
        onResize(): void;
        /**
         * Redraw scene, apply layout if required
         */
        redraw(): void;
    }

    class AutoComplete extends GOWN.TextInput {
        /**
         * The basic AutoComplete. Needed for input with suggestions
         * @param text Default display text
         * @param theme theme for auto complete
         * @param skinName name of the auto complete skin
         */
        constructor(text: String, theme?: GOWN.Theme, skinName?: String = AutoComplete.SKIN_NAME): void;
        /**
         * Click state
         */
        static get CLICKED(): String;
        /**
         * Hover state
         */
        static get HOVER_CONTAINERString(): String;
        /**
         * Will destroy the skin cache when the skinable gets destroyed
         */
        allowDestroyCachebool: Boolean = true;
        /**
         * Prevent other interaction (touch/move) on this component
         */
        autoPreventInteractionbool: Boolean = false;
        /**
         * Interval for the cursor (in milliseconds)
         */
        blinkIntervalNumber: Number = 500;
        /**
         * Set display as password (show text with "*")
         */
        displayAsPassword: Boolean;
        /**
         * Enables/Disables the control. (not implemented yet)
         */
        enabled: Boolean;
        /**
         * Determine if the input has the focus
         */
        hasFocus: Boolean = false;
        /**
         * The maximum number of suggestions that show at one time. If 0, all suggestions will be shown.
         */
        limitTo: Number = 5;

        maxChars: String = "0"
    }

    /**
     * 
     */
    class Control extends PIXI.Container {
        enabled: Boolean;
        mousePos(): PIXI.Point;
        setTheme(theme: GOWN.theme): void;
    }
}