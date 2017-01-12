module.exports = {
  port: 4000,
  session: {
    secret: 'snimay',
    key: 'snimay',
    maxAge: 2592000000
  },
  cookie: 'snimay',
  qiniu: {
    ACCESS_KEY: 'oCHYMgnqR8-3VQtmNkiJIpqunOZcScuSKqIkS3ls',
    SECRET_KEY: 'bVYf_V0gRv64Sa679XJCfPATFStQPACvVjsxQR83',
    BUCKET: 'snimay',
    UPLOAD_ORIGIN: 'http://snimay.u.qiniudn.com/',
    BROWSE_ORIGIN: 'http://ojejh4mx9.bkt.clouddn.com/'
  },
  baiduMap: {
    ak: 'GkSpNtvicNBxmNPHU9I3APgCMXjoH4ve',   // 百度地图 ak
    point: "120.736816,28.860294",            // 百度地图经纬度
    mapText: "诗尼曼家具店",                    // 地图文字显示内容
    mapMouseoverTxt: "诗尼曼家具店",            // 当鼠标悬浮时，地图文字显示内容
  },
  mongodb: 'mongodb://localhost:27017/snimay'
};