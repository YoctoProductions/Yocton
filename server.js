const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

let counter = 0;

// Serve static files
app.use(express.static("public"));

// Handle socket connections
io.on("connection", (socket) => {
    // Send the current counter value to the connected client
    socket.emit("updateCounter", counter);

    // Listen for button clicks and broadcast the updated counter to all clients
    socket.on("increment", () => {
        counter++;
        io.emit("updateCounter", counter);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
