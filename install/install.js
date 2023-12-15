const bg = [
    `background-color: #e5e5f7;background: linear-gradient(135deg,#444cf755 25%,transparent 25%) -10px 0/ 20px 20px,linear-gradient(225deg, #444cf7 25%, transparent 25%) -10px 0/20px 20px,linear-gradient(315deg, #444cf755 25%, transparent 25%) 0px 0/ 20px 20px,linear-gradient(45deg, #444cf7 25%, #e5e5f7 25%) 0px 0/ 20px 20px;`,
    `background: #121212;background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='28' height='49' viewBox='0 0 28 49'%3E%3Cg fill-rule='evenodd'%3E%3Cg id='hexagons' fill='%239C92AC' fill-opacity='0.25' fill-rule='nonzero'%3E%3Cpath d='M13.99 9.25l13 7.5v15l-13 7.5L1 31.75v-15l12.99-7.5zM3 17.9v12.7l10.99 6.34 11-6.35V17.9l-11-6.34L3 17.9zM0 15l12.98-7.5V0h-2v6.35L0 12.69v2.3zm0 18.5L12.98 41v8h-2v-6.85L0 35.81v-2.3zM15 0v7.5L27.99 15H28v-2.31h-.01L17 6.35V0h-2zm0 49v-8l12.99-7.5H28v2.31h-.01L17 42.15V49h-2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E"),linear-gradient(to right top,#343a40,#2b2c31,#211f22,#151314,#000000);`,
    `background-color: #e5e5f7;background-image:  linear-gradient(135deg, #8545f7 25%, transparent 25%), linear-gradient(225deg, #8545f7 25%, transparent 25%), linear-gradient(45deg, #8545f7 25%, transparent 25%), linear-gradient(315deg, #8545f7 25%, #e5e5f7 25%);background-position:  16px 0, 16px 0, 0 0, 0 0;background-size: 16px 16px;background-repeat: repeat;`,
    `background-color: #111;background-image:  repeating-linear-gradient(45deg, #2a3f3e 25%, transparent 25%, transparent 75%, #2a3f3e 75%, #2a3f3e), repeating-linear-gradient(45deg, #2a3f3e 25%, #111 25%, #111 75%, #2a3f3e 75%, #2a3f3e);background-position: 0 0, 14px 14px;background-size: 28px 28px;`,
];

const style = document.createElement("style");
style.innerText = "body {" + bg[Math.floor(Math.random() * bg.length)] + "}";
document.head.append(style);
// Math.floor(Math.random()*bg.length)
function install(type, code) {
    const title = document.querySelector(".title"),
        button = document.querySelector(".install"),
        buttons = document.querySelector(".buttons"),
        params = new URLSearchParams(window.location.search),
        name = params.get("name"),
        fetchSlug = String(window.location.href).includes("github.io")
            ? `https://axorax.github.io/css-button-maker/`
            : window.location.origin + "/";
    code(title, button, params, name, fetchSlug, type, buttons);
}
