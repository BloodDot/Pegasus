// full version of gown
// (includes pixi-layout and pixi-shape, so you only need to add pixi.js
//  and gown.js into your html file)
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
            constructor(color: Number, alpha: Number = 1.0, width: Number, height: Number): void;

            /**
             * The alpha of the shape, setting this will redraw the component.
             *
             * @name GOWN.shapes.Shape#alpha
             * @type Number
             * @default 1.0
             */
            alpha: Number = 1;

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
            constructor(color: Number, alpha: Number = 1.0, tailWidth: Number, tailHeight: Number, width: Number, height: Number): void;
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
            constructor(color: Number, alpha: Number, width: Number, height: Number): void;
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
            constructor(color: Number, alpha: Number, width: Number, height: Number): void;
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
            constructor(color: Number, alpha: Number, width: Number, height: Number, lineWidth: Number, reverse: Number): void;

            /**
             * The width of the line
             * 
             * @name GOWN.shapes.Line#lineWidth
             * @type Number
             */
            lineWidth: Number = 1;
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
            constructor(color: Number, alpha: Number, width: Number, height: Number, radius: Number): void;
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
        class Layout {
            /**
             * Basic layout stub - see GOWN.LayoutAlignment
             *
             * @class Layout
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * If the total item height is smaller than the height of the bounds,
             * the items will be aligned to the top.
             *
             * @static
             * @final
             * @type String
             */
            static readonly VERTICAL_ALIGN_TOP = 'top';

            /**
             * If the total item height is smaller than the height of the bounds,
             * the items will be aligned to the middle.
             *
             * @static
             * @final
             * @type String
             */
            static readonly VERTICAL_ALIGN_MIDDLE = 'middle';

            /**
             * Alignment justified
             *
             * @static
             * @final
             * @type String
             */
            static readonly ALIGN_JUSTIFY = 'justify';

            /**
             * If the total item height is smaller than the height of the bounds,
             * the items will be aligned to the bottom.
             *
             * @static
             * @final
             * @type String
             */
            static readonly VERTICAL_ALIGN_BOTTOM = 'bottom';

            /**
             * If the total item width is smaller than the width of the bounds, the
             * items will be aligned to the left.
             *
             * @static
             * @final
             * @type String
             */
            static readonly HORIZONTAL_ALIGN_LEFT = 'left';

            /**
             * If the total item width is smaller than the width of the bounds, the
             * items will be aligned to the center.
             *
             * @static
             * @final
             * @type String
             */
            static readonly HORIZONTAL_ALIGN_CENTER = 'center';

            /**
             * If the total item width is smaller than the width of the bounds, the
             * items will be aligned to the right.
             *
             * @static
             * @final
             * @type String
             */
            static readonly HORIZONTAL_ALIGN_RIGHT = 'right';

            /**
             * The space, in pixels, between items.
             *
             * @name GOWN.layout.Layout#gap
             * @type Number
             * @default 0
             */
            gap: Number = 0;

            /**
             * Indicates if the layout needs to be rearranged.
             *
             * @name GOWN.layout.Layout#needUpdate
             * @readonly
             */
            readonly needUpdate: Boolean;

            /**
             * Shortcut to set all paddings (left, right, top, bottom)
             *
             * @name GOWN.layout.Layout#padding
             * @type Number
             * @default 0
             */
            padding: Number = 0;

            /**
             * The minimum space, in pixels, above the items.
             *
             * @name GOWN.layout.Layout#paddingTop
             * @type Number
             * @default 0
             */
            paddingTop: Number = 0;

            /**
             * The minimum space, in pixels, below the items.
             *
             * @name GOWN.layout.Layout#paddingBottom
             * @type Number
             * @default 0
             */
            paddingBottom: Number = 0;

            /**
             * The space, in pixels, that appears to the left, before the first
             * item.
             *
             * @name GOWN.layout.Layout#paddingLeft
             * @type Number
             * @default 0
             */
            paddingLeft: Number = 0;

            /**
             * The space, in pixels, that appears to the right, after the last item.
             *
             * @name GOWN.layout.Layout#paddingLeft
             * @type Number
             * @default 0
             */
            paddingRight: Number = 0;

            /**
             * Position (and possibly resize) the supplied items.
             *
             * @param items items that will be layouted {Array}
             * @param viewPortBounds {ViewPortBounds}
             */
            /* jshint unused: false */
            layout(items: [], viewPortBounds): void;
        }

        class LayoutAlignment extends GOWN.layout.Layout {
            /**
             * Basic layout
             *
             * @class LayoutAlignment
             * @extends GOWN.layout.Layout
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * Vertical alignment
             *
             * @static
             * @final
             * @type String
             */
            static VERTICAL_ALIGNMENT = 'vertical';

            /**
             * Horizontal alignment
             *
             * @static
             * @final
             * @type String
             */
            static HORIZONTAL_ALIGNMENT = 'horizontal';

            /**
             * Apply percentage width/height to items.
             * This will use the explicit width/height and apply it to all items
             * according to its percentages.
             *
             * Percentages have higher priorities than fixed values.
             * So if you set a width higher than 0 but also percentWidth,
             * the width will be recalculated according to percentWidth.
             *
             * @param items The items which get new width and height according to the percent {Array}
             * @param explicit The space we have for the components {Number}
             * @param [alignment=LayoutAlignment.VERTICAL_ALIGNMENT] The alignment mode {String}
             */
            applyFixedPercent(items: [], explicit: Number, alignment: String): void;

            /**
             * Apply percentage width/height to items.
             * This will stack items on top/aside of each other
             *
             * Percentages have higher priorities than fixed values.
             * So if you set a width higher than 0 but also percentWidth,
             * the width will be recalculated according to percentWidth.
             *
             * (this function will handle padding and gap, so the explicitWidth is
             * for the whole available width)
             *
             * @param items The items which get new width and height according to the percent {Array}
             * @param explicit space we have for the components {Number}
             */
            applyPercent(items: [], explicit: Number): void;

            /**
             * Calculate the layout for a container (and its children)
             *
             * @param container The container to calculate the layout for
             * @return Number[] The width and height
             */
            layoutContainer(container: PIXI.Container): Number[];

            /**
             * Position (and possibly resize) the supplied items.
             *
             * @param items The items that will be layouted {Array}
             * @param maxWidth The maximum width for the items {Number}
             * @param maxHeight The maximum height for the items {Number}
             * @return Number[] The width and height
             */
            layout(items: [], maxWidth: Number, maxHeight: Number): Number[];

            /**
             * The space between the first and second element
             *
             * @name GOWN.layout.LayoutAlignment#firstGap
             * @type Number
             */
            firstGap: Number;

            /**
             * The space between the last and second-to-last element
             *
             * @name GOWN.layout.LayoutAlignment#lastGap
             * @type Number
             */
            lastGap: Number;
        }

        class HorizontalLayout extends GOWN.layout.LayoutAlignment {
            /**
             * HorizontalLayout - just sets the alignment to
             * LayoutAlignment.HORIZONTAL_ALIGNMENT
             *
             * @class HorizontalLayout
             * @extends GOWN.layout.LayoutAlignment
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * The alignment of the layout
             *
             * @type String
             * @default LayoutAlignment.HORIZONTAL_ALIGNMENT
             */
            alignment = LayoutAlignment.HORIZONTAL_ALIGNMENT;
        }

        class VerticalLayout extends GOWN.layout.LayoutAlignment {
            /**
             * VerticalLayout - just sets the alignment to
             * LayoutAlignment.VERTICAL_ALIGNMENT
             *
             * @class VerticalLayout
             * @extends GOWN.layout.LayoutAlignment
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * The alignment of the layout
             *
             * @type String
             * @default LayoutAlignment.VERTICAL_ALIGNMENT
             */
            alignment = LayoutAlignment.VERTICAL_ALIGNMENT;
        }

        class TiledLayout extends GOWN.layout.LayoutAlignment {
            /**
             * A layout for tiled rows/columns
             *
             * @class TiledLayout
             * @extends GOWN.layout.Layout
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * Orientation by rows
             *
             * @static
             * @final
             * @type String
             */
            static readonly ORIENTATION_ROWS = 'rows';

            /**
             * Orientation by columns
             *
             * @static
             * @final
             * @type String
             */
            static readonly ORIENTATION_COLUMNS = 'columns';

            /**
             * If an item height is smaller than the height of a tile, the item will
             * be aligned to the top edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_VERTICAL_ALIGN_TOP = 'top';

            /**
             * If an item height is smaller than the height of a tile, the item will
             * be aligned to the middle of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_VERTICAL_ALIGN_MIDDLE = 'middle';

            /**
             * If an item height is smaller than the height of a tile, the item will
             * be aligned to the bottom edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_VERTICAL_ALIGN_BOTTOM = 'bottom';

            /**
             * The item will be resized to fit the height of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_VERTICAL_ALIGN_JUSTIFY = 'justify';

            /**
             * If an item width is smaller than the width of a tile, the item will
             * be aligned to the left edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_HORIZONTAL_ALIGN_LEFT = 'left';

            /**
             * If an item width is smaller than the width of a tile, the item will
             * be aligned to the center of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_HORIZONTAL_ALIGN_CENTER = 'center';

            /**
             * If an item width is smaller than the width of a tile, the item will
             * be aligned to the right edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_HORIZONTAL_ALIGN_RIGHT = 'right';

            /**
             * The item will be resized to fit the width of the tile.
             *
             * @static
             * @final
             * @type String
             */
            static readonly TILE_HORIZONTAL_ALIGN_JUSTIFY = 'justify';

            /**
             * The items will be positioned in pages horizontally from left to right.
             *
             * @static
             * @final
             * @type String
             */
            static readonly PAGING_HORIZONTAL = 'horizontal';

            /**
             * The items will be positioned in pages vertically from top to bottom.
             *
             * @static
             * @final
             * @type String
             */
            static readonly PAGING_VERTICAL = 'vertical';

            /**
             * The items will not be positioned in pages.
             *
             * @static
             * @final
             * @type String
             */
            static readonly PAGING_NONE = 'none';

            /**
             * Calculate the layout for a container (and its children)
             *
             * @param container The container to calculate the layout for
             * @return Number[] The width and height
             */
            layoutContainer(container: PIXI.Container): Number[];

            /**
             * Position (and possibly resize) the supplied items.
             *
             * @param items The items that will be layouted {Array}
             * @param maxWidth The maximum width for the items {Number}
             * @param maxHeight The maximum height for the items {Number}
             * @return Number[] The width and height
             */
            layout(items: [], maxWidth: Number, maxHeight: Number): Number[];

            /**
             * Use the same width and height for tiles (calculated by biggest square)
             *
             * @name GOWN.layout.TiledLayout#useSquareTiles
             * @type bool
             * @default false
             */
            useSquareTiles: Boolean = false;
        }

        class TiledColumnsLayout extends GOWN.layout.TiledLayout {
            /**
             * Tiled columns Layout
             * (roughly based on starling TiledColumnsLayout)
             *
             * @class TiledColumnsLayout
             * @extends GOWN.layout.TiledLayout
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * Quickly sets both <code>horizontalGap</code> and <code>verticalGap</code>
             * to the same value. The <code>gap</code> getter always returns the
             * value of <code>verticalGap</code>, but the value of
             * <code>horizontalGap</code> may be different.
             *
             * @see #_horizontalGap
             * @see #_verticalGap
             *
             * @name GOWN.layout.TiledColumnsLayout#gap
             * @type Number
             * @default 0
             */
            gap: Number = 0;
        }


        class TiledRowsLayout extends GOWN.layout.TiledLayout {
            /**
             * Tiled rows Layout
             * (roughly based on starling TiledRowsLayout)
             *
             * @class TiledRowsLayout
             * @extends GOWN.layout.TiledLayout
             * @memberof GOWN.layout
             * @constructor
             */
            constructor(): void;

            /**
             * Quickly sets both <code>horizontalGap</code> and <code>verticalGap</code>
             * to the same value. The <code>gap</code> getter always returns the
             * value of <code>horizontalGap</code>, but the value of
             * <code>verticalGap</code> may be different.
             *
             * @see #_horizontalGap
             * @see #_verticalGap
             *
             * @name GOWN.layout.TiledRowsLayout#gap
             * @type Number
             * @default 0
             */
            gap: Number = 0;

        }
    }

    class Application extends GOWN.Control {
        /**
         * Entry point for your application, makes some assumptions, (e.g. that you
         * always want fullscreen) and shortcuts some fancy stuff like a gradient
         * background.
         *
         * @class Application
         * @extends GOWN.Control
         * @memberof GOWN
         * @constructor
         * @param [config] {Object} Equals the renderer config for pixi with an
         *  exception: the backgroundColor is an Array a of colors it will drawn as
         *  vertical gradient
         * @param [config.backgroundColor=0xffffff] {Number} Background color of the canvas
         * @param [screenMode=Application.SCREEN_MODE_RESIZE] {String} Screen mode of the canvas
         * @param [parentId] {String} DOM id of the canvas element
         * @param [width=800] {Number} Width of the canvas
         * @param [height=600] {Number} Height of the canvas
         * @param [renderer=PIXI.autoDetectRenderer()] {PIXI.WebGLRenderer|PIXI.CanvasRenderer} Renderer of the canvas
         * @param [stage=new PIXI.Container()] {PIXI.Container} Root container
         */
        constructor(config?: { backgroundColor }, screenMode?: String = Application.SCREEN_MODE_RESIZE, parentId?: String, width?: Number = 800, height?: Number = 600, renderer?: PIXI.WebGLRenderer | PIXI.CanvasRenderer = PIXI.autoDetectRenderer(), stage?: PIXI.Container = new PIXI.Container()): void;

        /**
         * Use fixed width/height in pixel.
         *
         * @static
         * @final
         * @type String
         */
        static readonly SCREEN_MODE_FIXED: String;

        /**
         * Use window.innerWidth/innerHeight to get the whole browser page width
         *
         * @static
         * @final
         * @type String
         */
        static readonly SCREEN_MODE_FULLSCREEN: String;

        /**
         * Use resize to parent div width/height
         *
         * @static
         * @final
         * @type String
         */
        static readonly SCREEN_MODE_RESIZE: String;

        /**
         * Set and draw background. Create a gradient by passing an array of hex color numbers.
         *
         * @name GOWN.Application#background
         * @type Number|Number[]
         */
        background: Number | Number[];

        /**
         * Allow layouting of children
         *
         * @name GOWN.Application#layout
         * @type GOWN.layout.Layout
         */
        layout: GOWN.layout.Layout;

        /**
         * Set the screen mode
         *
         * @name GOWN.Application#screenMode
         * @type String
         */
        screenMode: String;

        /**
         * Call requestAnimationFrame to render the application at max. FPS
         */
        animate(): void;

        /**
         * Clean application: remove event listener, free memory
         * (can also remove the canvas from the DOM tree if wanted)
         *
         * @param [destroyChildren=false] {boolean} if set to true, all the children will have their destroy method called as well
         * @param [removeCanvas=true] {boolean} destroys the canvas and remove it from the dom tree
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
         * The basic  Needed for input with suggestions
         *
         * @class AutoComplete
         * @extends GOWN.TextInput
         * @memberof GOWN
         * @constructor
         * @param text Default display text {String}
         * @param [theme] theme for auto complete {GOWN.Theme}
         * @param [skinName=SKIN_NAME] name of the auto complete skin {String}
         */
        constructor(text: String, theme?: GOWN.Theme, skinName?: String = SKIN_NAME): void;

        /**
         * Click state
         *
         * @static
         * @final
         * @type String
         */
        static readonly CLICKED: String = 'clicked';

        /**
         * Hover state
         *
         * @static
         * @final
         * @type String
         */
        static readonly HOVER_CONTAINER: String = 'hoverContainer';

        /**
         * The maximum number of suggestions that show at one time.
         * If 0, all suggestions will be shown.
         *
         * @name GOWN.AutoComplete#limitTo
         * @type Number
         * @default 5
         */
        limitTo: Number = 5;

        /**
         * The minimum number of entered characters required to draw suggestions.
         *
         * @name GOWN.AutoComplete#minAutoCompleteLength
         * @type Number
         * @default 2
         */
        minAutoCompleteLength: Number = 2;

        /**
         * Result elements (source elements filtered by the text attribute)
         *
         * @name GOWN.AutoComplete#results
         * @type String[]
         * @default []
         */
        results: String[] = [];

        /**
         * Source elements from which the auto complete filters the elements corresponding to the current text
         *
         * @name GOWN.AutoComplete#source
         * @type String[]
         * @default []
         */
        source: String[] = [];

        /**
         * Draw the results
         *
         * @param text Text to filter the source elements {String}
         */
        drawResults(text: String): void;

        /**
         * Update the hover result element
         * @param elementText
         */
        hoverResultElement(elementText): void;

        /**
         * Redraw the results
         */
        redrawResult(): void;

        /**
         * Remove the hover result element
         */
        removeHoverResultElement(): void;

        /**
         * Close results and set the text
         *
         * @param text Display text {String}
         */
        selectResultElement(text: String): String;

        /**
         * Set the auto complete text. Draws the auto complete results afterwards.
         *
         * @param text The text to set {String}
         */
        setText(text: String): void;

        /**
         * Close the results
         */
        toggleResults(): void;
    }

    class Button extends GOWN.Skinable {
        /**
         * The basic Button with 3 states (up, down and hover) and a label that is
         * centered on it
         *
         * @class Button
         * @extends GOWN.Skinable
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the button {GOWN.Theme}
         * @param [skinName=Button.SKIN_NAME] name of the button skin {String}
         */
        constructor(theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Down state: mouse button is pressed or finger touches the screen
         *
         * @static
         * @final
         * @type String
         */
        static readonly DOWN: String = 'down';

        /**
         * Hover state: mouse pointer hovers over the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static readonly HOVER: String = 'hover';

        /**
        * Out state: mouse pointer leaves the button
        * (ignored on mobile)
        *
        * @static
        * @final
        * @type String
        */
        static readonly OUT: String = 'out';

        /**
         * Default button skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'button';

        /**
         * Dispatched when the button is triggered.
         *
         * @static
         * @final
         * @type String
         */
        static readonly TRIGGERED: String = 'triggered';

        /**
         * Up state: mouse button is released or finger is removed from the screen
         *
         * @static
         * @final
         * @type String
         */
        static readonly UP: String = 'up';

        /**
         * Create/Update the label of the button.
         *
         * @name GOWN.Button#label
         * @type String
         */
        label: String;
    }

    class Check extends GOWN.ToggleButton {
        /**
         * A toggle control that contains a label and a box that may be checked
         * or not to indicate selection.
         *
         * @class Check
         * @extends GOWN.ToggleButton
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the button {GOWN.Theme}
         * @param [skinName=Check.SKIN_NAME] name of the check skin {String}
         */
        constructor(theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Default check skin name
         *
         * @static
         * @final
         * @type String
         */
        SKIN_NAME: String = 'check';
    }

    class InputControl extends GOWN.Skinable {
        /**
         * InputControl used for TextInput, TextArea and everything else that
         * is capable of entering text
         *
         * roughly based on PIXI.Input InputObject by Sebastian Nette,
         * see https://github.com/SebastianNette/PIXI.Input
         *
         * @class InputControl
         * @extends GOWN.Skinable
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the input control {GOWN.Theme}
         */
        constructor(theme?: GOWN.Theme): void;

        /**
         * Currently selected input control (used for tab index)
         *
         * @static
         * @type GOWN.InputControl
         */
        static currentInput = null;

        /**
         * Down state: mouse button is pressed or finger touches the screen
         *
         * @static
         * @final
         * @type String
         */
        static readonly DOWN: String = 'down';

        /**
         * Hover state: mouse pointer hovers over the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static readonly HOVER: String = 'hover';

        /**
         * Hover state: mouse pointer hovers over the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static readonly OUT: String = 'out';

        /**
         * Up state: mouse button is released or finger is removed from the screen
         *
         * @static
         * @final
         * @type String
         */
        static readonly UP: String = 'up';

        /**
         * Prevent other interaction (touch/move) on this component
         * 
         * @name GOWN.InputControl#autoPreventInteraction
         * @type Boolean
         * @default false
         */
        autoPreventInteraction: Boolean = false;

        /**
         * Interval for the cursor (in milliseconds)
         * 
         * @name GOWN.InputControl#blinkInterval
         * @type Number
         * @default 500
         */
        blinkInterval: Number = 500;

        /**
         * The current state
         * TODO: move to skinable?
         *
         * @name GOWN.InputControl#currentState
         * @type String
         * @default InputControl.UP
         */
        currentState: String = InputControl.UP;

        /**
         * Determine if the input has the focus
         *
         * @name GOWN.InputControl#hasFocus
         * @type bool
         * @default false
         */
        hasFocus: Boolean = false;

        /**
         * The maximum number of characters that may be entered. If 0,
         * any number of characters may be entered.
         * (same as maxLength for DOM inputs)
         *
         * @name GOWN.InputControl#maxChars
         * @type String
         * @default 0
         */
        maxChars: Number = 0;

        /**
         * TODO
         *
         * @type bool
         * @default true
         */
        receiveKeys: Boolean = true;

        /**
         * Text selection background
         * 
         * @type PIXI.Graphics
         */
        selectionBg: PIXI.Graphics;

        /**
         * Set the text style (size, font etc.) for text and cursor
         *
         * @name GOWN.InputControl#style
         * @type PIXI.TextStyle
         */
        style: PIXI.TextStyle;

        /**
         * Set the text that is shown inside the input field.
         * Calls onTextChange callback if text changes.
         *
         * @name GOWN.InputControl#text
         * @type String
         * @default ''
         */
        text: String;

        /**
         * Blur the text input (remove focus)
         */
        blur(): void;

        /**
         * Delete the selected text
         */
        deleteSelection(): void;

        /**
         * Delete text from a start position to an end position
         *
         * @param fromPos start position {Number}
         * @param toPos end position {Number}
         * @returns {String}
         */
        deleteText(fromPos: Number, toPos: Number): String;

        /**
         * Focus on this input and set it as current
         */
        focus(): void;

        /**
         * Insert a char at the current cursor position
         *
         * @param char The char that gets inserted {String}
         */
        insertChar(char: String): void;

        /**
         * Move the cursor left
         */
        moveCursorLeft(): void;

        /**
         * Move the cursor right
         */
        moveCursorRight(): void;

        /**
         * Height of the line in pixel
         * (assume that every character of pixi text has the same line height)
         *
         * @returns {Number}
         */
        lineHeight(): Number;

        /**
         * From pixel position on the text to character position inside the text
         * (used when clicked on the text)
         *
         * @param pixelPos Pixel position of the mouse on the text
         * @returns {Number} Position in the text
         */
        pixelToTextPos(pixelPos): Number;

        /**
         * Set the cursor position on the text
         */
        setCursorPos(): void;

        /**
         * Set the input control text.
         *
         * @param text The text to set {String}
         */
        setText(text: String): void;

        /**
         * From position in the text to pixel position
         * (for cursor/selection positioning)
         *
         * @param textPos Current character position in the text {Number}
         * @param [position] point that will be set with the pixel position and returned {PIXI.Point}
         * @returns {PIXI.Point} Pixel position
         */
        textToPixelPos(textPos: Number, position?: PIXI.Point): PIXI.Point;

        /**
         * Get the width of a text
         *
         * @param text The text to get the width from {String}
         * @returns {Number}
         */
        textWidth(text: String): Number;

        /**
         * Set the selected text
         *
         * @param start Start position in the text {Number}
         * @param end End position in the text {Number}
         * @returns {boolean}
         */
        updateSelection(start: Number, end: Number): Boolean;
    }

    class LayoutGroup extends GOWN.Control {
        /**
         * The LayoutGroup allows you to add PIXI.js children that will be positioned
         *
         * @class LayoutGroup
         * @extends GOWN.Control
         * @memberof GOWN
         * @constructor
         * @param layout The layout for the layout group {GOWN.LayoutAlignment}
         * @param [maxWidth=Infinity] The maximum width of the layout group {Number}
         * @param [maxHeight=Infinity] The maximum height of the layout group {Number}
         */
        constructor(layout: GOWN.LayoutAlignment, maxWidth: Number, maxHeight: Number): void;

        /**
         * The layout for the layout group
         * 
         * @name GOWN.LayoutGroup#layout
         * @type GOWN.LayoutAlignment
         */
        layout: GOWN.LayoutAlignment;

        /**
         * The maximum height of the layout group
         * 
         * @name GOWN.LayoutGroup#maxHeight
         * @type Number
         */
        maxHeight: Number;

        /**
         * The maximum width of the layout group
         * 
         * @name GOWN.LayoutGroup#maxWidth
         * @type Number
         */
        maxWidth: Number;

        /**
         * The percentage height of the positioned children
         * 
         * @name GOWN.LayoutGroup#percentHeight
         * @type Number
         */
        percentHeight: Number;

        /**
         * The percentage width of the positioned children
         * 
         * @name GOWN.LayoutGroup#percentWidth
         * @type Number
         */
        percentWidth: Number;

        /**
         * Adds one or more children to the container.
         *
         * Multiple items can be added like so: `myContainer.addChild(thingOne, thingTwo, thingThree)`
         *
         * @param {...PIXI.DisplayObject} child - The DisplayObject(s) to add to the container
         * @return {PIXI.DisplayObject} The first child that was added.
         */
        addChild(child): PIXI.DisplayObject;

        /**
         * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown
         *
         * @param {PIXI.DisplayObject} child - The child to add
         * @param {number} index - The index to place the child in
         * @return {PIXI.DisplayObject} The child that was added.
         */
        addChildAt(child: PIXI.DisplayObject, pos: number): PIXI.DisplayObject;

        /**
         * Add some space between children
         *
         * @param space Space between children {Number}
         */
        addSpacer(space: Number): void;

        /**
         * Indicates if the given child is inside the viewport (only used for scrolling)
         *
         * @param child One child with set coordinates and dimensions {PIXI.DisplayObject}
         * @param x X-position on the scroll-container {Number}
         * @param y Y-position on the scroll-container {Number}
         * @param width Width of the viewport {Number}
         * @param height Height of the viewport {Number}
         * @returns {boolean}
         */
        childIsRenderAble(child: PIXI.DisplayObject, x: Number, y: Number, width: Number, height: Number): void;

        /**
         * Update renderable (culling of non visible objects)
         *
         * @param x X-position on the scroll-container {Number}
         * @param y Y-position on the scroll-container {Number}
         * @param width width of the viewport {Number}
         * @param height height of the viewport {Number}
         */
        updateRenderable(x: Number, y: Number, width: Number, height: Number): void;
    }

    class List extends GOWN.Scroller {
        /**
         * The basic list
         *
         * @class List
         * @extends GOWN.Scroller
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the list {GOWN.Theme}
         */
        constructor(theme?: GOWN.Theme): void;

        /**
         * Dispatched when the selected item changes.
         *
         * @static
         * @final
         * @type String
         */
        static readonly CHANGE: String = 'change';

        /**
         * Default list skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'list';

        /**
         * Select one of the items
         *
         * @param item The item to select {String}
         */
        selectItem(item: String): void;

        /**
         * Refresh the renderers
         */
        refreshRenderers(): void;

        /**
         * Set layout and pass event listener to it
         *
         * @name GOWN.List#layout
         * @type LayoutAlignment
         */
        layout: GOWN.layout.LayoutAlignment;

        /**
         * Set item renderer properties (e.g. labelField) and update all itemRenderer
         *
         * @name GOWN.List#itemRendererProperties
         * @type Object
         */
        itemRendererProperties: Object;

        /**
         * Set item renderer factory (for custom item Renderer)
         *
         * @name GOWN.List#itemRendererFactory
         * @type function
         */
        itemRendererFactory: Function;

        /**
         * Allow/disallow multiple selection.
         * If selection has been disallowed, deselect all but one.
         *
         * @name GOWN.List#allowMultipleSelection
         * @type bool
         */
        allowMultipleSelection: Boolean;

        /**
         * The index of the selected item
         *
         * @name GOWN.List#selectedIndex
         * @type Number
         */
        selectedIndex: Number;

        /**
         * dataProvider for list.
         * The dataProvider is a structure that provides the data.
         * In its simplest form it is an array containing the data
         *
         * @name GOWN.List#dataProvider
         * @type Array
         */
        dataProvider: [];

        // TODO: selectedItem
    }

    class PickerList extends GOWN.Control {
        /**
         * PickerList allows the user to select an option from a list
         *
         * @class PickerList
         * @extends GOWN.Control
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the picker list {GOWN.Theme}
         */
        constructor(theme?: GOWN.Theme): void;

        /**
         * Default picker list skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'picker_list';

        /**
         * Opens the pop-up list, if it isn't already open.
         */
        openList(): void;

        /**
         * Closes the pop-up list, if it is open.
         */
        closeList(): void;

        /**
         * Set item renderer factory for the GOWN.List
         *
         * @name GOWN.PickerList#itemRendererFactory
         * @type function
         */
        itemRendererFactory: Function;

        /**
         * Set the data provider for the GOWN.List
         *
         * @name GOWN.PickerList#dataProvider
         * @type Array
         */
        dataProvider: [];

        /**
         * Set item renderer properties for the GOWN.List
         *
         * @name GOWN.List#itemRendererProperties
         * @type Object
         */
        itemRendererProperties: Object;

        /**
         * Destroy button and list and remove button listeners
         */
        destroy(): void;
        // TODO: setter/getter for List to get selectedItem
        // TODO: prompt
        // TODO: PopupManager (!)
    }

    class Radio extends GOWN.ToggleButton {
        /**
         * A toggleable control that exists in a set that requires a single, exclusive toggled item.
         *
         * @class Radio
         * @extends GOWN.ToggleButton
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the radio button {GOWN.Theme}
         * @param [skinName=Radio.SKIN_NAME] name of the radio button skin {String}
         */
        constructor(theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Default radio button skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'radio';

        /**
         * Set the toggle group and add this radio button to it
         *
         * @name GOWN.Radio#label
         * @type String
         */
        toggleGroup: String;
    }

    class Scrollable extends GOWN.Skinable {
        /**
         * A scrollabe control provides a thumb that can be be moved along a fixed track.
         * This is the common ground for ScrollBar and Slider
         *
         * @class Scrollable
         * @extends GOWN.Skinable
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the radio button {GOWN.Theme}
         */
        // TODO: remove setting value (value manipulation is for Slider only)
        constructor(theme?: GOWN.Theme): void;

        /**
         * In desktop mode mouse wheel support is added (default)
         *
         * @static
         * @final
         * @type String
         */
        static DESKTOP_MODE: String = 'desktop';

        /**
         * Show horizontal scrollbar/slider
         *
         * @static
         * @final
         * @type String
         */
        static HORIZONTAL: String = 'horizontal';

        /**
         * In mobile mode mouse wheel support is disabled
         *
         * @static
         * @final
         * @type String
         */
        static MOBILE_MODE: String = 'mobile';

        /**
         * Show vertical scrollbar/slider
         *
         * @static
         * @final
         * @type String
         */
        static VERTICAL: String = 'vertical';

        /**
         * The scrollable direction
         * 
         * @name GOWN.Scrollable#direction
         * @type String
         * @default Scrollable.HORIZONTAL
         */
        direction: String = Scrollable.HORIZONTAL;

        /**
         * Inverse the progress bar
         *
         * @name GOWN.Scrollable#inverse
         * @type Boolean
         */
        inverse: Boolean;

        /**
         * Set maximum and update value if necessary
         *
         * @name GOWN.Scrollable#maximum
         * @type Number
         * @default 100
         */
        maximum: Number = 100;

        /**
         * Set minimum and update value if necessary
         *
         * @name GOWN.Scrollable#minimum
         * @type Number
         * @default 0
         */
        minimum: Number = 0;

        /**
         * The scrollable mode
         * 
         * @name GOWN.Scrollable#mode
         * @type String
         * @default Scrollable.DESKTOP_MODE
         */
        mode: String = Scrollable.DESKTOP_MODE;

        /**
         * Number of pixels you scroll at a time (if the event delta is 1 / -1)
         * 
         * @name GOWN.Scrollable#scrolldelta
         * @type Number
         * @default 10
         */
        scrolldelta: Number = 10;

        /**
         * Set value (between minimum and maximum)
         *
         * @name GOWN.Scrollable#value
         * @type Number
         * @default 0
         */
        value: Number = 0;

        /**
         * Returns the max. height in pixel
         * (normally this.height - thumb height)
         *
         * @returns {Number}
         */
        maxHeight(): Number;

        /**
         * Returns the max. width in pixel
         * (normally this.width - thumb width)
         *
         * @returns {Number}
         */
        maxWidth(): Number;

        /**
         * Move the thumb on the scroll bar within its bounds
         *
         * @param x New x position of the thumb {Number}
         * @param y New y position of the thumb {Number}
         * @returns {boolean} Returns true if the position of the thumb has been
         * moved
         */
        moveThumb(x: Number, y: Number): Boolean;

        /**
         * Calculate value of slider based on the current pixel position of the thumb
         *
         * @param position current pixel position of the thumb {Number}
         * @returns {Number} Value between minimum and maximum
         */
        pixelToValue(position: Number): Number;

        /**
         * Position the thumb to a given value
         *
         * @param value The value to which the thumb gets moved {Number}
         */
        positionThumb(value: Number): void;

        /**
         * Scroll to a specific position (not implemented yet)
         */
        scrollToPosition(): void;

        /**
         * Thumb has new x/y position
         *
         * @param x x-position that has been scrolled to (ignored when vertical) {Number}
         * @param y y-position that has been scrolled to (ignored when horizontal) {Number}
         */
        thumbMoved(x: Number, y: Number): void;

        /**
         * Calculate current pixel position of thumb based on given value
         *
         * @param value The value of the thumb position {Number}
         * @returns {Number} Position of the scroll thumb in pixel
         */
        valueToPixel(value: Number): Number;
    }

    class ScrollBar extends GOWN.Scrollable {
        /**
         * Scroll bar with thumb
         * hosting some Viewport (e.g. a ScrollContainer or a Texture)
         *
         * @class ScrollBar
         * @extends GOWN.Scrollable
         * @memberof GOWN
         * @constructor
         * @param [direction=Scrollable.HORIZONTAL] Direction of the scroll bar (horizontal/vertical) {String}
         * @param [theme] theme for the scrollbar {GOWN.Theme}
         */
        constructor(direction?: String, theme?: GOWN.Theme): void;

        /**
         * Default scroll bar skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'scroll_bar';

        /**
         * The minimum thumb width
         *
         * @type Number
         * @default 20
         */
        minThumbWidth: Number = 20;

        /**
         * The minimum thumb height
         *
         * @type Number
         * @default 20
         */
        minThumbHeight: Number = 20;
    }

    class ScrollContainer extends GOWN.Scroller {
        /**
         * ScrollContainer (not implemented yet)
         *
         * @class ScrollContainer
         * @extends GOWN.Scroller
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the scroll container {GOWN.Theme}
         */
        constructor(theme?: GOWN.Theme): void;
    }

    class Scroller extends GOWN.Control {
        /**
         * Allows horizontal and vertical scrolling of a view port.
         * Not meant to be used as a standalone container or component.
         * Generally meant to be the super class of another component that needs to
         * support scrolling.
         * To put components in a generic scrollable container (with optional layout),
         * see ScrollContainer. To scroll long passages of text, see ScrollText.
         *
         * @class Scroller
         * @extends GOWN.Control
         * @memberof GOWN
         * @constructor
         */
        constructor(theme?: GOWN.Theme): void;

        /**
         * The scroller may scroll if the view port is larger than the
         * scroller's bounds. Only than the scroll bar will be visible.
         */
        static readonly SCROLL_POLICY_AUTO = 'auto';

        /**
         * The scroller will always scroll, the scroll bar will always be visible.
         */
        static readonly SCROLL_POLICY_ON = 'on';

        /**
         * The scroller does not scroll at all, the scroll bar will never be visible.
         */
        static readonly SCROLL_POLICY_OFF = 'off';

        /**
         * The user may touch anywhere on the scroller and drag to scroll. The
         * scroll bars will be visual indicator of position, but they will not
         * be interactive.
         */
        static readonly INTERACTION_TOUCH = 'touch';

        /**
         * Allow touch and use the Scrollbars
         */
        static readonly INTERACTION_TOUCH_AND_SCROLL_BARS = 'touchAndScrollBars';

        /**
         * The user may only interact with the scroll bars to scroll.
         */
        static readonly INTERACTION_MOUSE = "scrollBars";
        static readonly INTERACTION_SCROLL_BARS = 'scrollBars';

        static readonly HELPER_POINT = new PIXI.Point(0, 0);
        static readonly INVALIDATION_FLAG_SCROLL_BAR_RENDERER = 'scrollBarRenderer';
        static readonly INVALIDATION_FLAG_PENDING_SCROLL = 'pendingScroll';
        static readonly INVALIDATION_FLAG_PENDING_REVEAL_SCROLL_BARS = 'pendingRevealScrollBars';
        static readonly SCROLL_BAR_DISPLAY_MODE_FLOAT = 'float';
        static readonly SCROLL_BAR_DISPLAY_MODE_FIXED = 'fixed';
        static readonly SCROLL_BAR_DISPLAY_MODE_FIXED_FLOAT = 'fixedFloat';
        static readonly SCROLL_BAR_DISPLAY_MODE_NONE = 'none';
        static readonly VERTICAL_SCROLL_BAR_POSITION_RIGHT = 'right';
        static readonly VERTICAL_SCROLL_BAR_POSITION_LEFT = 'left';
        static readonly INTERACTION_MODE_TOUCH = 'touch';
        static readonly INTERACTION_MODE_MOUSE = 'mouse';
        static readonly INTERACTION_MODE_TOUCH_AND_SCROLL_BARS = 'touchAndScrollBars';
        static readonly MOUSE_WHEEL_SCROLL_DIRECTION_VERTICAL = 'vertical';
        static readonly MOUSE_WHEEL_SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
        static readonly INVALIDATION_FLAG_CLIPPING = 'clipping';
        static readonly MINIMUM_VELOCITY = 0.02;
        static readonly CURRENT_VELOCITY_WEIGHT = 2.33;
        static readonly VELOCITY_WEIGHTS = [1, 1.33, 1.66, 2];
        static readonly MAXIMUM_SAVED_VELOCITY_COUNT = 4;
        static readonly DECELERATION_RATE_NORMAL = 0.998;
        static readonly DECELERATION_RATE_FAST = 0.99;
        // static DEFAULT_CHILD_STYLE_NAME_HORIZONTAL_SCROLL_BAR = 'scroller-horizontal-scroll-bar';
        // static DEFAULT_CHILD_STYLE_NAME_VERTICAL_SCROLL_BAR = 'scroller-vertical-scroll-bar';
        static readonly FUZZY_PAGE_SIZE_PADDING = 0.000001;
        static readonly PAGE_INDEX_EPSILON = 0.01;

        /**
         * change horizontal scroll position.
         * (will update x position of viewport next redraw)
         */
        horizontalScrollPosition: Number;

        /**
         * change vertical scroll position.
         * (will update y position of viewport next redraw)
         */
        verticalScrollPosition: Number;

        /**
         * us a mask to clip content
         */
        interactionMode: String;

        /**
         * us a mask to clip the content.
         */
        clipContent;

        /**
         * set the viewport. This is the content you'd like to scroll.
         */
        viewPort;

        /**
         * change scrollbar factory
         */
        horizontalScrollBarFactory;

        /**
         * change scrollbar factory
         */
        verticalScrollBarFactory;

        measureViewPort;

        snapToPages;

        horizontalScrollStep;

        horizontalPageIndex: Number;

        horizontalScrollPolicy: Number;

        verticalScrollStep;

        verticalPageIndex: Number;

        verticalScrollPolicy: Number;

        pageWidth: Number;

        pageHeight: Number;

        padding: Number;

        pageThrowDuration: Number;

        scrollToPageIndex(horizontalPageIndex, verticalPageIndex, animationDuration): void;

        refreshInteractionModeEvents(): void;

        onDown(event): void;

        onUp(): void;

        onMove(event): void;

        checkForDrag(currentTouch): void;
        /**
         * update before draw call
         *
        
         */
        redraw(): void;

        updateHorizontalScrollFromTouchPosition(touchX: Number, isScrollBar: Boolean): void;

        updateVerticalScrollFromTouchPosition(touchY: Number, isScrollBar: Boolean): void;

        startScroll(): void;

        stopScrolling(): void;

        scrollToPosition(horizontalScrollPosition, verticalScrollPosition, animationDuration: Number): void;

        handlePendingScroll(): void;

        completeScroll(): void;

        refreshEnabled(): void;

        refreshScrollValues(): void;

        refreshPageCount(): void;

        clampScrollPositions(): void;

        refreshScrollSteps(): void;

        refreshMinAndMaxScrollPositions(): void;

        showOrHideChildren(): void;

        calculateViewPortOffsetsForFixedVerticalScrollBar(forceScrollBars, useActualBounds): void;

        calculateViewPortOffsets(forceScrollBars: Boolean, useActualBounds: Boolean): void;

        throwToPage(targetHorizontalPageIndex, targetVerticalPageIndex, duration): void;

        horizontalScrollBarHideTweenOnComplete(): void;

        verticalScrollBarHideTweenOnComplete(): void;

        scrollerEnterFrameHandler(): void;

        /**
         * update the rectangle that defines the clipping area
         */
        refreshMask(): void;

        /**
         * Creates and adds the <code>horizontalScrollBar</code> and
         * <code>verticalScrollBar</code> sub-components and removes the old
         * instances, if they exist.
         *
         * <p>Meant for internal use, and subclasses may override this function
         * with a custom implementation.</p>
         *
         * @see #horizontalScrollBar
         * @see #verticalScrollBar
         * @see #horizontalScrollBarFactory
         * @see #verticalScrollBarFactory
         */
        createScrollBars(): void;

        defaultScrollBarFactory(direction): void;

        revealHorizontalScrollBar(): void;

        revealVerticalScrollBar(): void;

        hideHorizontalScrollBar(): void;

        hideVerticalScrollBar(): void;

        throwHorizontally(pixelsPerMS): void;

        throwVertically(pixelsPerMS): void;

        /**
         * manage tween to throw to horizontal or vertical position
         * call finishScrolling when tween reaches the end position
         *
         * @param targetPosition {number} target position in pixel
         * @param direction {String} direction ('horizontal' or 'vertical')
         * @param duration {number} time needed to reach target position (in ms)
         */
        _throwToTween(targetPosition, direction, duration): void;

        /**
         * throw the scroller to the specified position
         * @param targetHorizontalScrollPosition as PIXI.Point
         * @param targetVerticalScrollPosition as PIXI.Point
         * @param duration
         */
        //TODO: see https://github.com/BowlerHatLLC/feathers/blob/master/source/feathers/controls/Scroller.as#L4939
        throwTo(targetHorizontalScrollPosition, targetVerticalScrollPosition, duration): void;

        direction(): void;
    }

    class ScrollThumb extends GOWN.Button {
        /**
         * Thumb button that can be moved on the scrollbar
         *
         * @class ScrollThumb
         * @extends GOWN.Button
         * @memberof GOWN
         * @constructor
         * @param scrollable The scrollable that the scroll thumb belongs to {GOWN.Scrollable}
         * @param [theme] theme for the scroll thumb {GOWN.Theme}
         * @param [skinName=ScrollThumb.SKIN_NAME] name of the scroll thumb skin {String}
         */
        constructor(scrollable: GOWN.Scrollable, theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Default scroll thumb skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'scroll_thumb';

        /**
         * Show track icon on thumb
         *
         * @param skin The new scroll thumb skin name {String}
         */
        showTrack(skin: String): void;

        /**
         * Move the thumb on the scroll bar within its bounds
         *
         * @param x New calculated x position of the thumb {Number}
         * @param y New calculated y position of the thumb {Number}
         * @returns {boolean} returns true if the position of the thumb has been
         * moved
         */
        move(x: Number, y: Number): Boolean;
    }

    class Slider extends GOWN.Scrollable {
        /**
         * Simple slider with min. and max. value
         *
         * @class Slider
         * @extends GOWN.Scrollable
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the slider {GOWN.Theme}
         */
        // TODO: move stuff from Scrollable back here?
        constructor(theme?: GOWN.Theme): void;

        /**
         * Default slider skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME = 'scroll_bar';
    }

    class TextInput extends GOWN.InputControl {
        /**
         * The basic Text Input - based on PIXI.Input.
         * Input by Sebastian Nette, see https://github.com/SebastianNette/PIXI.Input
         *
         * @class TextInput
         * @extends GOWN.InputControl
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the text input {GOWN.Theme}
         * @param [skinName=TextInput.SKIN_NAME] name of the text input skin {String}
         */
        constructor(theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Default text area skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'text_input';

        /**
         * Set display as password (show text with "*")
         *
         * @name GOWN.TextInput#displayAsPassword
         * @type bool
         */
        displayAsPassword: Boolean;

        /**
         * Get the text lines as an array
         *
         * @returns {Array|*} Returns an array with one text line per array element
         */
        getLines(): [] | any;

        /**
         * Set the text
         *
         * @param text The text to display {String}
         */
        setText(text: String): void;

        // TODO: autoSizeIfNeeded
    }

    class TextArea extends GOWN.InputControl {
        /**
         * A text entry control that allows users to enter and edit multiple lines of
         * uniformly-formatted text with the ability to scroll.
         *
         * @class TextInput
         * @extends GOWN.InputControl
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the text area {GOWN.Theme}
         * @param [skinName=TextArea.SKIN_NAME] name of the text area skin {String}
         */
        constructor(theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Default text area skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'text_input';

        /**
         * Calculate position in Text
         */

        /**
         * Calculate position in Text
         *
         * @param textPos Position in the text {Number}
         * @param [position] Position object that gets returned {PIXI.Point}
         * @returns {PIXI.Point} returns the Line and Position in line
         */
        textToLinePos(textPos: Number, position): PIXI.Point;

        /**
         * Get the text lines as an array
         *
         * @returns {Array|*} Returns an array with one text line per array element
         */
        getLines(): [] | any;
    }

    class ToggleButton extends GOWN.Button {
        /**
         * Basic button that has a selected state which indicates if the button
         * is pressed or not.
         *
         * @class ToggleButton
         * @extends GOWN.Button
         * @memberof GOWN
         * @constructor
         */
        constructor(theme?: GOWN.Theme, skinName?: String): void;

        /**
         * Dispatched when the button is selected or deselected either
         * programmatically or as a result of user interaction.The value of the
         * <code>selected</code> property indicates whether the button is selected.
         * or not.
         *
         * @static
         * @final
         * @type String
         */
        static readonly CHANGE: String = 'change';

        /**
        * Selected down state: mouse button is pressed or finger touches the screen + the toggle button is selected
        *
        * @static
        * @final
        * @type String
        */
        static readonly SELECTED_DOWN: String = 'selected_down';

        /**
         * Selected hover state: mouse pointer hovers over the button + the toggle button is selected
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static readonly SELECTED_HOVER: String = 'selected_hover';

        /**
         * Selected up state: mouse button is released or finger is removed from the screen + the toggle button is selected
         *
         * @static
         * @final
         * @type String
         */
        static readonly SELECTED_UP: String = 'selected_up';

        /**
         * Default toggle button skin name
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_NAME: String = 'toggle_button';

        /**
         * Indicate if the button is selected (pressed)
         *
         * @name GOWN.ToggleButton#selected
         * @type Boolean
         * @default false
         */
        selected: Boolean = false;

        /**
         * Toggle the state
         */
        toggle(): void;
    }

    class ToggleGroup extends EventEmitter {
        /**
         * Controls the selection of two or more toggles
         * (RadioButtons/ToggleButton/Check instances)
         * where only one may be selected at a time
         *
         * @class ToggleGroup
         * @extends EventEmitter
         * @memberof GOWN
         * @constructor
         */
        constructor(): void;

        /**
         * Dispatched when the toggle group selection changes.
         *
         * @static
         * @final
         * @type String
         */
        static readonly CHANGE: String = 'change';

        /**
        * Determines if the user can deselect the currently selected item or not.
        *
        * @name GOWN.ToggleGroup#isSelectionRequired
        * @type bool
        * @default true
        */
        isSelectionRequired: Boolean = true;

        /**
         * The index of the currently selected toggle.
         *
         * @name GOWN.ToggleGroup#selectedIndex
         * @type Number
         */
        selectedIndex: Number;

        /**
         * The currently selected toggle
         *
         * @name GOWN.ToggleGroup#selectedItem
         * @type GOWN.ToggleButton
         */
        selectedItem: GOWN.ToggleButton;

        /**
         * Add an toggle to the toggle group
         *
         * @param item The toggle to add to the toggle group {GOWN.ToggleButton}
         */
        addItem(item: GOWN.ToggleButton): void;

        /**
         * Remove an toggle from the toggle group
         *
         * @param item The toggle to add to the toggle group {GOWN.ToggleButton}
         */
        removeItem(item: GOWN.ToggleButton)

        /**
         * Remove all event listener, clear items-list and set selectedItem to null.
         */
        destroy(): void;
    }

    class ListCollection extends EventEmitter {
        /**
         * Used to handle data manipulation (emit events when data changes, so for
         *  example a List showing it can be updated and the user does not need to
         *  call a special update function every time he adds/removes data from the
         *  ListCollection.
         * Use the ListCollection functions to manipulate the data-array OR modify it
         * using the default array-functions and dispatch the CHANGED-Event yourself.
         *
         * @class ListCollection
         * @extends EventEmitter
         * @memberof GOWN
         * @constructor
         * @param [data] The data source {Array}
         */
        constructor(data: []): void;

        /**
         * Dispatched when the list data gets changed.
         *
         * @static
         * @final
         * @type String
         */
        static readonly CHANGED: String = 'changed';

        /**
         * Dispatched when the list gets cleared.
         *
         * @static
         * @final
         * @type String
         */
        static readonly RESET: String = 'reset';

        /**
         * Dispatched when a list item gets removed from the list.
         *
         * @static
         * @final
         * @type String
         */
        static readonly REMOVE_ITEM: String = 'removeItem';

        /**
         * Dispatched when a list item gets replaced.
         *
         * @static
         * @final
         * @type String
         */
        static readonly REPLACE_ITEM: String = 'replaceItem';

        /**
         * Dispatched when an item gets added to the list.
         *
         * @static
         * @final
         * @type String
         */
        static readonly ADD_ITEM: String = 'addItem';

        /**
         * The data source for this collection. Has to be an array.
         *
         * @name GOWN.ListCollection#data
         * @type Array
         */
        data: [];

        /**
         * The length of the list
         *
         * @name GOWN.ListCollection#length
         * @type Number
         * @readonly
         */
        readonly length: Number;

        /**
         * Add a new item between index and index+1
         *
         * @param item The new item {Object}
         * @param index The index where the item gets inserted {Number}
         */
        addItemAt(item: Object, index: Number): void;

        /**
         * Checks if an item is in the list
         *
         * @param item The item to check {Object}
         * @returns {boolean} True if the item is in the list, otherwise false
         */
        contains(item: Object): Boolean;

        /**
         * Get an item at a specific index
         *
         * @param index The index to get the item from {Number}
         * @returns {Object} The item at the specific index
         */
        getItemAt(index: Number): Object;

        /**
         * Get the index of a list item
         *
         * @param item The list item {Object}
         * @returns {Number} The item index
         */
        getItemIndex(item: Object): Number;

        /**
         * Pop the last item from the last
         */
        pop(): void;

        /**
         * Push an item on the list at the last position
         *
         * @param item The item to push {Object}
         */
        push(item: Object): void;

        /**
         * Removes all items from the list
         *
         * @param item
         */
        removeAll(item: Object): void;

        /**
         * Removes an item from the list
         *
         * @param item The item to remove {Object}
         */
        removeItem(item: Object): void;

        /**
         * Removes the item at the specific index from the collection and
         * returns it.
         *
         * @param index The item index {Number}
         * @returns {Object}
         */
        removeItemAt(index: Number): Object;

        /**
         * Set an item at a specific index
         *
         * @param item The item that gets added {Object}
         * @param index The index where the item gets set {Number}
         */
        setItemAt(item: Object, index: Number): void;

        /**
         * Remove the item at the front of the list
         */
        shift(): void;

        /**
         * Add an item to the front of the list
         *
         * @param item The item to add {Object}
         */
        unshift(item: Object): void;
    }

    class DefaultListItemRenderer extends GOWN.ToggleButton {
        /**
         * The default list item renderer.
         *
         * @class DefaultListItemRenderer
         * @extends GOWN.ToggleButton
         * @memberof GOWN
         * @constructor
         * @param [theme] theme for the DefaultListItemRenderer {GOWN.Theme}
         */
        constructor(theme?: GOWN.Theme): void;

        /**
         * Data
         *
         * @name GOWN.DefaultListItemRenderer#data
         */
        data;

        /**
         * A key in the item data that will be shown as label for the item. e.g. 'text' for item.text. will be ignored if labelFunction is set. the item will be shown directly (using toString) if labelField and labelFunction are not set.
         * 
         * @name GOWN.DefaultListItemRenderer#labelField
         * @type String
         * @default "text"
         */
        labelField: String = "text";

        /**
         * A function used to generate label text for a specific item. If this function is not null, then the labelField will be ignored.
         * In the following example, the label function is customized:
         * renderer.labelFunction = function( item ) { return item.firstName + " " + item.lastName; };
         * 
         * @name GOWN.DefaultListItemRenderer#labelFunction
         * @type Function
         * @default null
         */
        labelFunction: Function = null;


        // performance increase to avoid using call.. (10x faster)
        redrawButton;

        /**
         * Updates the renderer to display the item's data. Override this
         * function to pass data to sub-components and react to data changes.
         *
         * <p>Don't forget to handle the case where the data is <code>null</code>.</p>
         */
        commitData(): void;

        /**
         * Using <code>labelField</code> and <code>labelFunction</code>,
         * generates a label from the item.
         *
         * <p>All of the label fields and functions, ordered by priority:</p>
         * <ol>
         *     <li><code>labelFunction</code></li>
         *     <li><code>labelField</code></li>
         * </ol>
         *
         * @param item the item that gets converted to a label
         */
        itemToLabel(item): void;

        /**
         * Update button text before draw call
         */
        redraw(): void;
    }

    class Theme {
        /**
         * Basic theming/skinning.
         *
         * @class Theme
         * @memberof GOWN
         * @constructor
         * @param [global=true] Set theme as the global GOWN.theme
         */
        constructor(global: Boolean = true): void;

        /**
         * Dispatched when a skin has changed
         *
         * @static
         * @final
         * @type String
         */
        static readonly SKIN_CHANGED: String = 'skin_changed';

        /**
         * Dispatched when a theme texture has loaded
         *
         * @static
         * @final
         * @type String
         */
        static readonly LOADED: String = 'loaded';

        /**
         * Dispatched when a theme texture has been loaded and all controls have an assigned skin
         *
         * @static
         * @final
         * @type String
         */
        static readonly COMPLETE: String = 'complete';

        /**
         * Shortcut to remove the theme from the global context
         */
        static removeTheme();

        /**
         * Desktop themes have a hover skin if the mouse moves over the button
         *
         * @name GOWN.Theme#hoverSkin
         * @type Boolean
         * @default true
         */
        hoverSkin: Boolean = true;

        /**
         * The default font for all labels (e.g. button label)
         * 
         * @name GOWN.Theme#textStyle
         * @type GOWN.ThemeFont
         */
        textStyle: GOWN.ThemeFont;

        /**
         * The cache for the theme textures
         * 
         * @name GOWN.Theme#textureCache
         * @type PIXI.Texture[]
         */
        textureCache: PIXI.Texture[];

        /**
         * Use an own skin for scroll/slider track (uses the default button skin otherwise)
         * 
         * @name GOWN.Theme#thumbSkin
         * @type Boolean
         */
        thumbSkin: Boolean = true;

        /**
         * Set up the asset loader and load files
         *
         * @param jsonPath The path to the json file {String}
         */
        addImage(jsonPath: String): void;

        /**
         * Apply the theme to the controls
         * (normally executed only once after the texture has been loaded)
         */
        applyTheme(): void;

        /**
         * Create a new Sprite from an image name
         *
         * @param name Id defined in the asset loader {String}
         * @returns {function}
         */
        getImage(name: String): Function;

        /**
         * Create a new Scalable Container
         *
         * @param name Id defined in the asset loader {String}
         * @param grid Grid defining the inner square of the scalable container {PIXI.Rectangle}
         * @param [middleWidth] The alternative width to crop the center piece
         * (only needed if we want to scale the image smaller than the original) {Number}
         * @param [centerHeight] The alternative height to crop the center piece
         * (only needed if we want to scale the image smaller than the original) {Number}
         * @return {Function}
         */
        getScaleContainer(name: String, grid: PIXI.Rectangle, middleWidth: Number, centerHeight: Number): void;

        /**
         * Get a skin by a component name and state (or type)
         *
         * @param comp Name of the component (e.g. button) {String}
         * @param state State or type of the skin (e.g. "up") {String}
         * @returns {PIXI.DisplayObject}
         */
        getSkin(comp: String, state: String): PIXI.DisplayObject;

        /**
         * Executed when the image has been loaded.
         * Sets cache and emits events.
         *
         * @see addImage
         * @see resource-loader https://github.com/englercj/resource-loader
         *
         * @param loader The loader {Loader}
         * @param resources The loaded resources {Object}
         */
        loadComplete(loader: PIXI.loaders.Loader, resources: Object): void;

        /**
         * Set the texture cache (normally called when loading is complete)
         *
         * @param resources The loaded resources {Object}
         */
        setCache(resources: Object): void;

        /**
         * Set the skin for a UI component
         *
         * @param comp UI component that we want to skin, e.g. "button" {String}
         * @param id Id for the skin (e.g. state when the skinning function will be applied {String}
         * @param skin skin-function that will executed once the component gets updated {function}
         */
        setSkin(comp: String, id: String, skin: Function): void;
    }

    class ThemeFont {
        /**
         * Font theme
         *
         * @class ThemeFont
         * @memberof GOWN
         * @constructor
         * @param data The font style object {Object}
         */
        constructor(data: Object): void;

        /**
         * Clone the ThemeFont instance
         *
         * @return {GOWN.ThemeFont} The cloned font theme
         */
        clone(): GOWN.ThemeFont;

        /**
         * Instead of setting font using fontFamily and fontSize is encouraged
         *
         * @name GOWN.ThemeFont#font
         * @type String
         * @deprecated
         */
        font: String;

        /**
         * The font size
         *
         * @name GOWN.ThemeFont#fontSize
         * @type Number
         * @default 12
         */
        fontSize: Number = 12;

        /**
         * The font family
         *
         * @name GOWN.ThemeFont#fontFamily
         * @type String
         * @default 'Arial'
         */
        fontFamily: String = 'Arial';
    }

    class ThemeParser extends GOWN.Theme {
        /**
         * Load a theme from a .json file.
         *
         * @class Theme
         * @extends GOWN.Theme
         * @memberof GOWN
         * @constructor
         * @param jsonPath The path to the .json file {String}
         * @param [global=true] Set theme as the global GOWN.theme {bool}
         */
        constructor(jsonPath: String, global: Boolean): void;

        //TODO
        DATA_LOADED: String = 'data_loaded';

        /**
         * Adds the theme data located at the specified path
         *
         * @param jsonPath The path the .json file
         */
        addThemeData(jsonPath: String): void;

        /**
         * Get the scale9 grid data from the theme data
         *
         * @param scale Rectangle position and size {Number[]}
         * @return {PIXI.Rectangle}
         */
        getScale9(scale: Number[]): PIXI.Rectangle;

        /**
         * Get the component classes that can create skins (in general all GOWN.shapes).
         * Note that image textures are not components
         *
         * @return Object
         */
        getSkinComponents(): Object;

        /**
         * Create a dictionary containing the skin data (including default values)
         *
         * @param stateName The name of the current state (e.g. GOWN.Button.UP) {String}
         * @param skinData The data gathered from previous runs {String}
         * @param data The new data that will be copied into skinData {Object}
         */
        getSkinData(stateName: String, skinData: String, data: Object): void;

        /**
         * Executed when the image has been loaded.
         * Sets cache and and applies the theme.
         *
         * @see addImage
         * @see resource-loader https://github.com/englercj/resource-loader
         *
         * @param loader The loader {Loader}
         * @param resources The loaded resources {Object}
         */
        loadComplete(loader: PIXI.loaders.Loader, resources: Object): void;

        /**
         * Parse the theme data
         *
         * @param data The theme data {Object}
         */
        parseData(data: Object): void;

        /**
         * Create a new skin from the theme data
         *
         * @param skinData The skin data {Object}
         * @param data The theme data {Object}
         * @returns {function} the skin function
         */
        skinFromData(skinData: Object, data: Object): Function;
    }

    class ResizeManager extends EventEmitter {
        /**
         * The resize manager deals with changes in the Application size
         * e.g. if the browser window has been resized because the keyboard is shown
         * or the device has been rotated on mobile or the user resized it on the
         * desktop with his mouse.
         *
         * @class
         * @extends EventEmitter
         * @memberof GOWN.interaction
         * @param renderer A reference to the current renderer {PIXI.CanvasRenderer|PIXI.WebGLRenderer}
         * @param [options] {object}
         * @param [options.autoPreventDefault=true] Should the manager automatically prevent default browser actions. {boolean}
         * @param [options.fullscreen=false] Should we use the whole browser width/height (window.innerHeight/Width). {boolean}
         */
        // TODO: orientation change for cordova and cocoon ('orientationchange' and Cocoon.Device.getOrientation())
        // TODO: take a look at phaser ScaleManager - see https://github.com/photonstorm/phaser/blob/v2.4.2/src/core/ScaleManager.js
        // TODO: check single Canvas-DOM-Element, not only whole window (see https://github.com/marcj/css-element-queries )
        constructor(renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer, options?: { autoPreventDefault?: Boolean = true, fullscreen?: Boolean = false }): void;

        /**
        * The waiting time after the resize event before updating
        * (prevent the canvas from flickering when resizing)
        *
        * @static
        * @final
        * @type String
        */
        static readonly RESIZE_DONE_TIMEOUT: String = 100;

        /**
         * Should default browser actions automatically be prevented.
         * 
         * @name GOWN.ResizeManager#autoPreventDefault
         * @type Boolean
         */
        autoPreventDefault: Boolean = true;

        /**
         * TODO:
         */
        element

        /**
         * Should we use the whole browser width/height (window.innerHeight/Width)
         * 
         * @name GOWN.ResizeManager#fullscreen
         * @type Boolean
         */
        fullscreen: Boolean = false;

        /**
         * The renderer this interaction manager works for.
         * 
         * @name GOWN.ResizeManager#renderer
         * @type PIXI.SystemRenderer
         */
        renderer: PIXI.SystemRenderer;

        /**
         * Time to wait after every resize event to prevent flickering
         * 
         * @name GOWN.ResizeManager#resizeTimeout
         * @type Number
         */
        resizeTimeout: Number = 0;

        /**
         * Should the resize manager wait after every resize event
         * 
         * @name GOWN.ResizeManager#useResizeDoneTimeout
         * @type Boolean
         * @default true
         */
        useResizeDoneTimeout: Boolean = true;

        /**
        * Remove events and listener etc.
        */
        destroy(): void;

        /**
        * Traverse through the scene graph to call given function on all displayObjects
        * that are resizable
        *
        * @param displayObject the displayObject that will be resized (recursivly crawls its children)
        * {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite}
        * @param [func] the function that will be called on each resizable object. The displayObject will be passed to the function {Function}
        */
        processInteractive(displayObject: PIXI.DisplayObject, func?: Function): void;
    }

    class KeyboardManager extends EventEmitter {
        /**
         * The keyboard manager deals with key events. Any DisplayObject can be interactive
         * if its interactive parameter is set to true (similar to the InteractionManager
         * in PIXI)
         *
         * @class
         * @extends EventEmitter
         * @memberof GOWN.interaction
         * @param renderer A reference to the current renderer {PIXI.CanvasRenderer|PIXI.WebGLRenderer}
         * @param [options] {object}
         * @param [options.autoPreventDefault=false] {boolean} Should the manager automatically prevent default browser actions.
         */
        // TODO (maybe): move this to an own external lib for PIXI-Keyboard interaction
        // TODO: show keyboard in Cocoon.io - see Cocoon.Dialog.showKeyboard
        constructor(renderer: PIXI.CanvasRenderer | PIXI.WebGLRenderer, options?: { autoPreventDefault?: Boolean = false }): void;

        /**
         * Should default browser actions automatically be prevented.
         * 
         * @name GOWN.KeyboardManager#autoPreventDefault
         * @type Boolean
         * @default false;
         */
        autoPreventDefault: Boolean = false;

        /**
         * An event data object to handle all the event tracking/dispatching
         * 
         * @name GOWN.KeyboardManager#eventData
         * @type Object
         */
        eventData: Object;

        /**
         * The renderer this interaction manager works for.
         * 
         * @name GOWN.KeyboardManager#renderer
         * @type PIXI.SystemRenderer
         */
        renderer: PIXI.SystemRenderer;

        /**
         * Remove events and listener etc.
         */
        destroy(): void;

        /**
         * Traverse through the scene graph to call the given function on all displayObjects
         * that can receive keys
         *
         * @param displayObject The displayObject that will be resized (recurcsivly crawls its children)
         * {PIXI.Container|PIXI.Sprite|PIXI.extras.TilingSprite}
         * @param [func] The function that will be called on each resizable object.
         * The displayObject will be passed to the function {Function}
         */
        processInteractive(displayObject: PIXI.DisplayObject, func?: Function): void;
    }

    /**
     * Utility functions
     */
    namespace utils {
        function itemDimensions(item): void;

        /**
         * Utility functions to position an element relative to its parent
         *
         * @namespace GOWN.utils.position
         */
        namespace position {
            /**
             * Center an element on the parent vertically
             *
             * @memberOf GOWN.utils.position
             * @param elem The element {PIXI.Container}
             * @param [parent] The parent {PIXI.Container}
             */
            function centerVertical(elem: PIXI.Container, parent?: PIXI.Container): void;

            /**
             * Center an element on the parent horizontally
             *
             * @memberOf GOWN.utils.position
             * @param elem The element {PIXI.Container}
             * @param [parent] The parent {PIXI.Container}
             */
            function centerHorizontal(elem: PIXI.Container, parent?: PIXI.Container): void;

            /**
             * Center an element on the parent
             *
             * @memberOf GOWN.utils.position
             * @param elem The element {PIXI.Container}
             * @param [parent] The parent {PIXI.Container}
             */
            function center(elem: PIXI.Container, parent?: PIXI.Container): void;

            /**
             * Put an element to the bottom of its parent
             *
             * @memberOf GOWN.utils.position
             * @param elem The element {PIXI.Container}
             * @param [parent] The parent {PIXI.Container}
             */
            function bottom(elem: PIXI.Container, parent?: PIXI.Container): void;

            /**
             * Put an element to the right of its parent.
             *
             * @memberOf GOWN.utils.position
             * @param elem The element {PIXI.Container}
             * @param [parent] The parent {PIXI.Container}
             */
            function right(elem: PIXI.Container, parent?: PIXI.Container)
        }

        class ScaleContainer extends PIXI.Container {
            /**
             * Scale 9 Container.
             * e.g. useful for scalable buttons.
             *
             * @class ScaleContainer
             * @extends PIXI.Container
             * @memberof GOWN
             * @constructor
             * @param texture The PIXI texture {PIXI.Texture}
             * @param rect The rectangle with position and dimensions of the center piece.
             * Will be used to calculate positions of all other pieces {PIXI.Rectangle}
             * @param [middleWidth] The alternative width to crop the center piece
             * (only needed if we want to scale the image smaller than the original) {Number}
             * @param [centerHeight] The alternative height to crop the center piece
             * (only needed if we want to scale the image smaller than the original) {Number}
             */
            constructor(texture: PIXI.Texture, rect: PIXI.Rectangle, middleWidth?: Number, centerHeight?: Number): void;

            /**
             * The base texture of the scale container
             * 
             * @name GOWN.ScaleContainer#baseTexture
             * @type PIXI.BaseTexture
             */
            baseTexture: PIXI.BaseTexture;

            /**
             * The bottom left sprite
             * 
             * @name GOWN.ScaleContainer#bl
             * @type PIXI.Sprite
             */
            bl: PIXI.Sprite;

            /**
             * The bottom middle sprite
             * 
             * @name GOWN.ScaleContainer#bm
             * @type PIXI.Sprite
             */
            bm: PIXI.Sprite;

            /**
             * The bottom right sprite
             * 
             * @name GOWN.ScaleContainer#br
             * @type PIXI.Sprite
             */
            br: PIXI.Sprite;

            /**
             * The center left sprite
             * 
             * @name GOWN.ScaleContainer#cl
             * @type PIXI.Sprite
             */
            cl: PIXI.Sprite;

            /**
             * The center middle sprite
             * 
             * @name GOWN.ScaleContainer#cm
             * @type PIXI.Sprite
             */
            cm: PIXI.Sprite;

            /**
             * The center right sprite
             * 
             * @name GOWN.ScaleContainer#cr
             * @type PIXI.Sprite
             */
            cr: PIXI.Sprite;

            /**
             * The frame of the scale container
             * 
             * @name GOWN.ScaleContainer#frame
             * @type PIXI.Rectangle
             */
            frame: PIXI.Rectangle;

            /**
             * Calculated min. height based on tile sizes in pixel without scaling (if middleWidth is not set it is the same as the height of the texture in the atlas)
             * 
             * @name GOWN.ScaleContainer#minHeight
             * @type Number
             */
            minHeight: Number;

            /**
             * Calculated min. width based on tile sizes in pixel without scaling (if middleWidth is not set it is the same as the width of the texture in the atlas)
             * 
             * @name GOWN.ScaleContainer#minWidth
             * @type Number
             */
            minWidth: Number;

            /**
             * The rectangle with position and dimensions of the center piece. Will be used to calculate positions of all other pieces.
             * 
             * @name GOWN.ScaleContainer#rect
             * @type PIXI.Rectangle
             */
            rect: PIXI.Rectangle;

            /**
             * The top left sprite
             * 
             * @name GOWN.ScaleContainer#tl
             * @type PIXI.Sprite
             */
            tl: PIXI.Sprite;

            /**
             * The top middle sprite
             * 
             * @name GOWN.ScaleContainer#tm
             * @type PIXI.Sprite
             */
            tm: PIXI.Sprite;

            /**
             * The top right sprite
             * 
             * @name GOWN.ScaleContainer#tr
             * @type PIXI.Sprite
             */
            tr: PIXI.Sprite;

            /**
             * Helper function that creates a sprite that will contain a texture from
             * the TextureCache based on the frameId.
             * The frame ids are created when a Texture packer file has been loaded
             *
             * @param frameId The frame id of the texture in the cache {String}
             * @param rect Defines the tilable area {Rectangle}
             * @return {GOWN.ScaleContainer} A new scalable container (e.g. a button)
             * using a texture from the texture cache matching the frameId
             */
            fromFrame(frameId, rect): GOWN.utils.ScaleContainer;
        }

        function SliderData(): void;

        class Tween {
            /**
             * A wrapper around PIXI.tween OR CreateJS/TweenJS to do animations/tweening,
             * for example for a List or a Scroller.
             *
             * @see GOWN.Scroller#throwTo
             *
             * @constructor
             * @memberof GOWN
             * @param target The tween target {Object}
             * @param duration The tween duration {Number}
             * @param [easing='linear'] The easing function name {String}
             * @param [type] The tween library {String}
             */
            //TODO: support greensock?
            constructor(target: Object, duration: Number, easing: String, type: String): void;

            /**
             * The PIXI tween type
             *
             * @static
             * @final
             * @type String
             */
            static readonly PIXI_TWEEN: String = 'PIXI_TWEEN';

            /**
             * The CreateJS tween type
             *
             * @static
             * @final
             * @type String
             */
            static readonly CREATEJS_TWEEN: String = 'CREATEJS_TWEEN';

            /**
             * No tween type
             *
             * @static
             * @final
             * @type String
             */
            static readonly NONE: String = 'NONE';

            // TODO: possible alternative: create own easing data type
            // e.g. (in, out, inout and type)

            /**
             * Get the specific CreateJS easing function (e.g. 'linear' or 'quadIn')
             *
             * @param ease The name of the CreateJS easing function {String}
             * @return {function}
             */
            static readonly CREATEJS_EASING(ease: String): Function;

            /**
             * Get the specific PIXI easing function
             *
             * @param ease The name of the PIXI easing function {String}
             * @return {function}
             */
            static readonly PIXI_EASING(ease: String): Function;

            /**
             * The tween duration
             * 
             * @name GOWN.utils.Tween#duration
             * @type Number;
             */
            duration: Number;

            /**
            * The easing function name
            * 
            * @name GOWN.utils.Tween#easing
            * @type String;
            */
            easing: String = "linnear";

            /**
             * The tween library
             * 
             * @name GOWN.utils.Tween#type
             * @type String;
             */
            type: String;

            /**
             * A helper function to check if a tweening-library is present
             *
             * @return {String} Name of the tweening-library
             */
            checkLibrary(): String;

            /**
             * Create a tween
             *
             * @param target The tween target {Object}
             * @param duration The tween duration {Number}
             * @param easing The easing function name {String}
             */
            createTween(target: Object, duration: Number, easing: String): void;

            /**
             * Start the tween
             *
             * @param data The tween data {Object}
             */
            to(data: Object): void;

            /**
             * Stop the tween
             */
            remove(): void;
        }

        /**
         *
         *
         * @namespace GOWN.utils.resizeScaling
         */
        namespace resizeScaling {
            /**
             * @member GOWN.utils.resizeScaling.defineProperty
             */
            class defineProperty { width; height };

            /**
            * This should be called from inside the constructor
            *
            * @function GOWN.utils.resizeScaling.initResizeScaling
            */
            function initResizeScaling(): void;

            /**
             * Update before draw call.
             * Redraw control for current state from theme
             *
             * @function GOWN.utils.resizeScaling.redraw
             */
            function redraw(): void;

            /**
             * @function GOWN.utils.resizeScaling.updateDimensions
             */
            function updateDimensions(): void;

            /**
             * @function GOWN.utils.resizeScaling.updateTransform
             */
            function updateTransform(): void;
        }

        /**
         * Rounds a number to a certain level of precision. Useful for limiting the number of
         * decimal places on a fractional number.
         *
         * @see Math#round
         *
         * @function GOWN.utils.roundToPrecision
         * @param number The input number to round {Number}
         * @param precision The number of decimal digits to keep {Number}
         * @return {Number} The rounded number, or the original input if no rounding is needed
         */
        function roundToPrecision(number: Number, precision: Number): void;

        /**
         * Rounds a Number to the nearest multiple of an input. For example, by rounding
         * 16 to the nearest 10, you will receive 20. Similar to the built-in function Math.round().
         *
         * @see Math#round
         *
         * @function GOWN.utils.roundToNearest
         * @param number The number to round {Number}
         * @param nearest The number whose multiple must be found {Number}
         * @return {Number} The rounded number
         */
        function roundToNearest(number: Number, nearest: Number): void;

        /**
         * Rounds a Number <em>down</em> to the nearest multiple of an input. For example, by rounding
         * 16 down to the nearest 10, you will receive 10. Similar to the built-in function Math.floor().
         *
         * @see Math#floor
         *
         * @function GOWN.utils.roundDownToNearest
         * @param number The number to round down {Number}
         * @param nearest The number whose multiple must be found {Number}
         * @return {Number} The rounded number
         */
        function roundDownToNearest(number: Number, nearest: Number): void;

        /**
         * Rounds a Number <em>up</em> to the nearest multiple of an input. For example, by rounding
         * 16 up to the nearest 10, you will receive 20. Similar to the built-in function Math.ceil().
         *
         * @see Math#ceil
         *
         * @function GOWN.utils.roundUpToNearest
         * @param number The number to round up {Number}
         * @param nearest The number whose multiple must be found {Number}
         * @return {Number} The rounded number
         */
        function roundUpToNearest(number: Number, nearest: Number): void;

        /**
         * Mixin utility
         *
         * @function GOWN.utils.mixin
         * @param destination Destination object {Object}
         * @param source Source object{Object}
         * @return {Object}
         */
        function mixin(destination: Object, source: Object): void;
    }


    class Control extends PIXI.Container {
        /**
         * Base for all UI controls.
         *
         * Based on pixi-DisplayContainer that supports adding children, so all
         * controls are container.
         * @class Control
         * @extends PIXI.Container
         * @memberof GOWN
         * @constructor
         */
        constructor(): void

        /**
         * Enables/Disables the control.
         * (not implemented yet)
         *
         * @name GOWN.Control#enabled
         * @type Boolean
         */
        enabled: Boolean;

        /**
         * Get the local mouse position from PIXI.InteractionData
         *
         * @returns {PIXI.Point}
         */
        mousePos(e): PIXI.Point;

        /**
         * Change the theme (every control can have a theme, even if it does not
         * inherit Skinable, e.g. if there is only some color in the skin that will
         * be taken or if it has some skinable components as children)
         *
         * @param theme the new theme {GOWN.Theme}
         */
        setTheme(theme: GOWN.Theme): void;
    }

    class Skinable extends GOWN.Control {
        /**
         * Control with a managed skin
         * (e.g. a button that has different skins for up/hover/down states)
         *
         * @class Skinable
         * @extends GOWN.Control
         * @memberof GOWN
         * @constructor
         * @param [theme=GOWN.theme] theme for the skinable {GOWN.Theme}
         */
        constructor(theme: GOWN.Theme): void

        /**
         * Will destroy the skin cache when the skinable gets destroyed
         * 
         * @name GOWN.Skinable#allowDestroyCache
         * @type Boolean
         * @default true
         */
        allowDestroyCache: Boolean = true;

        /**
         * The fallback skin if the other skin does not exist (e.g. if a mobile theme
         * that does not provide a "hover" state is used on a desktop system)
         * (normally the default "up"-state skin)
         *
         * @name GOWN.Skinable#skinFallback
         * @type String
         * @default 'up'
         */
        skinFallback: String;

        /**
         * Change the skin name.
         * You normally set the skin name as constant in your control, but if you
         * want you can set another skin name to change skins for single components
         * at runtime.
         *
         * @name GOWN.Skinable#skinName
         * @type String
         */
        skinName: String;

        /**
         * Remove old skin and add new one
         *
         * @param skin {DisplayObject}
         */
        changeSkin(skin: PIXI.DisplayObject): void;

        /**
         * Destroy the Skinable and empty the skin cache
         */
        destroy(): void;

        /**
         * Get image from skin (will execute a callback with the loaded skin
         * when it is loaded or call it directly when it already is loaded)
         *
         * @param name name of the state {String}
         * @param callback callback that is executed if the skin is loaded {function}
         */
        fromSkin(name: String, callback: Function): void;

        /**
         * Initiate all skins first
         */
        preloadSkins(): void;

        /**
         * Overwrite data from theme for this specific component.
         * (usable if you want to change e.g. background color based on selected items)
         *
         * @param data updated skin data
         */
        updateTheme(data): void;
    }
}