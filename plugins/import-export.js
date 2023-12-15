appvar.panels["import-export"] = {
    name: `Import - Export`,
    content: `<!--
    <h3 class="title-s1">Export</h3>

    <hr style="margin-bottom: 2.3rem;">

    <div class="input-s1">
    <label>HTML Code</label>
    <div contenteditable="true" data-placeholder="Click on the 'Generate code' button!" id="export-code-html"></div>
    </div><br>
---
    <div class="input-s1">
    <label>CSS code</label>
    <div contenteditable="true" data-placeholder="Click on the 'Generate code' button!" id="export-code-css"></div>
    </div><br>
----
    <div class="input-s1">
    <label>JavaScript code</label>
    <div contenteditable="true" data-placeholder="Click on the 'Generate code' button!" id="export-code-js"></div>
    </div><br>
----
    <button class="s-1 full" id="export-code-gen">Generate code</button>

    <div class="box fcc" style="overflow:auto;" id="import-export-svg-preview">
    </div>

    <a id="import-export-download-svg" download>
        <button class="s-1 full">Download as svg (foreignObject)</button>
    </a><br><br>

    <a id="import-export-download-png" download>
        <button class="s-1 full">Download as png</button>
    </a><br><br>

    <a id="import-export-blob-url" target="_blank">Visit blob URL</a>
---
    <hr>
    
    <h3 style="margin:0;font-weight:400;padding:0;">Import Code</h3>

    <hr style="margin-bottom: 2.3rem;">

    <div class="input-s1">
    <label>Template JSON</label>
    <textarea type="text" placeholder="Paste JSON code here and click on 'Load JSON'" id="import-code-json-input"></textarea>
    </div><br>
    <button class="s-1 full" onclick="button.loadJSON(JSON.parse(document.querySelector('#import-code-json-input').value))">Load JSON</button>
    -->`,
    code: () => {
        sidebar.create(`div.hello > h1[text="awd"] + p[text="awdawfawf"]`)
        sidebar.create('h3[text="Export"].title-s1 + hr[style="margin-bottom: 2.3rem"] + div.input-s1 > label[text="HTML Code"] + div[contentEditable="true";;data-placeholder="Click on the \'Generate code\' button!"]#export-code-html');
        sidebar.create('br + div.input-s1 > label[text="CSS Code"] + div[contentEditable="true";;data-placeholder="Click on the \'Generate code\' button!"]#export-code-css');
        sidebar.create('br + div.input-s1 > label[text="JavaScript Code"] + div[contentEditable="true";;data-placeholder="Click on the \'Generate code\' button!"]#export-code-js');
        sidebar.create(`br + button[text="Generate code"].s-1.full#export-code-gen + div[style="overflow:auto;"].box.fcc#import-export-svg-preview + 
        a[download="cbm"]#import-export-download-svg > button[text="Download as svg (foreignObject)"].s-1.full`);
        sidebar.br(2);
        sidebar.create(`a[download="cbm"]#import-export-download-png > button[text="Download as png"].s-1.full`)
        sidebar.br(2);
        sidebar.create(`a[text="Visit blob URL";;target="_blank"]#import-export-blob-url`)
        sidebar.hr();
        sidebar.create(`h3[style="margin:0;font-weight:400;padding:0;";;text="Import Code"] + hr[style="margin-bottom: 2.3rem;"]
        + div.input-s1 > label[text="Template JSON"] + textarea[type="text";;placeholder="Paste JSON code here and click on 'Load JSON'"]#import-code-json-input`);
        sidebar.br();
        sidebar.create(`button[text="Load JSON"].s-1.full`, {
            onclick: () => {
                button.loadJSON(JSON.parse(document.querySelector('#import-code-json-input').value))
            }
        });

        sidebar.wait(() => {
            document.querySelector("#export-code-gen").addEventListener("click", () => {
                document.querySelector("#export-code-css").innerHTML = button.getExportCode();
                document.querySelector("#export-code-js").innerText = db.get("code-editor-js") || "";
                document.querySelector("#export-code-html").innerText = button.getExportHtml();
            });
    
            document.querySelector("#import-export-svg-preview").innerHTML = `
            <div style="display_none;">
                <svg id="import-export-svg" xmlns="http://www.w3.org/2000/svg">
                    <foreignObject x="0" y="0" height="800" width="800">
                        <body xmlns="http://www.w3.org/1999/xhtml">
                            <style>${button.getCode()}</style>
                            ${button.getHtml()}
                        </body>
                    </foreignObject>
                </svg>
            </div>`;
    
            var svg = document.getElementById("import-export-svg");
                var serializer = new XMLSerializer();
                var source = serializer.serializeToString(svg);
                if (!source.match(/^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/)) {
                    source = source.replace(/^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"');
                }
                if (!source.match(/^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/)) {
                    source = source.replace(/^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"');
                }
                source = '<?xml version="1.0" standalone="no"?>\r\n' + source;
                var url = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(source);
                document.getElementById("import-export-download-svg").href = url;
                document.querySelector("#import-export-svg-preview").innerHTML = `<canvas id="import-export-canvas"></canvas>`;
                var canvas = document.querySelector("#import-export-canvas");
                var context = canvas.getContext("2d");
        
                var image = new Image();
        
                image.src = url;
        
                image.onload = function () {
                    context.imageSmoothingEnabled = false;
                    context.drawImage(
                        image,
                        0,
                        0,
                        image.width * window.devicePixelRatio,
                        image.height * window.devicePixelRatio
                    );
                    const t = trimCanvas(canvas);
                    document.querySelector("#import-export-download-png").href = t.toDataURL("image/png");
                    t.toBlob(
                        function (blob) {
                            document.querySelector("#import-export-blob-url").href = URL.createObjectURL(blob);
                        },
                        "image/jpeg",
                        0.75
                    );
                };
        })

        
    },
};
