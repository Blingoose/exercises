import http from "http";
import fs from "fs";
import { fileURLToPath } from "url";
import path from "path";

// const __filename = fileURLToPath(import.meta.url);
const __dirname = fileURLToPath(new URL(".", import.meta.url));
const publicDirPath = path.join(__dirname, "../public");

const PORT = 8000;
const host = "localhost";

function handler(req, res) {
  const parsedUrl = new URL(req.url, `http://${host}:${PORT}`);

  switch (parsedUrl.pathname) {
    case "/":
      res.writeHead(200, { "Content-type": "text/html; charset=UTF-8" });
      const homeHTML = fs.readFileSync(publicDirPath + "/index.html");
      res.write(homeHTML);
      res.end();
      break;

    case "/index.css":
      res.writeHead(200, { "Content-type": "text/css" });
      const indexCSS = fs.readFileSync(publicDirPath + "/index.css");
      res.write(indexCSS);
      res.end();
      break;

    case "/users":
      res.writeHead(200, { "Content-type": "application/json" });
      const dataJSON = fs.readFileSync("users.json");
      res.write(dataJSON);
      res.end();
      break;

    case "/raw-html":
      res.writeHead(200, { "Content-type": "text/html; charset=UTF-8" });
      res.write("<h1>Raw HTML Page</h1>");
      res.end();
      break;

    default:
      res.writeHead(404, { "Content-type": "text/html; charset=UTF-8" });
      const error = fs.readFileSync(publicDirPath + "/404.html");
      res.write(error);
      res.end();
  }
}

const server = http.createServer(handler);

server.listen(PORT, host, () => {
  console.log(`Server is up on http://${host}:${PORT}`);
});
