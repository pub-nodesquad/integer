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



const avitaa = ["avita", "diah"];
app.post("/api/avita", (req, res) => {
  avitaa.push(req.body.text);
  res.send("congrotulation!");

})

app.get("/api/avita", (_req, res) => {
  res.send(avitaa);
})

app.listen(3000, () => console.log("Server berjalan."));
