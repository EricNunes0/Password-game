import express from "express";
import http from "http";
import onType from "./public/scripts/onType.js";
import { Server } from "socket.io";
import serverless from "serverless-http";

const app = express();
const server = http.createServer(app);
const sockets = new Server(server);
const port = process.env.PORT || 3001;

app.use(express.static("public"));

sockets.on("connection", (socket) => {
    const userId = socket.id;
    console.log(`${userId} acabou de se conectar no jogo`);
    let password = "";
    socket.emit("type", password);

});

server.listen(port, () => {
    console.log(`Conectado na porta ${port}`);
});