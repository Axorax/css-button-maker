app.plugins.add("plugin-dev", {
    name: `<span class="title-gradient" style="background-image: radial-gradient( circle farthest-corner at 10.2% 55.8%,  rgba(252,37,103,1) 0%, rgba(250,38,151,1) 46.2%, rgba(186,8,181,1) 90.1% );">&lt;Plugin Development Kit/&gt;</span>`,
    content: `
    <div class="input-s1">
    <label>Plugin Name</label>
    <input type="text" placeholder="my-cool-plugin" id="plugin-dev-name" class="font-mono">
    </div><br>
    <div class="input-s1">
    <label>HTML Content for sidebar</label>
    <textarea type="text" placeholder="Type HTML code for sidebar here!" id="plugin-dev-html" class="font-mono"></textarea>
    </div><br>
    <div class="input-s1">
    <label>JavaScript code</label>
    <textarea type="text" placeholder="Type JavaScript code here!" id="plugin-dev-js" class="font-mono"></textarea>
    </div><br>
    
    <button class="s-1 full" id="plugin-dev-test-live">◉ - Test plugin live</button>
    `,
    code: () => {
        input.value("#plugin-dev-html", db.getDictElseStr("plugin-dev-app", "content"));
        input.value("#plugin-dev-js", db.getDictElseStr("plugin-dev-app", "code"));
        input.value("#plugin-dev-name", db.getDictElseStr("plugin-dev-app", "name"));

        document.querySelector("#plugin-dev-test-live").addEventListener("click", () => {
            const name = document.querySelector("#plugin-dev-name").value,
                content = document.querySelector("#plugin-dev-html").value,
                code = document.querySelector("#plugin-dev-js").value;
            db.add("plugin-dev-app", {
                name: name,
                content: content,
                code: code,
            });
            app.plugins.add(name, {
                name: name,
                content: content,
                code: () => {
                    eval(db.get("plugin-dev-app").code);
                },
            });
        });
    },
});
