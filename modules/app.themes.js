app.themes = {
    use: (name) => {
        app.themes.detect(name).then((data) => {
            if (data == 'css') {
                app.themes.useWithType(`${name}.c`);
            } else if (data == 'toml') {
                app.themes.useWithType(`${name}.t`);
            } else {
                app.notice(`Theme ${name} doesn't exist!`)
                return undefined;
            }
        })
    },
    useWithType: (x) => {
        if (x.endsWith(".t")) {
            fetch(`${appvar.fetchSlug}themes/${x}oml`)
                .then((res) => res.text())
                .then((data) => {
                    const e = document.createElement("style");
                    e.innerHTML = toml.toCss(data);
                    document.head.append(e);
                });
        } else {
            const e = document.createElement("link");
            e.rel = "stylesheet";
            e.href = `${appvar.fetchSlug}themes/${x}ss`;
            document.head.append(e);
        }
    },
    detect: (name) => {
        return new Promise((resolve) => {
            const checkResource = (url) => {
              return new Promise((innerResolve) => {
                const request = new XMLHttpRequest();
                request.open("GET", url);
                request.onreadystatechange = function () {
                  if (request.readyState === 4) {
                    innerResolve(request.status === 200);
                  }
                };
                request.send();
              });
            };
        
            checkResource(`${appvar.fetchSlug}themes/${name}.toml`)
              .then((tomlExists) => {
                if (tomlExists) {
                  resolve("toml");
                } else {
                  return checkResource(`${appvar.fetchSlug}themes/${name}.css`);
                }
              })
              .then((cssExists) => {
                if (cssExists) {
                  resolve("css");
                } else {
                  resolve(undefined);
                }
              });
          });
    },
    exists: (name) => {
        return new Promise((resolve) => {
            app.themes.detect(name)
              .then((data) => {
                resolve(data !== undefined);
              })
              .catch(() => {
                resolve(false);
              });
          });
    }
}