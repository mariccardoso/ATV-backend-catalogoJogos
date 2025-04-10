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

  update = async (
    id, 
    title, 
    price, 
    releaseYear, 
    developer, 
    genres, 
    platforms,
    imageUrl
  ) => {
    try {
      return await prisma.game.update({
        where: { id },
        data: {
          title,
          price,
          releaseYear,
          developer,
          genres,
          platforms,
          imageUrl,
        },
      });
    } catch (error) {
      // Se o jogo não for encontrado, o Prisma lançará uma exceção
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
      // Se o jogo não for encontrado, o Prisma lançará uma exceção
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