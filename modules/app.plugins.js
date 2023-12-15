app.plugins = {
    remove: (name) => {
        const data = JSON.parse(localStorage.getItem("plugins")) || [];
        if (data.includes(name)) {
            data.splice(data.indexOf(name), 1);
            localStorage.setItem("plugins", JSON.stringify(data));
            delete appvar.panels[name];
        } else {
            app.notice(`Either plugin '${name}' is not installed or doesn't exist!`);
        }
    },
    add: (name, code, avoidAddingTool = false) => {
        if (Boolean(appvar.panels[name])) {
            app.notice(`Plugin '${name}' is already installed!`);
            return;
        }
        if (!avoidAddingTool) {
            app.addTool(name);
        }
        appvar.panels[name] = code;
    },
    addWindow: (name, details) => {
        if (Boolean(appvar.windows[name])) {
            app.notice(`Window '${name}' is already installed!`);
            return;
        }
        appvar.windows[name] = details;
        app.addTool(name, { plugin: false });
    },
    save: (name) => {
        const data = JSON.parse(localStorage.getItem("plugins")) || [];
        if (data.includes(name)) {
            return;
        }
        data.push(name);
        localStorage.setItem("plugins", JSON.stringify(data));
    },
    load: (name, code, save = true) => {
        fetch(`${appvar.fetchSlug}plugins/${name}.js`)
            .then((res) => res.text())
            .then((data) => {
                eval(data);
                if (save) {
                    app.plugins.save(name);
                }
            })
            .then((next) => {
                if (code) {
                    code();
                }
            });
    },
    getInstalled: () => {
        return JSON.parse(localStorage.getItem("plugins")) || [];
    },
};
