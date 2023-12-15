app.plugins.addWindow("calculator", {
    title: "Calculator",
    body: `<h1>My cool calculator</h1>`,
    code: () => {
        console.log("hi");
    },
});
