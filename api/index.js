import express from "express";

const app = express();

const data = ["Tri wulandari"];

app.use(express.static("public"));
app.use(express.json());

app.get("/api/wulan", async (_req, res) => {
  res.send("Selamat datang di Integer!");
});

app.get("/api/wulan", async (_req, res) => {
  res.send(data);
  console.log("berhasil tampil");
});

app.post("/api/wulan", async (req, res) => {
  data.push(req.body.data);
  res.send(`Berhasil menambah.`);
});

app.listen(3000, () => console.log("Server berjalan."));
