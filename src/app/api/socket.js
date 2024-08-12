import { Server } from "socket.io";

export default function handler(req, res) {
  if (!res.socket.server.io) {
    console.log("Servidor Socket.IO inicializado");
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Cliente conectado", socket.id);

      socket.on("updateUser", (user) => {
        io.emit("userUpdated", user);
      });

      socket.on("disconnect", () => {
        console.log("Cliente desconectado", socket.id);
      });
    });
  }
  res.end();
}