const loader = {
    create: () => {
        const e = document.createElement("div");
        e.className = "app-loader";
        e.innerHTML = `<section>
            <div class="loader">A</div>
            <div class="bottom">
                <p style="margin-top: 4rem">
                    <span class="title">Loading... </span
                    ><span class="content"></span>
                </p>
            </div>
        </section>`;
        document.body.prepend(e);
    },
    remove: () => {
        const loader = document.querySelector(".app-loader");
        loader.style.cssText = "background:transparent;backdrop-filter:blur(0);";
        document.querySelector(".app-loader .bottom").remove();
        setTimeout(() => {
            loader.style.scale = "0";
        }, 200);
        setTimeout(() => {
            loader.remove();
        }, 300);
    },
    hide: () => {
        const loader = document.querySelector(".app-loader");
        loader.style.cssText = "background:transparent;backdrop-filter:blur(0);";
        document.querySelector(".app-loader .bottom").remove();
        setTimeout(() => {
            loader.style.scale = "0";
        }, 200);
        setTimeout(() => {
            loader.style.display = "none";
        }, 300);
    },
    show: () => {
        const loader = document.querySelector(".app-loader");
        loader.style.display = "flex";
    },
};
