let app = {
    createWindow: (title, body) => {
        const html = `<div class="title"><p>${title}</p><div class="controls"><div class="close" onclick="this.parentElement.parentElement.parentElement.remove()">x</div></div></div><div class="body">${body}</div>`;
        const e = document.createElement("div");
        const id = "window-" + str.random(5);
        e.className = "window";
        e.id = id;
        e.innerHTML = html;
        document.body.append(e);
        windrag.create(`#${id}`, `#${id} .title`);
        return id;
    },
    loadPanel: (name) => {
        appvar.sidebarContent.innerHTML = appvar.panels[name].content;
        appvar.sidebarTitle.innerHTML = appvar.panels[name].name;
        if (appvar.panels[name].style) {
            const e = document.createElement("style");
            e.id = name + "-plugin-style";
            e.innerText = appvar.panels[name].style;
            document.head.append(e);
        }
        appvar.panels[name].code();
    },
    loadWindow: (name) => {
        app.createWindow(appvar.windows[name].title, appvar.windows[name].body);
        if (appvar.windows[name].code) {
            appvar.windows[name].code();
        }
    },
    addTool: (name, options = { plugin: true }) => {
        if (options.plugin) {
            appvar.toolsGrid.innerHTML += `<button class="s-1" id="tool-${name}" onclick="app.loadPanel('${name}')">${name}</button>`;
        } else {
            appvar.toolsGrid.innerHTML += `<button class="s-1" id="tool-${name}" onclick="app.loadWindow('${name}')">${name}</button>`;
        }
    },
    removeTool: (name) => {
        document.querySelector(`#tool-${name}`).remove();
    },
    loadBuiltinTool: (name) => {
        if (appvar.toolsLoaded[name] == false) {
            app.plugins.load(
                name,
                () => {
                    app.loadPanel(name);
                    appvar.toolsLoaded[name] = true;
                },
                false
            );
        } else {
            app.loadPanel(name);
        }
    },
    notice: (message, timeout=3000) => {
        const e = document.createElement("div");
        e.className = "notice";
        e.innerHTML = message;
        document.body.append(e);
        setTimeout(() => {
            e.style.transform = "translate(-50%, 1rem)";
        }, 300);
        setTimeout(() => {
            e.style.transform = "translate(-50%, -100%)";
        }, Number(timeout) - 500);
        setTimeout(() => {
            e.remove();
        }, timeout);
    },
};
