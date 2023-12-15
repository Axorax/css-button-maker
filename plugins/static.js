app.plugins.add(
    "static",
    {
        name: "Button Static Styling",
        content: `
    <div class="input">
        <label>Text</label>
        <input id="static-text" onchange="button.text(this.value)" placeholder="Text inside of button" type="text">
    </div>
    <div class="input">
        <label>Selector</label>
        <input id="static-selector" onchange="button.selector(this.value)" placeholder="Button selector" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Margin</label>
        <input id="static-margin" onchange="button.styleInput(this, 'margin')" placeholder="top right bottom left" type="text">
    </div>
    <div class="input">
        <label>Padding</label>
        <input id="static-padding" onchange="button.styleInput(this, 'padding')" placeholder="top right bottom left" type="text">
    </div>
    <div class="input">
        <label>Box sizing</label>
        <select onchange="button.styleInput(this, 'box-sizing')" id="static-box-sizing">
            <option>content-box</option>
            <option>border-box</option>
        </select>
    </div>
    <hr>
    <div class="input">
        <label>Width</label>
        <input id="static-width" onchange="button.styleInput(this, 'width')" placeholder="Width" type="text">
    </div>
    <div class="input">
        <label>Minimum width</label>
        <input id="static-min-width" onchange="button.styleInput(this, 'min-width')" placeholder="min-width" type="text">
    </div>
    <div class="input">
        <label>Maximum width</label>
        <input id="static-max-width" onchange="button.styleInput(this, 'max-width')" placeholder="max-width" type="text">
    </div>
    <div class="input">
        <label>Height</label>
        <input id="static-height" onchange="button.styleInput(this, 'height')" placeholder="Height" type="text">
    </div>
    <div class="input">
        <label>Minimum height</label>
        <input id="static-min-height" onchange="button.styleInput(this, 'min-height')" placeholder="min-height" type="text">
    </div>
    <div class="input">
        <label>Maximum height</label>
        <input id="static-max-height" onchange="button.styleInput(this, 'max-height')" placeholder="max-height" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Color</label>
        <input id="static-color" onchange="button.styleInput(this, 'color')" placeholder="Font color" type="text">
    </div>
    <div class="input">
        <label>Font Size</label>
        <input id="static-font-size" onchange="button.styleInput(this, 'font-size')" placeholder="Font size" type="text">
    </div>
    <div class="input">
        <label>Font family</label>
        <input id="static-font-family" onchange="button.styleInput(this, 'font-family')" placeholder="Font family" type="text">
    </div>
    <div class="input">
        <label>Font kerning</label>
        <select onchange="button.styleInput(this, 'font-kerning')" id="static-font-kerning">
            <option>normal</option>
            <option>auto</option>
            <option>none</option>
        </select>
    </div>
    <div class="input">
        <label>Font weight</label>
        <select onchange="button.styleInput(this, 'font-weight')" id="static-font-weight">
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
        <select onchange="button.styleInput(this, 'font-style')" id="static-font-style">
            <option>normal</option>
            <option>italic</option>
            <option>oblique</option>
            <option>initial</option>
            <option>inherit</option>
        </select>
    </div>
    <div class="input">
        <label>Line height</label>
        <input id="static-line-height" onchange="button.styleInput(this, 'line-height')" placeholder="Line height" type="text">
    </div>
    <div class="input">
        <label>Text align</label>
        <input id="static-text-align" onchange="button.styleInput(this, 'text-align')" placeholder="Text align" type="text">
    </div>
    <div class="input">
        <label>Text decoration</label>
        <input id="static-text-decoration" onchange="button.styleInput(this, 'text-decoration')" placeholder="Text decoration" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Border</label>
        <input id="static-border" onchange="button.styleInput(this, 'border')" placeholder="Border" type="text">
    </div>
    <div class="input">
        <label>Border radius</label>
        <input id="static-border-radius" onchange="button.styleInput(this, 'border-radius')" placeholder="Border radius" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Outline</label>
        <input id="static-outline" onchange="button.styleInput(this, 'outline')" placeholder="outline" type="text">
    </div>
    <div class="input">
        <label>Outline offset</label>
        <input id="static-outline-offset" onchange="button.styleInput(this, 'outline-offset')" placeholder="outline offset" type="text">
    </div>
    <hr>
    <div class="input">
    <label>Background</label>
    <input id="static-background" onchange="button.styleInput(this, 'background')" placeholder="Background" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Box shadow</label>
        <input id="static-box-shadow" onchange="button.styleInput(this, 'box-shadow')" placeholder="box-shadow" type="text">
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
            input.vfs(
                [
                    "#static-margin",
                    "#static-padding",
                    "#static-box-sizing",
                    "#static-width",
                    "#static-min-width",
                    "#static-max-width",
                    "#static-height",
                    "#static-min-height",
                    "#static-max-height",
                    "#static-color",
                    "#static-font-size",
                    "#static-font-family",
                    "#static-font-kerning",
                    "#static-font-weight",
                    "#static-font-style",
                    "#static-line-height",
                    "#static-text-align",
                    "#static-text-decoration",
                    "#static-border",
                    "#static-border-radius",
                    "#static-outline",
                    "#static-outline-offset",
                    "#static-background",
                    "#static-box-shadow",
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
            input.value("#static-text", button.getText());
            input.value("#static-selector", button.getSelector());
        },
    },
    true
);
