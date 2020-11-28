module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'mongoose',
      settings: {
        client: 'mongo',
        uri: 'mongodb+srv://khanhhoang:1231231A@cluster0.pe8bj.mongodb.net/Cluster0?retryWrites=true&w=majority'
      },
      options: {
        useNullAsDefault: true,
        ssl: true
      },
    },
  },
});
