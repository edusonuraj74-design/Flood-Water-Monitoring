const express = require("express");
const cors = require("cors");

const app = express();

const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());


// ===============================
// Home Route
// ===============================

app.get("/", (req, res) => {

    res.json({
        success: true,
        message: "Flood Monitoring Backend is Working"
    });

});


// ===============================
// Water Level API
// ===============================

app.get("/api/water-level", (req, res) => {

    const waterData = {

        waterLevel: 4.25,

        unit: "meters",

        status: "WARNING",

        riskLevel: "Medium",

        timestamp: new Date()

    };


    res.json({

        success: true,

        data: waterData

    });

});


// ===============================
// Start Server
// ===============================

app.listen(PORT, () => {

    console.log(
        `Flood Monitoring Backend running on http://localhost:${PORT}`
    );

});