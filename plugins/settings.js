appvar.panels["settings"] = {
    name: "Settings",
    content: `
    <h3 class="title-s1">Manage Plugins</h3>

    <hr style="margin-bottom: 1rem;">

    <div id="settings-manage-plugins" style="display: flex;flex-wrap: wrap;gap: .8rem;"></div>

    <hr>
    <h3 class="title-s1">Storage (Danger zone!)</h3>
    <hr>

    <button class="s-1 full" onclick="db.clear();this.innerText='✅';setTimeout(()=>{this.innerText='Clear database'},3000)">Clear database</button>
    <br><br>
    <button class="s-1 full" onclick="local.clear();this.innerText='✅';setTimeout(()=>{this.innerText='Clear local storage'},3000)">Clear local storage</button>
    `,
    code: () => {
        const pluginsWrapper = document.querySelector("#settings-manage-plugins");
        const data = local.getPlugins();
        if (data.length == 0) {
            pluginsWrapper.style.cssText = "margin-bottom:6rem;";
            pluginsWrapper.innerHTML += `No plugins installed! <span onclick="app.loadBuiltinTool('plugins')" class="span-link">Install a plugin</span>`;
        } else {
            data.forEach((item) => {
                pluginsWrapper.innerHTML += `<button class="s-1">${item} <span onclick="this.parentElement.remove();app.plugins.remove('${item}');app.removeTool('${item}');">x</span></button>`;
            });
        }
    },
};
