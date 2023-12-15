let appvar = {
    preview: document.querySelector(".app-preview"),
    sidebar: document.querySelector(".app-sidebar"),
    sidebarTitle: document.querySelector(".app-sidebar .title"),
    sidebarContent: document.querySelector(".app-sidebar .content"),
    tools: document.querySelector(".app-tools"),
    toolsGrid: document.querySelector(".app-tools .grid"),
    hiddenButtonStyles: getComputedStyle(document.querySelector("#hidden-button")),
    styleMain: document.querySelector("#style-main"),
    fetchSlug: String(window.location.href).includes("github.io")
        ? `https://axorax.github.io/css-button-maker/`
        : window.location.origin + "/",
    codeHover: `#button:hover{}`,
    codeStatic: `#button {}`,
    codeFocus: `#button:focus {}`,
    selector: "#button",
    toolsLoaded: {
        plugins: false,
        templates: false,
        store: false,
        "import-export": false,
        "code-editor": false,
        settings: false,
        hover: false,
        focus: false,
    },
    panels: {
        guide: {
            name: "Guide",
            content:
                "Hello there! :D<br><br>Welcome to css button maker (version 2.0)<br><br>On the bottom left, there is a wide area for you to find all the tools like guide, basic, etc.<br><br>On the right side, there is a tall area where things like input fields, text, etc are loaded.",
            code: () => {},
        },
    },
    windows: {},
    database: {},
    urlParams: new URLSearchParams(window.location.search),
};
