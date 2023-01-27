import express from "express";
import { readFile, writeFile } from "node:fs/promises";

const app = express();

app.use(express.static("public"));
app.use(express.json());

const uzumy = [];

app.get("/api/hello", async (_req, res) => {
  res.send("Selamat datang di Integer!");
});

app.get("/api/baca", async (_req, res) => {
  const text = await readFile("./data.txt", "utf8");
  res.send(text);
});

app.post("/api/tulis", async (req, res) => {
  await writeFile("./data.txt", req.body.text, "utf8");
  res.send(`Berhasil menulis "${req.body.text}" ke file data.txt.`);
});

app.post("/api/nan/post", (req, res) => {
  uzumy.push(req.body.text);
  res.send(uzumy);
});

app.get("/api/nan/get", (_req, res) => {
  res.send(uzumy);
});

app.listen(3000, () => console.log("Server berjalan."));