app.plugins.add(
    "focus",
    {
        name: "Button Focus Styling",
        content: `
    <div class="input">
        <label>Margin</label>
        <input id="focus-margin" onchange="button.styleFocusInput(this, 'margin')" placeholder="top right bottom left" type="text">
    </div>
    <div class="input">
        <label>Padding</label>
        <input id="focus-padding" onchange="button.styleFocusInput(this, 'padding')" placeholder="top right bottom left" type="text">
    </div>
    <div class="input">
        <label>Box sizing</label>
        <select onchange="button.styleFocusInput(this, 'box-sizing')" id="focus-box-sizing">
            <option>content-box</option>
            <option>border-box</option>
        </select>
    </div>
    <hr>
    <div class="input">
        <label>Width</label>
        <input id="focus-width" onchange="button.styleFocusInput(this, 'width')" placeholder="Width" type="text">
    </div>
    <div class="input">
        <label>Minimum width</label>
        <input id="focus-min-width" onchange="button.styleFocusInput(this, 'min-width')" placeholder="min-width" type="text">
    </div>
    <div class="input">
        <label>Maximum width</label>
        <input id="focus-max-width" onchange="button.styleFocusInput(this, 'max-width')" placeholder="max-width" type="text">
    </div>
    <div class="input">
        <label>Height</label>
        <input id="focus-height" onchange="button.styleFocusInput(this, 'height')" placeholder="Height" type="text">
    </div>
    <div class="input">
        <label>Minimum height</label>
        <input id="focus-min-height" onchange="button.styleFocusInput(this, 'min-height')" placeholder="min-height" type="text">
    </div>
    <div class="input">
        <label>Maximum height</label>
        <input id="focus-max-height" onchange="button.styleFocusInput(this, 'max-height')" placeholder="max-height" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Color</label>
        <input id="focus-color" onchange="button.styleFocusInput(this, 'color')" placeholder="Font color" type="text">
    </div>
    <div class="input">
        <label>Font Size</label>
        <input id="focus-font-size" onchange="button.styleFocusInput(this, 'font-size')" placeholder="Font size" type="text">
    </div>
    <div class="input">
        <label>Font family</label>
        <input id="focus-font-family" onchange="button.styleFocusInput(this, 'font-family')" placeholder="Font family" type="text">
    </div>
    <div class="input">
        <label>Font kerning</label>
        <select onchange="button.styleFocusInput(this, 'font-kerning')" id="focus-font-kerning">
            <option>normal</option>
            <option>auto</option>
            <option>none</option>
        </select>
    </div>
    <div class="input">
        <label>Font weight</label>
        <select onchange="button.styleFocusInput(this, 'font-weight')" id="focus-font-weight">
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
        <select onchange="button.styleFocusInput(this, 'font-style')" id="focus-font-style">
            <option>normal</option>
            <option>italic</option>
            <option>oblique</option>
            <option>initial</option>
            <option>inherit</option>
        </select>
    </div>
    <div class="input">
        <label>Line height</label>
        <input id="focus-line-height" onchange="button.styleFocusInput(this, 'line-height')" placeholder="Line height" type="text">
    </div>
    <div class="input">
        <label>Text align</label>
        <input id="focus-text-align" onchange="button.styleFocusInput(this, 'text-align')" placeholder="Text align" type="text">
    </div>
    <div class="input">
        <label>Text decoration</label>
        <input id="focus-text-decoration" onchange="button.styleFocusInput(this, 'text-decoration')" placeholder="Text decoration" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Border</label>
        <input id="focus-border" onchange="button.styleFocusInput(this, 'border')" placeholder="Border" type="text">
    </div>
    <div class="input">
        <label>Border radius</label>
        <input id="focus-border-radius" onchange="button.styleFocusInput(this, 'border-radius')" placeholder="Border radius" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Outline</label>
        <input id="focus-outline" onchange="button.styleFocusInput(this, 'outline')" placeholder="outline" type="text">
    </div>
    <div class="input">
        <label>Outline offset</label>
        <input id="focus-outline-offset" onchange="button.styleFocusInput(this, 'outline-offset')" placeholder="outline offset" type="text">
    </div>
    <hr>
    <div class="input">
    <label>Background</label>
    <input id="focus-background" onchange="button.styleFocusInput(this, 'background')" placeholder="Background" type="text">
    </div>
    <hr>
    <div class="input">
        <label>Box shadow</label>
        <input id="focus-box-shadow" onchange="button.styleFocusInput(this, 'box-shadow')" placeholder="box-shadow" type="text">
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
            input.vfsf(
                [
                    "#focus-margin",
                    "#focus-padding",
                    "#focus-box-sizing",
                    "#focus-width",
                    "#focus-min-width",
                    "#focus-max-width",
                    "#focus-height",
                    "#focus-min-height",
                    "#focus-max-height",
                    "#focus-color",
                    "#focus-font-size",
                    "#focus-font-family",
                    "#focus-font-kerning",
                    "#focus-font-weight",
                    "#focus-font-style",
                    "#focus-line-height",
                    "#focus-text-align",
                    "#focus-text-decoration",
                    "#focus-border",
                    "#focus-border-radius",
                    "#focus-outline",
                    "#focus-outline-offset",
                    "#focus-background",
                    "#focus-box-shadow",
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
