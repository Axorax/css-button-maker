app.plugins.add("local-storage", {
    name: "Local Storage 📂",
    content: `
    <div id="local-storage-get">
    <h3 style="font-weight:400;">Get item</h3>
    <div class="input-f1">
    <input type="text" class="s-2" placeholder="Key" id="local-storage-get-i">
    <button class="s-1" id="local-storage-get-b">Get Item</button>
    </div>
    </div>

    <hr>

    <div id="local-storage-delete">
    <h3 style="font-weight:400;">Delete item</h3>
    <div class="input-f1">
    <input type="text" class="s-2" placeholder="Key" id="local-storage-del-i">
    <button class="s-1" id="local-storage-del-b">Delete</button>
    </div>
    </div>

    <hr>

    <div id="local-storage-add-update">
    <h3 style="font-weight:400;">Add or update item</h3>
    <input type="text" class="s-2 w-100p" placeholder="Key" id="local-storage-a-k">
    <textarea type="text" class="s-1" placeholder="Value" id="local-storage-a-v"></textarea>
    <button class="s-1 full" id="local-storage-a-b">Add / Update</button>
    </div>

    <hr>

    <h3 style="font-weight:400;">All data</h3>

    <button class="s-1 full" id="local-storage-all">Get all data</button>
    `,
    code: () => {
        document.querySelector("#local-storage-all").addEventListener("click", () => {
            const items = local.getAll();
            let table = `<table class="mono"><thead><tr><td>Key</td><td>Value</td></tr></thead><tbody>`;
            Object.keys(items).forEach((key) => {
                table += `<tr><td>${key}</td><td>${items[key]}</td></tr>`;
            });
            const e = document.createElement("div");
            e.classList.add("table");
            e.innerHTML = table + "</tbody></table>";
            document.querySelector(".app-sidebar .content").append(e);
            document.querySelector("#local-storage-all").remove();
        });
        document.querySelector("#local-storage-get-b").addEventListener("click", () => {
            const key = document.querySelector("#local-storage-get-i").value,
                value = local.get(key);
            if (value == null) {
                app.notice(`The item with key "${key}" doesn't exist!`);
                return;
            }
            const e = document.createElement("div");
            e.className = "box";
            e.innerHTML = `Key: ${key}<br>
            Value: ${value}`;
            document.querySelector("#local-storage-get").append(e);
        });
        document.querySelector("#local-storage-del-b").addEventListener("click", () => {
            const key = document.querySelector("#local-storage-del-i").value;
            if (local.get(key) == null) {
                app.notice(`The item with key "${key}" doesn't exist!`);
                return;
            }
            const e = document.createElement("div");
            e.className = "box";
            e.innerHTML = `Item with key '${key}' deleted!`;
            document.querySelector("#local-storage-delete").append(e);
            local.remove(key);
        });
        document.querySelector("#local-storage-a-b").addEventListener("click", () => {
            const key = document.querySelector("#local-storage-a-k").value;
            const value = document.querySelector("#local-storage-a-v").value;
            local.add(key, value);
            app.notice("Item has been created!");
        });
    },
});
