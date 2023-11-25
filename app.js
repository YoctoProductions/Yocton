document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    const counterElement = document.getElementById("counter");
    const incrementBtn = document.getElementById("incrementBtn");

    // Listen for button click and emit the event to the server
    incrementBtn.addEventListener("click", () => {
        socket.emit("increment");
    });

    // Listen for counter updates from the server
    socket.on("updateCounter", (count) => {
        counterElement.innerText = count;
    });
});
