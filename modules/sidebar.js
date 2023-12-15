const sidebar = {
  create: (elementString, params = {}) => {
    elementString = elementString.replaceAll("\n", "")
    let elements;
    if (elementString.includes('+')) {
      elements = elementString.replace(/\>.*$/, "").split(">");
    } else {
      elements = elementString.split(">");
    }
    let parent = null;
    
    
    for (let i = 0; i < elements.length; i++) {
      const elementInfo = elements[i].trim().split(".");
      const elementTagId = elementInfo[0].split("#");
      const elementTag = elementTagId[0].replace(/\+.*$/, "").trim();
      const elementId = elements[i].trim().includes("#")
        ? elements[i].trim().match(/#(.*)$/)[1]
        : undefined;
      const elementClasses = elements[i].replaceAll(" ", '').replace(/\[.*?\]/g, "").replace(/\+.*$/, "").split(".");

        const element = document.createElement(elementTag.replace(/\[.*$/, ""));

        elementClasses.slice(1).map(cls => {
        element.classList.add(String(cls).replace(/#.*$/, ""))
      }
      );

      if (elementTag.includes("[")) {
        const attrList = elements[i]
          .split("#")[0]
          .replace(/\+.*$/, "")
          .replace(/(.*?)\[/, "")
          .slice(0, -1)
          .split(";;");
        attrList.forEach(attr => {
          const a = attr.match(/([^=\s]+)(?=\s*=)/)[0],
            t = attr.match(/="([^"]*)"/)[1];
          if (a === "text") {
            element.innerText = t;
            element.value = t;
          } else {
            if (t == "true") {
              element[a] = true
            } else if (t == "false") {
              element[a] = false
            } else if (a.includes("data-")) {
              element.setAttribute(a, t);
            } else {
              element[a] = t;
            }
          }
        });
      }

      if (elementId) {
        element.id = elementId.replace(/\..*$/, "").replaceAll(" ","");
      }

      function siblingAppend(dict) {
        if (elements[i].includes("+")) {
          const siblings = elementString.split(">");
          let x = [];
          const id = "sidebar-append-id-" + str.random(5);
          siblings.forEach(e => {
            x.push(e.split("+"))
          });
          x[0].shift();
          for (let si = 0; si < x[0].length; si++) {
            if (si == x[0].length - 1) {
              sidebar.create(x[0][si] + "." + id, dict)
            } else {
              sidebar.create(x[0][si], dict)
            }
          }
          if (x[1]) {
            x[1].forEach(sibling => {
              sidebar.create(sibling, {
                appendAt: "."+id
              });
            })
          }
        }
      }

      if (parent) {
        parent.appendChild(element);
        siblingAppend({
          appendAtElement: parent
        });
      } else {
        if (params["appendAt"]) {
          document
            .querySelector(".app-sidebar .content " + String(params["appendAt"]))
            .append(element);
            siblingAppend({
              appendAt: ".app-sidebar .content " + String(params["appendAt"])
            });
        } else if (params["appendAtElement"]) {
          params["appendAtElement"].append(element);
          siblingAppend({
            appendAtElement: params["appendAtElement"]
          });
        } else {
          document
            .querySelector(".app-sidebar .content")
            .appendChild(element);
            siblingAppend({
              appendAt: ""
            });
        }
      }

      if (i === elements.length - 1) {
        if (true) {
          for (const [key, value] of Object.entries(params)) {
            if (key === "style" && typeof value === "object") {
              Object.assign(element.style, value);
            } else {
              if (key === "className") {
                element.className = value;
              } else {
                element[key] = value;
              }
            }
          }
        }
      }

      parent = element;
    }
  },
  createNTimes: (e, times=1, params={}) => {
    for(let i=0; i < times; i++) {
      const element = document.createElement(e);
      Object.keys(params).forEach(key => {
        element[key] = params[key];
      });
      document
      .querySelector(".app-sidebar .content")
      .appendChild(element);
    }
  },
  br: (t, p) => {
    sidebar.createNTimes("br", t, p);
  },
  hr: (t, p) => {
    sidebar.createNTimes("hr", t, p);
  },
  wait: (callback, targetElement=document.querySelector(".app-sidebar .content")) => {
   targetElement = document.querySelector(".app-sidebar .content");

    var hasElementAdded = false;

    var observer = new MutationObserver(function(mutationsList, observer) {
      for (var mutation of mutationsList) {
        if (mutation.type === "childList" && mutation.addedNodes.length > 0) {
          var addedNodes = Array.from(mutation.addedNodes);
          if (addedNodes.some(function(node) {
            return node.parentElement === targetElement;
          })) {
            hasElementAdded = true;
            break;
          }
        }
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    setTimeout(function() {
      observer.disconnect();
      if (!hasElementAdded) {
        callback();
      }
    }, 1000);
  }
};
