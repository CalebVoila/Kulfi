document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById("drawingCanvas");
    const ctx = canvas.getContext("2d");
    let drawing = false;
    let eraser = false;

    canvas.addEventListener("mousedown", () => {
        drawing = true;
    });

    canvas.addEventListener("mouseup", () => {
        drawing = false;
        ctx.beginPath();
    });

    canvas.addEventListener("mousemove", draw);

    document.getElementById("colorPicker").addEventListener("input", (e) => {
        ctx.strokeStyle = e.target.value;
    });

    document.getElementById("clearButton").addEventListener("click", () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    });

    document.getElementById("eraserButton").addEventListener("click", () => {
        eraser = !eraser;
        if (eraser) {
            ctx.strokeStyle = "#f0f0f0"; // White color for eraser
        } else {
            ctx.strokeStyle = document.getElementById("colorPicker").value;
        }
    });

    function draw(e) {
        if (!drawing) return;

        ctx.lineWidth = 5;
        ctx.lineCap = "round";

        ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    }
});
