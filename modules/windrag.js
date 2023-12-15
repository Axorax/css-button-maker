const windrag = {
    create: (element, activator, options = { position: "absolute", css: "" }) => {
        const id = str.random(3);
        element = document.querySelector(element);
        activator = document.querySelector(activator);
        element.classList.add(`drag-element-${id}`);
        activator.classList.add(`drag-activator-${id}`);

        if (options.css) {
            element.style.cssText += options.css;
        }
        let x = 0,
            y = 0,
            allowMoving = false,
            events = {
                mouse: {
                    down: "mousedown",
                    move: "mousemove",
                    up: "mouseup",
                },
                touch: {
                    down: "touchstart",
                    move: "touchmove",
                    up: "touchend",
                },
            },
            deviceType = user.usingTouchableDevice() ? "touch" : "mouse",
            deviceTouch = user.usingTouchableDevice() ? true : false;
        activator.addEventListener(events[deviceType].down, (e) => {
            e.preventDefault();
            x = !deviceTouch ? e.clientX : e.touches[0].clientX;
            y = !deviceTouch ? e.clientY : e.touches[0].clientY;
            allowMoving = true;
        });
        element.style.position = options.position;
        activator.addEventListener(events[deviceType].move, (e) => {
            if (allowMoving) {
                e.preventDefault();
                let newX = !deviceTouch ? e.clientX : e.touches[0].clientX;
                let newY = !deviceTouch ? e.clientY : e.touches[0].clientY;
                const t = element.offsetTop - (y - newY),
                    l = element.offsetLeft - (x - newX),
                    leftLimit = element.offsetWidth / 2,
                    rightLimit = document.body.clientWidth - leftLimit,
                    topLimit = element.offsetHeight / 2,
                    bottomLimit = document.body.clientHeight - topLimit;

                if (t > bottomLimit) {
                    element.style.top = bottomLimit + "px";
                } else if (t < topLimit) {
                    element.style.top = topLimit + "px";
                } else {
                    element.style.top = t + "px";
                }

                if (l > rightLimit) {
                    element.style.left = rightLimit + "px";
                } else if (l < leftLimit) {
                    element.style.left = leftLimit + "px";
                } else {
                    element.style.left = l + "px";
                }

                x = newX;
                y = newY;
            }
        });
        activator.addEventListener("mouseleave", () => {
            allowMoving = false;
        });
        activator.addEventListener(events[deviceType].up, () => {
            allowMoving = false;
        });
        return {
            id: id,
            elementId: `drag-element-${id}`,
            activatorId: `drag-activator-${id}`,
        };
    },
};
