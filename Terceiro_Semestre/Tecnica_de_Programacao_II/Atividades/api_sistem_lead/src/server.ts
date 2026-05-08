import express from "express";
import chalk from  "chalk";
import leadRoutes from "./routes/lead.routes";

const app = express();

app.use(express.json());
app.use(leadRoutes);

app.get("/", (req, res) => {
  res.send("API working");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🔗 ${chalk.cyan(`Server running on http://localhost:${PORT}`)}`);
});