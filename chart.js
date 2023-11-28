document.addEventListener("DOMContentLoaded", function() {
    const ctx = document.getElementById("chartContainer").getContext("2d");

    // Tạo biểu đồ đường
    const myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4"],
            datasets: Object.keys(salesData).map(function(key) {
                return {
                    label: key,
                    data: salesData[key],
                    borderColor: getRandomColor(),
                    fill: false
                };
            })
        }
    });
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
