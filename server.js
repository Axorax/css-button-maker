const http = require("http");
const fs = require("fs");
const path = require("path");
const PORT = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, req.url);

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/json" });
            res.end(
                JSON.stringify(
                    {
                        error: true,
                        message: "File not found!",
                    },
                    null,
                    4
                )
            );
        } else {
            res.writeHead(200, { "Content-Type": getContentType(filePath) });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Visit local website at http://localhost:${PORT}/index.html`);
});

function getContentType(filePath) {
    const extname = path.extname(filePath);
    switch (extname) {
        case ".html":
            return "text/html";
        case ".css":
            return "text/css";
        case ".js":
            return "text/javascript";
        case ".png":
            return "image/png";
        case ".jpg":
        case ".jpeg":
            return "image/jpeg";
        default:
            return "application/octet-stream";
    }
}
