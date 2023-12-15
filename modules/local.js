const local = {
    get: (key) => {
        return localStorage.getItem(key);
    },
    remove: (key) => {
        return localStorage.removeItem(key);
    },
    add: (key, value) => {
        return localStorage.setItem(key, value);
    },
    clear: () => {
        return localStorage.clear();
    },
    key: (index) => {
        return localStorage.key(Number(index));
    },
    len: () => {
        return localStorage.length;
    },
    length: () => {
        return localStorage.length;
    },
    getAll: () => {
        return { ...localStorage };
    },
    getAllKeys: () => {
        return Object.keys({ ...localStorage });
    },
    getAllValues: () => {
        return Object.values({ ...localStorage });
    },
    getPlugins: () => {
        return JSON.parse(localStorage.getItem("plugins")) || [];
    },
};
