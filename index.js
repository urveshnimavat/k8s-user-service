const express = require("express");
const axios = require("axios");
const app = express();
const PORT = process.env.PORT || 4000;
const SERVICE_A_URL = process.env.SERVICE_A_URL || "http://localhost:3000";

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(SERVICE_A_URL);
    res.send(`Hello from User Service! Also -> ${response.data}`);
  } catch (err) {
    res.send("Hello from User Service, but failed to reach Service A.");
  }
});

app.listen(PORT, () => {
  console.log(`User Service running on port ${PORT}`);
});
