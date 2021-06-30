const { User, Coin } = require("../models");
const { AuthenticationError } = require("apollo-server-express");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate("coins");
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId }).populate("coins");
    },
  },

  Mutation: {
    addUser: async (parent, { userName, email, password }) => {
      const user = await User.create({ userName, email, password });
      const token = signToken(user);

      return { token, user };
    },
    login: async (parent, { userName, password }) => {
      const user = await User.findOne({ userName });

      if (!user) {
        throw new AuthenticationError("No profile with this username found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },

    addCoin: async (parent, { userId, coin }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { coins: coin },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },

    removeCoin: async (parent, { userId, coin }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { coins: coin } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;
