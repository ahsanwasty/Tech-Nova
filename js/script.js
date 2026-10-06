// Real-time Date & Time
const clock = document.getElementById("datetime");

function updateTime() {
    if (clock) {
        clock.textContent = new Date().toLocaleString("en-GB", {
            dateStyle: "medium",
            timeStyle: "medium",
            hour12: true
        });
    }
}

updateTime();
setInterval(updateTime, 1000);


// Alert Buttons
document.querySelectorAll(".alert-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
        alert(btn.dataset.message || "Thank you!");
    });
});