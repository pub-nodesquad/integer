import express from "express";
import { readFile, writeFile } from "node:fs/promises";

const app = express();

app.use(express.static("public"));
app.use(express.json());

const volume=["tempe bacem","little ponny"];

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


app.post("/api/amalia",async(req,_res)=>{
    volume.push(req.body.text);
})

app.get("/api/amalia",async(_req,res)=>{
  res.send(volume);
})
app.listen(3000, () => console.log("Server berjalan."));
