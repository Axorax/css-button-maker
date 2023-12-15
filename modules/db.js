const db = {
    add: (key, value) => {
        appvar.database[key] = value;
    },
    get: (key) => {
        return appvar.database[key];
    },
    getElseStr: (key) => {
        return appvar.database[key] ? appvar.database[key] : "";
    },
    getDictElseStr: (key, dict) => {
        return appvar.database[key] ? appvar.database[key][dict] : "";
    },
    update: (key, value) => {
        appvar.database[key] = value;
    },
    remove: (key) => {
        delete appvar.database[key];
    },
    clear: () => {
        appvar.database = {};
    },
};
