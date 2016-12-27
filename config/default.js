module.exports = {
  port: 3000,
  session: {
    secret: 'snimay',
    key: 'snimay',
    maxAge: 2592000000
  },
  mongodb: 'mongodb://localhost:27017/snimay'
};