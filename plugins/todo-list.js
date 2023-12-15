app.plugins.add("todo-list", {
    name: "To-do List!",
    content: ``,
    style: `
    #todo-list > div {
        display:flex;flex-wrap:wrap;word-break:break-all;
        align-items:center;
        padding: .6rem;
        gap:.5rem;
        width:100%;
    };
    `,
    code: () => {
        sidebar.create("div.input-f1 > input.s-2#todo-list-new", {
            placeholder: "New task"
        });
        sidebar.create("button.s-1", {
            innerText: "Create",
            appendAt: ".input-f1",
            onclick: () => {
                document.querySelector("#todo-list").innerHTML += `
                <div>
                    <input type="checkbox">
                    <p>${document.querySelector("#todo-list-new").value}</p>
                </div>`;
            }
        });
        sidebar.create("div#todo-list");          
    },
});
