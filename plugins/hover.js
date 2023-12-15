app.plugins.add(
    "hover",
    {
        name: "Button Hover Styling",
        content: `
    <div class="input">
        <label>Margin</label>
        <input id="hover-margin" onchange="button.styleHoverInput(this, 'margin')" placeholder="top right bottom left" type="text">
    </div>
    <div class="input">
        <label>Padding</label>
        <input id="hover-padding" onchange="button.styleHoverInput(this, 'padding')" placeholder="top right bottom left" type="text">
    </div>
    <div class="input">
        <label>Box sizing</label>
        <select onchange="button.styleHoverInput(this, 'box-sizing')" id="hover-box-sizing">
            <option>content-box</option>
            <option>border-box</option>
        </select>
    </div>
    <hr>
    <div class="input">
        <label>Width</label>
        <input id="hover-width" onchange="button.styleHoverInput(this, 'width')" placeholder="Width" type="text">
    </div>
    <div class="input">
        <label>Minimum width</label>
        <input id="hover-min-width" onchange="button.styleHoverInput(this, 'min-width')" placeholder="min-width" type="text">
    </div>
    <div class="input">
        <label>Maximum width</label>
        <input id="hover-max-width" onchange="button.styleHoverInput(this, 'max-width')" placeholder="max-width" type="text">
    </div>
    <div class="input">
        <label>Height</label>
        <input id="hover-height" onchange="button.styleHoverInput(this, 'height')" placeholder="Height" type="text">
    </div>
    <div class="input">
        <label>Minimum height</label>
        <input id="hover-min-height" onchange="button.styleHoverInput(this, 'min-height')" placeholder="min-height" type="text">
    </div>
    <div class="input">
        <label>Maximum height</label>
        <input id="hover-max-height" onchange="button.styleHoverInput(this, 'max-height')" placeholder="max-height" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Color</label>
        <input id="hover-color" onchange="button.styleHoverInput(this, 'color')" placeholder="Font color" type="text">
    </div>
    <div class="input">
        <label>Font Size</label>
        <input id="hover-font-size" onchange="button.styleHoverInput(this, 'font-size')" placeholder="Font size" type="text">
    </div>
    <div class="input">
        <label>Font family</label>
        <input id="hover-font-family" onchange="button.styleHoverInput(this, 'font-family')" placeholder="Font family" type="text">
    </div>
    <div class="input">
        <label>Font kerning</label>
        <select onchange="button.styleHoverInput(this, 'font-kerning')" id="hover-font-kerning">
            <option>normal</option>
            <option>auto</option>
            <option>none</option>
        </select>
    </div>
    <div class="input">
        <label>Font weight</label>
        <select onchange="button.styleHoverInput(this, 'font-weight')" id="hover-font-weight">
            <option>normal</option>
            <option>bold</option>
            <option>bolder</option>
            <option>lighter</option>
            <option>100</option>
            <option>200</option>
            <option>300</option>
            <option>400</option>
            <option>500</option>
            <option>600</option>
            <option>700</option>
            <option>800</option>
            <option>900</option>
        </select>
    </div>
    <div class="input">
        <label>Font style</label>
        <select onchange="button.styleHoverInput(this, 'font-style')" id="hover-font-style">
            <option>normal</option>
            <option>italic</option>
            <option>oblique</option>
            <option>initial</option>
            <option>inherit</option>
        </select>
    </div>
    <div class="input">
        <label>Line height</label>
        <input id="hover-line-height" onchange="button.styleHoverInput(this, 'line-height')" placeholder="Line height" type="text">
    </div>
    <div class="input">
        <label>Text align</label>
        <input id="hover-text-align" onchange="button.styleHoverInput(this, 'text-align')" placeholder="Text align" type="text">
    </div>
    <div class="input">
        <label>Text decoration</label>
        <input id="hover-text-decoration" onchange="button.styleHoverInput(this, 'text-decoration')" placeholder="Text decoration" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Border</label>
        <input id="hover-border" onchange="button.styleHoverInput(this, 'border')" placeholder="Border" type="text">
    </div>
    <div class="input">
        <label>Border radius</label>
        <input id="hover-border-radius" onchange="button.styleHoverInput(this, 'border-radius')" placeholder="Border radius" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Outline</label>
        <input id="hover-outline" onchange="button.styleHoverInput(this, 'outline')" placeholder="outline" type="text">
    </div>
    <div class="input">
        <label>Outline offset</label>
        <input id="hover-outline-offset" onchange="button.styleHoverInput(this, 'outline-offset')" placeholder="outline offset" type="text">
    </div>
    <hr>
    <div class="input">
    <label>Background</label>
    <input id="hover-background" onchange="button.styleHoverInput(this, 'background')" placeholder="Background" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Box shadow</label>
        <input id="hover-box-shadow" onchange="button.styleHoverInput(this, 'box-shadow')" placeholder="box-shadow" type="text">
    </div>
    <!-- <div class="input">
        <label>Padding</label>
        <div>
            <input type="text">
            <input type="text">
            <input type="text">
            <input type="text">
        </div>
    </div> -->
    `,
        code: () => {
            input.vfsh(
                [
                    "#hover-margin",
                    "#hover-padding",
                    "#hover-box-sizing",
                    "#hover-width",
                    "#hover-min-width",
                    "#hover-max-width",
                    "#hover-height",
                    "#hover-min-height",
                    "#hover-max-height",
                    "#hover-color",
                    "#hover-font-size",
                    "#hover-font-family",
                    "#hover-font-kerning",
                    "#hover-font-weight",
                    "#hover-font-style",
                    "#hover-line-height",
                    "#hover-text-align",
                    "#hover-text-decoration",
                    "#hover-border",
                    "#hover-border-radius",
                    "#hover-outline",
                    "#hover-outline-offset",
                    "#hover-background",
                    "#hover-box-shadow",
                ],
                [
                    "margin",
                    "padding",
                    "box-sizing",
                    "width",
                    "min-width",
                    "max-width",
                    "height",
                    "min-height",
                    "max-height",
                    "color",
                    "font-size",
                    "font-family",
                    "font-kerning",
                    "font-weight",
                    "font-style",
                    "line-height",
                    "text-align",
                    "text-decoration",
                    "border",
                    "border-radius",
                    "outline",
                    "outline-offset",
                    "background",
                    "box-shadow",
                ]
            );
        },
    },
    true
);
