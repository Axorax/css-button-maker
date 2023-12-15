appvar.panels["templates"] = {
    name: "Template Store",
    content: `<div class="templates-plugin-wrapper" style="display: flex;flex-wrap: wrap;gap: .8rem;"></div>`,
    style: `
    .templates-plugin-wrapper .item {
        border: 1px solid #3d3d3d;
        border-radius: 6px;
        min-width: 7rem;
        text-align: center;
        transition: 200ms ease;
        overflow: hidden;
    }
    .templates-plugin-wrapper button {
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
    }
    .templates-plugin-wrapper button p {
        font-size: 11.4px !important;
        padding: .5rem;
        text-align: center;
        min-width: 7rem;
        border-top: 1px solid #3d3d3d;
    }

    .templates-plugin-wrapper .item > div {
        margin: 0.8rem;
        width: calc(100% - 1.6rem);
        border-radius: 5px;
        border: 1px solid #3d3d3d;
        height: 1.7rem;
        position: relative;
        box-shadow: 0 0 10px #0000006d;

        span:nth-child(1) {
            content: '';
            position: absolute;
            top: 50%;
            left: 60%;
            background: red;
            height: 5px;
            transform: translate(-50%, -50%);
            width: calc(100% - 40%);
            border-radius: 3rem;
        }
    }
    
    .templates-plugin-wrapper .item > div span:nth-child(1) {
        content: '';
        position: absolute;
        top: 50%;
        left: 60%;
        height: 5px;
        transform: translate(-50%, -50%);
        width: calc(100% - 40%);
        border-radius: 3rem;
    }
    
    .templates-plugin-wrapper .item > div span:nth-child(2) {
        content: '';
        position: absolute;
        top: 50%;
        left: 15.5%;
        border-radius: 50%;
        height: 5px;
        transform: translate(-50%, -50%);
        width: 5px;
    }
    .templates-plugin-wrapper .item:hover p {
        background: #537FE70f;
    }
    `,
    code: () => {
        if (appvar.toolsLoaded["templates"]) {
            document.querySelector(".templates-plugin-wrapper").innerHTML = db.get("templateStoreContent");
            return;
        }
        function templatesHex() {
            return '#' + Math.random().toString(16).slice(2, 8).padStart(6, '0');
        }
        fetch(`${appvar.fetchSlug}data/template-store.json`)
            .then((res) => res.json())
            .then((data) => {
                data.forEach((item) => {
                    document.querySelector(
                        ".templates-plugin-wrapper"
                    ).innerHTML += `
                        <button onclick="button.loadTemplate('${item}')">
                            <div class="item">
                                <div>
                                    <span style="background:${templatesHex()};"></span>
                                    <span style="background:${templatesHex()};"></span>
                                </div>
                                <p>${item}</p>
                            </div>
                        </button>
                    `;
                });
            })
            .then((data) => {
                db.add("templateStoreContent", document.querySelector(".templates-plugin-wrapper").innerHTML);
            });
    },
};
