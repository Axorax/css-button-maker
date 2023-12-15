// Canvas Trim -> https://www.npmjs.com/package/canvas-trim
function trimCanvas(c) {
    var ctx = c.getContext("2d"),
        copy = document.createElement("canvas").getContext("2d"),
        pixels = ctx.getImageData(0, 0, c.width, c.height),
        l = pixels.data.length,
        i,
        bound = {
            top: null,
            left: null,
            right: null,
            bottom: null,
        },
        x,
        y;

    for (i = 0; i < l; i += 4) {
        if (pixels.data[i + 3] !== 0) {
            x = (i / 4) % c.width;
            y = ~~(i / 4 / c.width);

            if (bound.top === null) {
                bound.top = y;
            }

            if (bound.left === null) {
                bound.left = x;
            } else if (x < bound.left) {
                bound.left = x;
            }

            if (bound.right === null) {
                bound.right = x;
            } else if (bound.right < x) {
                bound.right = x;
            }

            if (bound.bottom === null) {
                bound.bottom = y;
            } else if (bound.bottom < y) {
                bound.bottom = y;
            }
        }
    }

    var trimHeight = bound.bottom - bound.top,
        trimWidth = bound.right - bound.left,
        trimmed = ctx.getImageData(bound.left, bound.top, trimWidth, trimHeight);

    copy.canvas.width = trimWidth;
    copy.canvas.height = trimHeight;
    copy.putImageData(trimmed, 0, 0);

    return copy.canvas;
}

// TOML

const toml = {
    toCss: (toml) => {
        const result = {};
        const lines = toml.split("\n");
        let currentSelector = null;

        for (let line of lines) {
            line = line.trim();

            if (line.startsWith("[") && line.endsWith("]")) {
                currentSelector = line.slice(1, -1).trim();
                result[currentSelector] = {};
            } else if (currentSelector) {
                const [property, value] = line.split("=");
                if (property && value) {
                    result[currentSelector][property.trim()] = value.trim();
                }
            }
        }

        let css = "";

        for (const [selector, properties] of Object.entries(result)) {
            css += `${selector} {`;

            for (const [property, value] of Object.entries(properties)) {
                css += `${property}: ${value};`;
            }

            css += "}";
        }

        return css;
    },
};
