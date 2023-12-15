appvar.panels["code-editor"] = {
    name: "Code Editor",
    content: `
<div class="input-s1">
    <label>HTML code</label>
    <textarea class="font-mono" id="code-editor-html" placeholder="HTML code editor">${ document.querySelector(".preview-box").innerHTML}
    </textarea>
</div><br>
<div class="input-s1">
    <label>CSS code</label>
    <div style="resize: vertical;overflow: auto;" class="font-mono" id="code-editor-css" contenteditable="true" placeholder="CSS code editor"></div>
</div><br>
<div class="input-s1">
    <label>JavaScript code</label>
    <div style="resize: vertical;overflow: auto;" class="font-mono" id="code-editor-js" contenteditable="true" placeholder="JavaScript code editor"></div>
</div><br>
<button class="s-1 full" id="code-editor-js-run">Save & Run JavaScript</button>
    `,
    code: () => {
        input.value("#code-editor-css", button.getCode());
        input.value("#code-editor-js", db.get("code-editor-js") || "");
        document.querySelector("#code-editor-html").addEventListener("keyup", () => {
            document.querySelector(".preview-box").innerHTML = document.querySelector("#code-editor-html").value;
        });
        document.querySelector("#code-editor-css").addEventListener("keydown", () => {
            styleMain.innerText = document.querySelector("#code-editor-css").textContent;
        });
        document.querySelector("#code-editor-js-run").addEventListener("click", () => {
            db.add("code-editor-js", document.querySelector("#code-editor-js").innerText);
            eval(String(document.querySelector("#code-editor-js").innerText));
        });
    },
};
