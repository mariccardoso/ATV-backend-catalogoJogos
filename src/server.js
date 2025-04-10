import express from "express";
import gameRoutes from "./routes/gamesRoutes.js";
const app = express();
const port = 4000;
app.use(express.json());
app.use("/games", gameRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

app.get("/", (req, res) => {
  res.send("Hello World!"); // Mensagem para a rota raiz
});