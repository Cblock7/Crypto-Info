const db = require("../config/connection");
const { User, Coin } = require("../models");
const userSeeds = require("./userSeeds.json");
const coinSeeds = require("./coinSeeds.json");

db.once("open", async () => {
  try {
    await User.deleteMany({});
    await Coin.deleteMany({});

    await User.create(userSeeds);
    await Coin.create(coinSeeds);

    console.log("seeding complete!");
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
