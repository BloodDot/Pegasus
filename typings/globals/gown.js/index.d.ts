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
        class Layout {
            /**
             * Basic layout stub - see GOWN.LayoutAlignment
             *
             * @class Layout
             * @memberof GOWN.layout
             * @constructor
             */
            constructor();

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
            layout(items: [], viewPortBounds);
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
            constructor();

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
            applyFixedPercent(items: [], explicit: Number, alignment: String);

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
            applyPercent(items: [], explicit: Number);

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
            constructor();

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
            constructor();

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
            constructor();

            /**
             * Orientation by rows
             *
             * @static
             * @final
             * @type String
             */
            ORIENTATION_ROWS = 'rows';

            /**
             * Orientation by columns
             *
             * @static
             * @final
             * @type String
             */
            ORIENTATION_COLUMNS = 'columns';

            /**
             * If an item height is smaller than the height of a tile, the item will
             * be aligned to the top edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_VERTICAL_ALIGN_TOP = 'top';

            /**
             * If an item height is smaller than the height of a tile, the item will
             * be aligned to the middle of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_VERTICAL_ALIGN_MIDDLE = 'middle';

            /**
             * If an item height is smaller than the height of a tile, the item will
             * be aligned to the bottom edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_VERTICAL_ALIGN_BOTTOM = 'bottom';

            /**
             * The item will be resized to fit the height of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_VERTICAL_ALIGN_JUSTIFY = 'justify';

            /**
             * If an item width is smaller than the width of a tile, the item will
             * be aligned to the left edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_HORIZONTAL_ALIGN_LEFT = 'left';

            /**
             * If an item width is smaller than the width of a tile, the item will
             * be aligned to the center of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_HORIZONTAL_ALIGN_CENTER = 'center';

            /**
             * If an item width is smaller than the width of a tile, the item will
             * be aligned to the right edge of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_HORIZONTAL_ALIGN_RIGHT = 'right';

            /**
             * The item will be resized to fit the width of the tile.
             *
             * @static
             * @final
             * @type String
             */
            TILE_HORIZONTAL_ALIGN_JUSTIFY = 'justify';

            /**
             * The items will be positioned in pages horizontally from left to right.
             *
             * @static
             * @final
             * @type String
             */
            PAGING_HORIZONTAL = 'horizontal';

            /**
             * The items will be positioned in pages vertically from top to bottom.
             *
             * @static
             * @final
             * @type String
             */
            PAGING_VERTICAL = 'vertical';

            /**
             * The items will not be positioned in pages.
             *
             * @static
             * @final
             * @type String
             */
            PAGING_NONE = 'none';

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
            constructor();

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
            constructor();

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
        constructor(config?: { backgroundColor }, screenMode?: String = Application.SCREEN_MODE_RESIZE, parentId?: String, width?: Number = 800, height?: Number = 600, renderer?: PIXI.WebGLRenderer | PIXI.CanvasRenderer = PIXI.autoDetectRenderer(), stage?: PIXI.Container = new PIXI.Container());

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
         * Enables/Disables the control. (not implemented yet)
         */
        enabled: Boolean;

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
        animate();

        /**
         * Clean application: remove event listener, free memory
         * (can also remove the canvas from the DOM tree if wanted)
         *
         * @param [destroyChildren=false] {boolean} if set to true, all the children will have their destroy method called as well
         * @param [removeCanvas=true] {boolean} destroys the canvas and remove it from the dom tree
         */
        destroy(destroyChildren?: Boolean = false, removeCanvas?: Boolean = true);

        /**
         * Redraw scene, apply layout if required
         */
        redraw();

        /**
         * called when the browser window / the application is resized will set the dimensions of the canvas and layout children (if it has a layout)
         */
        onResize();
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
        constructor(text: String, theme?: GOWN.Theme, skinName?: String = SKIN_NAME);

        /**
         * Hover state
         *
         * @static
         * @final
         * @type String
         */
        static readonly HOVER_CONTAINER: String = 'hoverContainer';

        /**
         * Click state
         *
         * @static
         * @final
         * @type String
         */
        static readonly CLICKED: String = 'clicked';

        /**
         * Create a new suggestion item
         *
         * @param text Text of the suggestion item {String}
         * @param width Width of the suggestion item {Number}
         * @param height Height of the suggestion item {Number}
         * @returns {PIXI.Container}
         * @private
         */
        createSuggestionItem(text: String, width: Number, height: Number): PIXI.Container;

        /**
         * Draw the results
         *
         * @param text Text to filter the source elements {String}
         */
        drawResults(text: String);

        /**
         * Close results and set the text
         *
         * @param text Display text {String}
         */
        selectResultElement(text: String): String;

        /**
         * Close the results
         */
        toggleResults();

        /**
         * Update the hover result element
         * @param elementText
         */
        hoverResultElement(elementText);

        /**
         * Remove the hover result element
         */
        removeHoverResultElement();

        /**
         * Redraw the results
         */
        redrawResult();


        /**
         * Set the auto complete text. Draws the auto complete results afterwards.
         *
         * @param text The text to set {String}
         */
        setText(text: String);

        /**
         * Source elements from which the auto complete filters the elements corresponding to the current text
         *
         * @name GOWN.AutoComplete#source
         * @type String[]
         * @default []
         */
        source: String[] = [];


        /**
         * Result elements (source elements filtered by the text attribute)
         *
         * @name GOWN.AutoComplete#results
         * @type String[]
         * @default []
         */
        results: String[] = [];

        /**
         * The minimum number of entered characters required to draw suggestions.
         *
         * @name GOWN.AutoComplete#minAutoCompleteLength
         * @type Number
         * @default 2
         */
        minAutoCompleteLength: Number = 2;

        /**
         * The maximum number of suggestions that show at one time.
         * If 0, all suggestions will be shown.
         *
         * @name GOWN.AutoComplete#limitTo
         * @type Number
         * @default 5
         */
        limitTo: Number = 5;
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
        constructor(theme?: GOWN.Theme, skinName?: String);

        /**
         * Default button skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'button';

        /**
         * Up state: mouse button is released or finger is removed from the screen
         *
         * @static
         * @final
         * @type String
         */
        static UP: String = 'up';

        /**
         * Down state: mouse button is pressed or finger touches the screen
         *
         * @static
         * @final
         * @type String
         */
        static DOWN: String = 'down';

        /**
         * Hover state: mouse pointer hovers over the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static HOVER: String = 'hover';

        /**
         * Out state: mouse pointer leaves the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static OUT: String = 'out';

        /**
         * Dispatched when the button is triggered.
         *
         * @static
         * @final
         * @type String
         */
        static TRIGGERED: String = 'triggered';

        /**
         * Change the theme
         *
         * @param theme the new theme {GOWN.Theme}
         */
        setTheme(theme: GOWN.Theme);

        /**
         * The current state
         *
         * @name GOWN.Button#currentState
         * @type String
         */
        currentState: String;

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
        constructor(theme?: GOWN.Theme, skinName?: String);

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
        constructor(theme?: GOWN.Theme);

        /**
         * Up state: mouse button is released or finger is removed from the screen
         *
         * @static
         * @final
         * @type String
         */
        static UP: String = 'up';

        /**
         * Down state: mouse button is pressed or finger touches the screen
         *
         * @static
         * @final
         * @type String
         */
        static DOWN: String = 'down';

        /**
         * Hover state: mouse pointer hovers over the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static HOVER: String = 'hover';

        /**
         * Hover state: mouse pointer hovers over the button
         * (ignored on mobile)
         *
         * @static
         * @final
         * @type String
         */
        static OUT: String = 'out';

        /**
         * Currently selected input control (used for tab index)
         *
         * @static
         * @type GOWN.InputControl
         */
        static currentInput = null;

        /**
         * Move the cursor left
         */
        moveCursorLeft();

        /**
         * Move the cursor right
         */
        moveCursorRight();

        /**
         * Insert a char at the current cursor position
         *
         * @param char The char that gets inserted {String}
         */
        insertChar(char: String);

        /**
         * Delete the selected text
         */
        deleteSelection();

        /**
         * Delete text from a start position to an end position
         *
         * @param fromPos start position {Number}
         * @param toPos end position {Number}
         * @returns {String}
         */
        deleteText(fromPos: Number, toPos: Number): String;

        /**
         * Change the theme
         *
         * @param theme the new theme {GOWN.Theme}
         */
        setTheme(theme: GOWN.Theme);

        /**
         * Set the input control text.
         *
         * @param text The text to set {String}
         */
        setText(text: String);

        /**
         * Set the selected text
         *
         * @param start Start position in the text {Number}
         * @param end End position in the text {Number}
         * @returns {boolean}
         */
        updateSelection(start: Number, end: Number): Boolean;

        /**
         * Get the width of a text
         *
         * @param text The text to get the width from {String}
         * @returns {Number}
         */
        textWidth(text: String): Number;

        /**
         * Focus on this input and set it as current
         */
        focus();

        /**
         * Blur the text input (remove focus)
         */
        blur();

        /**
         * Set the cursor position on the text
         */
        setCursorPos();

        /**
         * Height of the line in pixel
         * (assume that every character of pixi text has the same line height)
         *
         * @returns {Number}
         */
        lineHeight(): Number;

        /**
         * From position in the text to pixel position
         * (for cursor/selection positioning)
         *
         * @param textPos Current character position in the text {Number}
         * @param [position] point that will be set with the pixel position and returned {PIXI.Point}
         * @returns {PIXI.Point} Pixel position
         */
        textToPixelPos(textPos: Number, position: PIXI.Point): PIXI.Point;

        /**
         * From pixel position on the text to character position inside the text
         * (used when clicked on the text)
         *
         * @param pixelPos Pixel position of the mouse on the text
         * @returns {Number} Position in the text
         */
        pixelToTextPos(pixelPos): Number;

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
         * Determine if the input has the focus
         *
         * @name GOWN.InputControl#hasFocus
         * @type bool
         * @default false
         */
        hasFocus: Boolean = false;

        /**
         * Set the text style (size, font etc.) for text and cursor
         *
         * @name GOWN.InputControl#style
         * @type PIXI.TextStyle
         */
        style: PIXI.TextStyle;

        /**
         * The current state
         * TODO: move to skinable?
         *
         * @name GOWN.InputControl#currentState
         * @type String
         * @default InputControl.UP
         */
        currentState: String = InputControl.UP;
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
        constructor(layout: GOWN.LayoutAlignment, maxWidth: Number, maxHeight: Number);

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
        addSpacer(space: Number);

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
        childIsRenderAble(child: PIXI.DisplayObject, x: Number, y: Number, width: Number, height: Number);

        /**
         * Update renderable (culling of non visible objects)
         *
         * @param x X-position on the scroll-container {Number}
         * @param y Y-position on the scroll-container {Number}
         * @param width width of the viewport {Number}
         * @param height height of the viewport {Number}
         */
        updateRenderable(x: Number, y: Number, width: Number, height: Number);

        /**
         * The width of the group, will get the position and the width of the right child.
         *
         * @name GOWN.LayoutGroup#width
         * @type Number
         */
        width: Number;

        /**
         * The height of the group, will get the position and the height of the bottom child.
         *
         * @name GOWN.LayoutGroup#height
         * @type Number
         */
        height: Number;
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
        constructor(theme?: GOWN.Theme);

        /**
         * Default list skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'list';

        /**
         * Dispatched when the selected item changes.
         *
         * @static
         * @final
         * @type String
         */
        static CHANGE: String = 'change';

        /**
         * Select one of the items
         *
         * @param item The item to select {String}
         */
        selectItem(item: String);

        /**
         * Refresh the renderers
         */
        refreshRenderers();

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
        constructor(theme?: GOWN.Theme);

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
        openList();

        /**
         * Closes the pop-up list, if it is open.
         */
        closeList();

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
        destroy();
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
        constructor(theme?: GOWN.Theme, skinName?: String);

        /**
         * Default radio button skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'radio';

        /**
         * Set the toggle group and add this radio button to it
         *
         * @name GOWN.Radio#label
         * @type String
         */
        toggleGroup: String;
    }

    class Scrollable {
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
        constructor(theme?: GOWN.Theme);

        /**
         * In desktop mode mouse wheel support is added (default)
         *
         * @static
         * @final
         * @type String
         */
        static DESKTOP_MODE: String = 'desktop';

        /**
         * In mobile mode mouse wheel support is disabled
         *
         * @static
         * @final
         * @type String
         */
        static MOBILE_MODE: String = 'mobile';

        /**
         * Show horizontal scrollbar/slider
         *
         * @static
         * @final
         * @type String
         */
        static HORIZONTAL: String = 'horizontal';

        /**
         * Show vertical scrollbar/slider
         *
         * @static
         * @final
         * @type String
         */
        static VERTICAL: String = 'vertical';

        /**
         * Scroll to a specific position (not implemented yet)
         */
        scrollToPosition();

        /**
         * Thumb has new x/y position
         *
         * @param x x-position that has been scrolled to (ignored when vertical) {Number}
         * @param y y-position that has been scrolled to (ignored when horizontal) {Number}
         */
        thumbMoved(x: Number, y: Number);

        /**
         * Returns the max. width in pixel
         * (normally this.width - thumb width)
         *
         * @returns {Number}
         */
        maxWidth(): Number;

        /**
         * Returns the max. height in pixel
         * (normally this.height - thumb height)
         *
         * @returns {Number}
         */
        maxHeight(): Number;

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
         * Calculate current pixel position of thumb based on given value
         *
         * @param value The value of the thumb position {Number}
         * @returns {Number} Position of the scroll thumb in pixel
         */
        valueToPixel(value: Number): Number;

        /**
         * Position the thumb to a given value
         *
         * @param value The value to which the thumb gets moved {Number}
         */
        positionThumb(value: Number);

        /**
         * The width of the Scrollable, setting this will redraw the track and thumb.
         *
         * @name GOWN.Scrollable#width
         * @type Number
         */
        width: Number;

        /**
         * Inverse the progress bar
         *
         * @name GOWN.Scrollable#inverse
         * @type Boolean
         */
        inverse: Boolean;

        /**
         * The height of the Scrollable, setting this will redraw the track and thumb.
         *
         * @name GOWN.Scrollable#height
         * @type Number
         */
        height: Number;

        /**
         * Set value (between minimum and maximum)
         *
         * @name GOWN.Scrollable#value
         * @type Number
         * @default 0
         */
        value: Number = 0;

        /**
         * Set minimum and update value if necessary
         *
         * @name GOWN.Scrollable#minimum
         * @type Number
         * @default 0
         */
        minimum: Number = 0;

        /**
         * Set maximum and update value if necessary
         *
         * @name GOWN.Scrollable#maximum
         * @type Number
         * @default 100
         */
        maximum: Number = 100;
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
        constructor(direction?: String, theme?: GOWN.Theme);

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

        /**
         * Default scroll bar skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'scroll_bar';

        /**
         * Thumb has been moved. Scroll content to position
         *
         * @param x x-position to scroll to (ignored when vertical)
         * @param y y-position to scroll to (ignored when horizontal)
         */
        thumbMoved(x: Number, y: Number);

        /**
         * Determines if the scroll bar's thumb can be dragged horizontally or
         * vertically.
         *
         * @name GOWN.ScrollBar#direction
         * @type String
         */
        direction: String;

        /**
         * Value of the scrollbar
         *
         * @name GOWN.ScrollBar#value
         * @type Number
         */
        //TODO: put in Scrollable
        value: Number;
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
        constructor(theme?: GOWN.Theme);
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
        constructor(theme?: GOWN.Theme);

        /**
         * The scroller may scroll if the view port is larger than the
         * scroller's bounds. Only than the scroll bar will be visible.
         */
        static SCROLL_POLICY_AUTO = 'auto';

        /**
         * The scroller will always scroll, the scroll bar will always be visible.
         */
        static SCROLL_POLICY_ON = 'on';

        /**
         * The scroller does not scroll at all, the scroll bar will never be visible.
         */
        static SCROLL_POLICY_OFF = 'off';

        /**
         * The user may touch anywhere on the scroller and drag to scroll. The
         * scroll bars will be visual indicator of position, but they will not
         * be interactive.
         */
        static INTERACTION_TOUCH = 'touch';

        /**
         * Allow touch and use the Scrollbars
         */
        static INTERACTION_TOUCH_AND_SCROLL_BARS = 'touchAndScrollBars';

        /**
         * The user may only interact with the scroll bars to scroll.
         */
        static INTERACTION_MOUSE = "scrollBars";
        static INTERACTION_SCROLL_BARS = 'scrollBars';

        static HELPER_POINT = new PIXI.Point(0, 0);
        static INVALIDATION_FLAG_SCROLL_BAR_RENDERER = 'scrollBarRenderer';
        static INVALIDATION_FLAG_PENDING_SCROLL = 'pendingScroll';
        static INVALIDATION_FLAG_PENDING_REVEAL_SCROLL_BARS = 'pendingRevealScrollBars';
        static SCROLL_BAR_DISPLAY_MODE_FLOAT = 'float';
        static SCROLL_BAR_DISPLAY_MODE_FIXED = 'fixed';
        static SCROLL_BAR_DISPLAY_MODE_FIXED_FLOAT = 'fixedFloat';
        static SCROLL_BAR_DISPLAY_MODE_NONE = 'none';
        static VERTICAL_SCROLL_BAR_POSITION_RIGHT = 'right';
        static VERTICAL_SCROLL_BAR_POSITION_LEFT = 'left';
        static INTERACTION_MODE_TOUCH = 'touch';
        static INTERACTION_MODE_MOUSE = 'mouse';
        static INTERACTION_MODE_TOUCH_AND_SCROLL_BARS = 'touchAndScrollBars';
        static MOUSE_WHEEL_SCROLL_DIRECTION_VERTICAL = 'vertical';
        static MOUSE_WHEEL_SCROLL_DIRECTION_HORIZONTAL = 'horizontal';
        static INVALIDATION_FLAG_CLIPPING = 'clipping';
        static MINIMUM_VELOCITY = 0.02;
        static CURRENT_VELOCITY_WEIGHT = 2.33;
        static VELOCITY_WEIGHTS = [1, 1.33, 1.66, 2];
        static MAXIMUM_SAVED_VELOCITY_COUNT = 4;
        static DECELERATION_RATE_NORMAL = 0.998;
        static DECELERATION_RATE_FAST = 0.99;
        // static DEFAULT_CHILD_STYLE_NAME_HORIZONTAL_SCROLL_BAR = 'scroller-horizontal-scroll-bar';
        // static DEFAULT_CHILD_STYLE_NAME_VERTICAL_SCROLL_BAR = 'scroller-vertical-scroll-bar';
        static FUZZY_PAGE_SIZE_PADDING = 0.000001;
        static PAGE_INDEX_EPSILON = 0.01;

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

        scrollToPageIndex(horizontalPageIndex, verticalPageIndex, animationDuration);

        refreshInteractionModeEvents();

        onDown(event);

        onUp();

        onMove(event);

        checkForDrag(currentTouch);
        /**
         * update before draw call
         *
        
         */
        redraw();

        updateHorizontalScrollFromTouchPosition(touchX: Number, isScrollBar: Boolean);

        updateVerticalScrollFromTouchPosition(touchY: Number, isScrollBar: Boolean);

        startScroll();

        stopScrolling();

        scrollToPosition(horizontalScrollPosition, verticalScrollPosition, animationDuration: Number);

        handlePendingScroll();

        completeScroll();

        refreshEnabled();

        refreshScrollValues();

        refreshPageCount();

        clampScrollPositions();

        refreshScrollSteps();

        refreshMinAndMaxScrollPositions();

        showOrHideChildren();

        calculateViewPortOffsetsForFixedVerticalScrollBar(forceScrollBars, useActualBounds);

        calculateViewPortOffsets(forceScrollBars: Boolean, useActualBounds: Boolean);

        throwToPage(targetHorizontalPageIndex, targetVerticalPageIndex, duration);

        horizontalScrollBarHideTweenOnComplete();

        verticalScrollBarHideTweenOnComplete();

        scrollerEnterFrameHandler();

        /**
         * update the rectangle that defines the clipping area
         */
        refreshMask();

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
        createScrollBars();

        defaultScrollBarFactory(direction);

        revealHorizontalScrollBar();

        revealVerticalScrollBar();

        hideHorizontalScrollBar();

        hideVerticalScrollBar();

        throwHorizontally(pixelsPerMS);

        throwVertically(pixelsPerMS);

        /**
         * manage tween to throw to horizontal or vertical position
         * call finishScrolling when tween reaches the end position
         *
         * @param targetPosition {number} target position in pixel
         * @param direction {String} direction ('horizontal' or 'vertical')
         * @param duration {number} time needed to reach target position (in ms)
         */
        _throwToTween(targetPosition, direction, duration);

        /**
         * throw the scroller to the specified position
         * @param targetHorizontalScrollPosition as PIXI.Point
         * @param targetVerticalScrollPosition as PIXI.Point
         * @param duration
         */
        //TODO: see https://github.com/BowlerHatLLC/feathers/blob/master/source/feathers/controls/Scroller.as#L4939
        throwTo(targetHorizontalScrollPosition, targetVerticalScrollPosition, duration);

        direction();
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
        constructor(scrollable: GOWN.Scrollable, theme?: GOWN.Theme, skinName?: String);

        /**
         * Default scroll thumb skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME: String = 'scroll_thumb';

        /**
         * The current state (one of _validStates)
         *
         * @name GOWN.ScrollThumb#currentState
         * @type String
         */
        currentState;



        /**
         * Show track icon on thumb
         *
         * @param skin The new scroll thumb skin name {String}
         */
        showTrack(skin: String);

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

    class Slider {
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
        constructor(theme?: GOWN.Theme);

        /**
         * Default slider skin name
         *
         * @static
         * @final
         * @type String
         */
        static SKIN_NAME = 'scroll_bar';
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
            function bottom(elem: PIXI.Container, parent?: PIXI.Container);
            /**
             * Center an element on the parent
             * @param elem The element
             * @param parent The parent
             */
            function center(elem: PIXI.Container, parent?: PIXI.Container);
            /**
             * Center an element on the parent horizontally
             * @param elem The element
             * @param parent The parent
             */
            function centerHorizontal(elem: PIXI.Container, parent?: PIXI.Container);
            /**
             * Center an element on the parent vertically
             * @param elem The element
             * @param parent The parent
             */
            function centerVertical(elem: PIXI.Container, parent?: PIXI.Container);
            /**
             * Put an element to the right of its parent.
             * @param elem The element
             * @param parent The parent
             */
            function right(elem: PIXI.Container, parent?: PIXI.Container);
        }

        namespace resizeScaling {
            interface defineProperty {
                height: Number;
                width: Number;
            }
            /**
             * This should be called from inside the constructor
             */
            function initResizeScaling();
            /**
             * Update before draw call. Redraw control for current state from theme
             */
            function redraw();
            function updateDimensions();
            function updateTransform();
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

    /**
     * 
     */
    class Control extends PIXI.Container {
        enabled: Boolean;
        mousePos(): PIXI.Point;
        setTheme(theme: GOWN.theme);
    }
}