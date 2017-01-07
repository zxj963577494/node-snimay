module.exports = {
  port: 4000,
  session: {
    secret: 'snimay',
    key: 'snimay',
    maxAge: 2592000000
  },
  qiniu: {
    ACCESS_KEY: 'oCHYMgnqR8-3VQtmNkiJIpqunOZcScuSKqIkS3ls',
    SECRET_KEY: 'bVYf_V0gRv64Sa679XJCfPATFStQPACvVjsxQR83',
    BUCKET: 'snimay'
  },
  mongodb: 'mongodb://localhost:27017/snimay'
};