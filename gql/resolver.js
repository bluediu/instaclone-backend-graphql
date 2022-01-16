const userCtrl = require('../controllers/user');
const { GraphQLUpload } = require('graphql-upload');

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    // User
    getUser: (_, { id, username }) =>
      userCtrl.getUser(id, username),
  },
  Mutation: {
    // User
    register: (_, { input }) =>
      userCtrl.registerController(input),
    login: (_, { input }) => userCtrl.loginController(input),
    updateAvatar: (_, { file }, ctx) =>
      userCtrl.updateAvatar(file, ctx),
    deleteAvatar: (_, {}, ctx) => userCtrl.deleteAvatar(ctx),
  },
};

module.exports = resolvers;
