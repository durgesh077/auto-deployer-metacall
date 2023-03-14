import express from "express";
(await import("dotenv")).config();
import { api } from "./routes/index.js";
const app = express();
app.use(express.static("build"));
app.use("/api", api);
app.get("/", (_req, res) => {
    res.sendFile("index.html");
});
export default app;
//# sourceMappingURL=app.js.map