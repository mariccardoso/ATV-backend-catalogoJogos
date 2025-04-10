import gamesModel from "../models/gamesModel.js";

class GamesController {
  getAll = async (req, res) => {
    try {
      const games = await gamesModel.getAll();
      res.json(games);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar jogos" });
    }
  };

  create = async (req, res) => {
    const { title, price, developer} = req.body;
    try {
      if (!title || !price || !developer) {
        return res.status(400).json({ erro: "Titulo, Preço e Desenvolvedor são campos obrigatórios" });
      }
      const newGame = await gamesModel.create(title, price, developer);
      res.status(201).json(newGame);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao criar jogo" });
    }
  };

  update = async (req, res) => {
    const { id } = req.params;
    const {  favorita, cor, titulo, conteudo  } = req.body;

    try {
      const notaAtualizada = await gamesModel.update(
        parseInt(id),
        favorita,
        cor,
        titulo,
        conteudo
      );

      if (!notaAtualizada) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.json(notaAtualizada);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao atualizar anotação" });
    }
  };

  delete = async (req, res) => {
    const { id } = req.params;

    try {
      const sucesso = await gamesModel.delete(parseInt(id));

      if (!sucesso) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.status(204).send();
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao excluir anotação" });
    }
  };

  getById = async (req, res) => {
    const { id } = req.params;

    try {
      const nota = await gamesModel.getById(parseInt(id));

      if (!nota) {
        return res.status(404).json({ erro: "Anotação não encontrada" });
      }

      res.json(nota);
    } catch (error) {
      console.error(error);
      res.status(500).json({ erro: "Erro ao buscar anotação" });
    }
  };
}

export default new GamesController();