const websocket = require("ws");

const ws = new websocket.Server({
  port: 5000,
});
ws.on("connection", (socket) => {
  console.log("Connection  success!");
  socket.on("message", (data) => {
    ws.clients.forEach((client) => {
      if (client.readyState === websocket.OPEN) {
        client.send(data);
      }
    });
  });
});
