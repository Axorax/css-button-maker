const str = {
    random: (a = 5) => {
        let y = "";
        const z = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        const x = z.length;
        let c = 0;
        while (c < a) {
            y += z.charAt(Math.floor(Math.random() * x));
            c += 1;
        }
        return y;
    },
    contains: {
        number: (string) => {
            return /\d/.test(string);
        },
    },
};
