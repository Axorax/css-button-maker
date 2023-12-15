function copy(e) {
    navigator.clipboard.writeText(document.querySelector("#css").textContent);
    e.innerText = "✅ copied!";
    setTimeout(() => {
        e.innerText = "📋 Copy CSS";
    }, 2000);
}

function convert() {
    const toml = document.getElementById("toml").value;
    const parsedData = parseTOML(toml);
    const css = generateCSS(parsedData);
    document.getElementById("css").textContent = css;
}

function parseTOML(toml) {
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

    return result;
}

function generateCSS(parsedData) {
    let css = "";

    for (const [selector, properties] of Object.entries(parsedData)) {
        css += `${selector} {`;

        for (const [property, value] of Object.entries(properties)) {
            css += `${property}: ${value};`;
        }

        css += "}";
    }

    return css;
}
