const { User, Coin } = require("../models");

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
    addUser: async (parent, { userName, email }) => {
      return User.create({ userName, email });
    },

    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
  },
};

module.exports = resolvers;
