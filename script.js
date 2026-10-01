const API_URL = "http://localhost:5000/api/water-level";

// Backend se water-level data lena
async function getWaterLevel() {
    try {
        const response = await fetch(API_URL);

        if (!response.ok) {
            throw new Error("Backend API not responding");
        }

        const result = await response.json();

        console.log("Backend Data:", result);

        if (result.success) {
            updateDashboard(result.data);
        }

    } catch (error) {
        console.error("Error:", error);

        document.getElementById("waterLevel").textContent = "--";
        document.getElementById("status").textContent = "🔴 OFFLINE";
    }
}


// Dashboard ko backend data se update karna
function updateDashboard(data) {

    const level = Number(data.waterLevel);

    // Water Level
    document.getElementById("waterLevel").textContent =
        level.toFixed(2);


    // Status
    const statusElement = document.getElementById("status");

    statusElement.className = "status";

    if (level < 3) {

        statusElement.textContent = "🟢 NORMAL";
        statusElement.classList.add("normal");

    } else if (level < 5) {

        statusElement.textContent = "🟡 WARNING";
        statusElement.classList.add("warning");

    } else {

        statusElement.textContent = "🔴 DANGER";
        statusElement.classList.add("danger");
    }


    // Risk Level
    document.getElementById("riskLevel").textContent =
        data.riskLevel;


    // Last Updated
    const time = new Date(data.timestamp);

    document.getElementById("lastUpdated").textContent =
        time.toLocaleTimeString();
}


// Page load hote hi backend se data lena
getWaterLevel();


// Har 5 second mein latest data lena
setInterval(getWaterLevel, 5000);