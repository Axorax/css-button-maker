const button = {
    style: (css) => {
        if (appvar.codeStatic.includes(/^(.*?):/.exec(css)[0])) {
            const x = /^(.*?):/.exec(css)[0];
            const r = new RegExp(`${x}(.*?);`, "i");
            appvar.codeStatic = appvar.codeStatic.slice(0, -1).replace(r.exec(appvar.codeStatic)[0], "") + css + "}";
        } else {
            appvar.codeStatic = appvar.codeStatic.slice(0, -1) + css + "}";
        }
        appvar.styleMain.innerText = appvar.codeStatic + appvar.codeHover + appvar.codeFocus;
    },
    styleHover: (css) => {
        if (appvar.codeHover.includes(/^(.*?):/.exec(css)[0])) {
            const x = /^(.*?):/.exec(css)[0];
            const r = new RegExp(`${x}(.*?);`, "i");
            appvar.codeHover = appvar.codeHover.slice(0, -1).replace(r.exec(appvar.codeHover)[0], "") + css + "}";
        } else {
            appvar.codeHover = appvar.codeHover.slice(0, -1) + css + "}";
        }
        appvar.styleMain.innerText = appvar.codeStatic + appvar.codeHover + appvar.codeFocus;
    },
    styleFocus: (css) => {
        if (appvar.codeFocus.includes(/^(.*?):/.exec(css)[0])) {
            const x = /^(.*?):/.exec(css)[0];
            const r = new RegExp(`${x}(.*?);`, "i");
            appvar.codeFocus = appvar.codeFocus.slice(0, -1).replace(r.exec(appvar.codeFocus)[0], "") + css + "}";
        } else {
            appvar.codeFocus = appvar.codeFocus.slice(0, -1) + css + "}";
        }
        appvar.styleMain.innerText = appvar.codeStatic + appvar.codeHover + appvar.codeFocus;
    },
    styleInput: (element, css) => {
        const v = css + `: ${element.value};`;
        if (appvar.codeStatic.includes(/^(.*?):/.exec(v)[0])) {
            const x = /^(.*?):/.exec(v)[0];
            const r = new RegExp(`${x}(.*?);`, "i");
            appvar.codeStatic = appvar.codeStatic.slice(0, -1).replace(r.exec(appvar.codeStatic)[0], "") + v + "}";
        } else {
            appvar.codeStatic = appvar.codeStatic.slice(0, -1) + v + "}";
        }
        appvar.styleMain.innerText = appvar.codeStatic + appvar.codeHover + appvar.codeFocus;
    },
    styleHoverInput: (element, css) => {
        const v = css + `: ${element.value};`;
        if (appvar.codeHover.includes(/^(.*?):/.exec(v)[0])) {
            const x = /^(.*?):/.exec(v)[0];
            const r = new RegExp(`${x}(.*?);`, "i");
            appvar.codeHover = appvar.codeHover.slice(0, -1).replace(r.exec(appvar.codeHover)[0], "") + v + "}";
        } else {
            appvar.codeHover = appvar.codeHover.slice(0, -1) + v + "}";
        }
        appvar.styleMain.innerText = appvar.codeStatic + appvar.codeHover + appvar.codeFocus;
    },
    styleFocusInput: (element, css) => {
        const v = css + `: ${element.value};`;
        if (appvar.codeFocus.includes(/^(.*?):/.exec(v)[0])) {
            const x = /^(.*?):/.exec(v)[0];
            const r = new RegExp(`${x}(.*?);`, "i");
            appvar.codeFocus = appvar.codeFocus.slice(0, -1).replace(r.exec(appvar.codeFocus)[0], "") + v + "}";
        } else {
            appvar.codeFocus = appvar.codeFocus.slice(0, -1) + v + "}";
        }
        appvar.styleMain.innerText = appvar.codeStatic + appvar.codeHover + appvar.codeFocus;
    },
    getStaticCode: () => {
        return appvar.codeStatic.replace("#button", appvar.selector);
    },
    text: (text) => {
        document.querySelector("#button").innerText = text;
    },
    getText: (text) => {
        return document.querySelector("#button").innerText;
    },
    getHoverCode: () => {
        return appvar.codeHover.replace("#button", appvar.selector);
    },
    getFocusCode: () => {
        return appvar.codeFocus.replace("#button", appvar.selector);
    },
    getCode: () => {
        return appvar.styleMain.innerText;
        // return button.getStaticCode() + button.getHoverCode() + button.getFocusCode();
    },
    getExportCode: () => {
        return appvar.styleMain.innerText.replaceAll("#button", button.getSelector);
    },
    getExportHtml: () => {
        const s = button.getSelector();
        if (s.startsWith(".")) {
            return String(document.querySelector(".preview-box").innerHTML).replace(
                'id="button"',
                `class="${s.substring(1)}"`
            );
        } else {
            return String(document.querySelector(".preview-box").innerHTML).replace(
                'id="button"',
                `id="${s.substring(1)}"`
            );
        }
    },
    getStyle: (name) => {
        return getComputedStyle(document.querySelector("#button")).getPropertyValue(name);
    },
    getComputedStyle: () => {
        return getComputedStyle(document.querySelector("#button"));
    },
    getHtml: () => {
        return document.querySelector(".preview-box").innerHTML;
    },
    getJs: () => {
        return db.get("code-editor-js") || "";
    },
    getStaticCodeViaComputedStyleComparison: () => {
        let comparedCode = "",
            element = getComputedStyle(document.querySelector("#button"));
        for (let i = 0; i < element.length; i++) {
            if (
                !Boolean(appvar.hiddenButtonStyles.getPropertyValue(element[i]) == element.getPropertyValue(element[i]))
            ) {
                comparedCode += "" + element[i] + ":" + element.getPropertyValue(element[i]) + `;\n`;
            }
        }
        return appvar.selector + " " + "{\n" + comparedCode + "}";
    },
    selector: (name) => {
        appvar.selector = name;
    },
    getSelector: (name) => {
        return appvar.selector;
    },
    loadTemplate: (name) => {
        fetch(`${appvar.fetchSlug}/templates/${name}.json`)
            .then((res) => res.json())
            .then((data) => {
                button.loadJSON(data);
            });
    },
    loadJSON: (json) => {
        const normal = json.static ? "#button {" + json.static + "}" : "#button {}";
        const hover = json.hover ? "#button:hover {" + json.hover + "}" : "#button:hover {}";
        const focus = json.focus ? "#button:focus {" + json.focus + "}" : "#button:focus {}";
        appvar.codeStatic = normal;
        appvar.codeHover = hover;
        appvar.codeFocus = focus;
        appvar.styleMain.innerText = normal + hover + focus;
    },
    getStyleForRule: (rule, prop) => {
        rule = "#button" + rule;
        var sheets = document.styleSheets;
        var slen = sheets.length;
        for (var i = 0; i < slen; i++) {
            var rules = document.styleSheets[i].cssRules;
            var rlen = rules.length;
            for (var j = 0; j < rlen; j++) {
                if (rules[j].selectorText == rule) {
                    return rules[j].style[prop];
                }
            }
        }
    },
};
