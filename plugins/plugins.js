appvar.panels["plugins"] = {
    name: "Plugin Store - Plug and play!",
    content: `<div style="display: flex;flex-wrap: wrap;gap: .8rem;" class="wrapper"></div>`,
    style: `
    .plugins-item {
        display: flex;
        align-items: center;
    }
    .plugins-item span {
        width: 5px;
        height: 5px;
        border-radius: 50%;
        display: block;
        margin: 0 0.6rem 0 0.2rem;
    }
    `,
    code: () => {
        if (appvar.toolsLoaded["plugins"]) {
            document.querySelector(".app-sidebar .content .wrapper").innerHTML = db.get("pluginStoreContent");
            return;
        }
        fetch(`${appvar.fetchSlug}data/plugin-store.json`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((item) => {
                    document.querySelector(
                        ".app-sidebar .content .wrapper"
                    ).innerHTML += `<button class="s-1 plugins-item" onclick="app.plugins.load('${item}')">
                        <span style="background: ${'#' + Math.random().toString(16).slice(2, 8).padStart(6, '0')};"></span>
                        ${item}
                    </button>`;
                });
            })
            .then((data) => {
                db.add("pluginStoreContent", document.querySelector(".app-sidebar .content .wrapper").innerHTML);
            });
    },
};
