import express from "express"
import { handler } from "./build/handler.js"

const app = express();

const PORT = 5173;

app.get("/health-check", (req, res) => {
    res.send({
        message: "Server is up and running",
        status: 200
    });
})

app.use(handler);

app.listen(PORT, () => {
    console.log("server is running on port", PORT);
})