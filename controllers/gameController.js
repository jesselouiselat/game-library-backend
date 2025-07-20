import Game from "../models/Game.js";

export const getGames = async (req, res) => {
  try {
    const games = await Game.find();
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const getGameById = async (req, res) => {
  const { id } = req.params;
  try {
    const game = await Game.findById(id);
    res.status(200).json(game);
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export const addGame = async (req, res) => {
  const { title, genre, platform, releaseYear, description } = req.body;

  try {
    const newGame = new Game({
      title,
      genre,
      platform,
      releaseYear,
      description,
    });
    await newGame.save();
    res
      .status(201)
      .json({ message: `${title} is successfully added.`, game: newGame });
  } catch (error) {
    res.status(500).json({ message: "Server error,", error: error.message });
  }
};

export const editGame = async (req, res) => {
  const { id } = req.params;
  const { title, genre, platform, releaseYear, description } = req.body;
  try {
    const updatedGame = await Game.findByIdAndUpdate(
      id,
      {
        title,
        genre,
        platform,
        releaseYear,
        description,
      },
      { new: true }
    );
    if (!updatedGame)
      return res.status(404).json({ message: "Game not found." });
    res
      .status(201)
      .json({ message: `${title} has been updated.`, game: updatedGame });
  } catch (error) {
    res.status(500).json({ message: "Server error,", error: error.message });
  }
};

export const deleteGame = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedGame = await Game.findByIdAndDelete(id);
    if (!deletedGame)
      return res.status(404).json({ message: "Game not found." });
    res.status(200).json({ message: `${deletedGame.title} has been deleted` });
  } catch (error) {
    res.status(500).json({ message: "Server error,", error: error.message });
  }
};

export const searchGames = async (req, res) => {
  const { title, genre, platform } = req.query;

  try {
    const filter = {};

    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }

    if (genre) {
      filter.genre = { $regex: genre, $options: "i" };
    }

    if (platform) {
      filter.platform = { $regex: platform, $options: "i" };
    }

    const searchResults = await Game.find(filter);

    res.status(200).json(searchResults);
  } catch (error) {
    res.status(500).json({ message: "Server error,", error: error.message });
  }
};
