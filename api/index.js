import express from "express";
import { readFile, writeFile } from "node:fs/promises";

const app = express();

app.use(express.static("public"));
app.use(express.json());

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

const bebas = ["ayah", "kudri"];
app.get ("/api/fauzul", (req, res) => {
  res.send(bebas);
});

const post = ["saya", "fauzul"];
app.post("/api/fauzul", (req, res) => {
  post.push(req.body.tampan);
})

app.listen(3000, () => console.log("Server berjalan."));
