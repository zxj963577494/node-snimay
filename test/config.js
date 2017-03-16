const moment = require('moment')

module.exports = {
  user: {
    name: 'test',
    password: '123456',
    isEnable: 1
  },
  ActivitiesBody: {
    title: '诗尼曼全屋定制315家装节',
    content: '',
    description: '诗尼曼全国门店进行315家装大促活动，全屋定制99元起，钜惠空前，赶紧行动吧！！',
    isVisible: 1,
    pic: 'http://www.snimay.com/Uploads/article/original_img/1487816952.jpg',
    startTime: moment().subtract(1, 'M'),
    endTime: moment().add(1, 'M')
  },
  BannersBody: {
    title: '2016新款衣柜移门',
    content: '',
    description: '诗尼曼时尚新款衣柜移门，8月重磅推出。诗尼曼全屋定制携15款现代时尚新衣柜移门款款而来，柔情浪漫，为燥热难耐的夏末初秋徐徐送来一股清新时尚风。',
    price: '998',
    isVisible: 1,
    pic: 'http://www.snimay.com/join.html',
    startTime: moment().subtract(1, 'M'),
    endTime: moment().add(1, 'M'),
    link: 'http://www.baidu.com',
    sort: 6
  },
  CategoriesBody: {
    title: '空间',
    sort: 4,
    alias: 'kj',
    isVisible: 1
  },
  ConsultsBody: {
    name: 'zhengxujiang',
    tel: '13666666666'
  },
  MatchesBody: {
    categories: '586c5b6a4e5aad1c1751b373,3',
    title: '莫斯科 SF-B1701A_北欧风格 羽绒填充 可拆洗布艺沙发',
    isIndex: 1,
    isVisible: 1,
    code: '801',
    part: '右贵妃+三人位左 灰色',
    skPic: 'http://image.jiaju100.com/20170220/20144017bl65.jpg',
    sliderPics: 'http://image.jiaju100.com/20170220/20144017bl65.jpg,http://image.jiaju100.com/20170220/2014401971wd.jpg,http://image.jiaju100.com/20170220/20144022r39k.jpg,http://image.jiaju100.com/20170220/20144024og0j.jpg',
    search: '莫斯科,北欧风格,沙发',
    where: 'sf',
    tag: '莫斯科,北欧风格,沙发',
    description: '莫斯科 SF-B1701A_北欧风格 羽绒填充 可拆洗布艺沙发 右贵妃+三人位左 灰色',
    price: '5148.00',
    content: ''
  },
  UsersBody: {
    name: 'admin',
    password: '13555555555',
    email: '963577494@qq.com',
    isEnable: 1
  },
  WebsitesBody: {
    title: '诗尼曼',
    host: 'http://localhost:4000/',
    description: '描述',
    keywords: '关键字',
    copyright: '版权',
    address: '描述',
    icp: '关键字',
    tel: '13666666666',
    qq: '963577494',
    weibo: '关键字',
    email: '963577494@qq.com'
  },
  SelectorsHeadsBody: {
    title: '定制书房',
    sort: 1,
    alias: 'ddsf',
    isVisible: 1
  },
  SelectorsBodysBody: {
    title: '书柜组合',
    sort: 1,
    alias: 'sgzh',
    isVisible: 1
  }
}
