window.addEventListener("load", function () {
    loader.remove();
});

if (localStorage.getItem("theme")) {
    app.themes.useWithType(localStorage.getItem("theme"));
}

if (appvar.urlParams.get("data")) {
    button.loadJSON(JSON.parse(atob(appvar.urlParams.get("data"))));
}

if (appvar.urlParams.get("theme")) {
    app.themes.use(appvar.urlParams.get("theme"));
}

if (appvar.urlParams.get("window")) {
    const window = appvar.urlParams.get("window");
    app.plugins.load(window, () => {
        app.loadWindow(window);
    }, false);
}

if (appvar.urlParams.get("panel")) {
    const panel = appvar.urlParams.get("panel");
    app.plugins.load(
        panel,
        () => {
            app.loadPanel(panel);
        },
        false
        );
        app.plugins.load("static", null, false);
    } else {
    app.plugins.load(
        "static",
        () => {
            app.loadPanel("static");
        },
        false
        );
    }

if (localStorage.getItem("template")) {
    button.loadJSON(JSON.parse(localStorage.getItem("template")));
    localStorage.removeItem("template");
}

if (localStorage.getItem("plugins")) {
    JSON.parse(localStorage.getItem("plugins")).forEach((plugin) => {
        app.plugins.load(plugin);
    });
}

appvar.styleMain.innerText = button.getStaticCode() + button.getHoverCode() + button.getFocusCode();