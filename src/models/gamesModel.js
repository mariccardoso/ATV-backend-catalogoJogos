import prisma from "../../prisma/client.js";

class GamesModel {
  getAll = async () => {
    return await prisma.game.findMany();
  };

  create = async (title, price, developer ) => {
    return await prisma.game.create({
      data: {
        title,
        price,
        developer,
      },
    });
  };

  update = async (id, favorita, cor, titulo, conteudo) => {
    console.log();
    
    try {
      return await prisma.game.update({
        where: { id },
        data: {
          favorita: favorita !== undefined ? favorita : true,
          titulo,
          cor,
          conteudo
        },
      });
    } catch (error) {
      // Se a Games não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return null;
      }
      throw error;
    }
  };

  delete = async (id) => {
    try {
      await prisma.game.delete({
        where: { id },
      });
      return true;
    } catch (error) {
      // Se a tarefa não for encontrada, o Prisma lançará uma exceção
      if (error.code === "P2025") {
        return false;
      }
      throw error;
    }
  };

  getById = async (id) => {
    return await prisma.game.findUnique({
      where: { id },
    });
  };
}

export default new GamesModel();