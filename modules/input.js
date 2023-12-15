const input = {
    value: (element, value) => {
        if (document.querySelector(element) instanceof HTMLDivElement) {
            document.querySelector(element).innerText = value;
        } else {
            document.querySelector(element).value = value;
        }
    },
    vfs: (element, style) => {
        if (Array.isArray(element)) {
            if (!Array.isArray(style)) {
                return;
            }
            const c = button.getComputedStyle();
            for (let i = 0; i < element.length; i++) {
                document.querySelector(element[i]).value = c.getPropertyValue(style[i]);
            }
        } else {
            document.querySelector(element).value = button.getStyle(style);
        }
    },
    vfsh: (element, style) => {
        if (Array.isArray(element)) {
            if (!Array.isArray(style)) {
                return;
            }
            for (let i = 0; i < element.length; i++) {
                document.querySelector(element[i]).value = button.getStyleForRule(":hover", style[i]);
            }
        } else {
            document.querySelector(element).value = button.getStyleForRule(":hover", style);
        }
    },
    vfsf: (element, style) => {
        if (Array.isArray(element)) {
            if (!Array.isArray(style)) {
                return;
            }
            for (let i = 0; i < element.length; i++) {
                document.querySelector(element[i]).value = button.getStyleForRule(":focus", style[i]);
            }
        } else {
            document.querySelector(element).value = button.getStyleForRule(":focus", style);
        }
    },
    valueToStyle: (e, s) => {
        input.vfs(e, s);
    },
};
