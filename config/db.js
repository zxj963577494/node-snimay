const ObjectId = require('mongodb').ObjectID


module.exports = {
  categories: [{
    '_id': ObjectId('586c5ac48fc4b61b883393df'),
    'alias': 'products',
    'createTime': new Date(),
    'id': 1,
    'isVisible': 1,
    'keys': [],
    'lastModifyTime': new Date(),
    'sort': 3,
    'title': '产品体验'
  },
  {
    '_id': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
    'alias': 'modes',
    'createTime': new Date(),
    'id': 2,
    'isVisible': 1,
    'keys': [],
    'lastModifyTime': new Date(),
    'sort': 2,
    'title': '定制家具'
  },
  {
    '_id': ObjectId('586c5b6a4e5aad1c1751b373'),
    'alias': 'matches',
    'createTime': new Date(),
    'id': 3,
    'isVisible': 1,
    'keys': [],
    'lastModifyTime': new Date(),
    'sort': 1,
    'title': '配套家具'
  }
  ],
  selectors: [{
    'alias': 'kj',
    'cid': 1,
    'createTime': new Date(),
    'id': 1,
    'isVisible': 1,
    'lastModifyTime': new Date(),
    'sort': 2,
    'title': '空间',
    'values': [{
      'sort': 6,
      'isVisible': 1,
      'title': '全部',
      'alias': 'all'
    },
    {
      'sort': 5,
      'isVisible': 1,
      'title': '卧房',
      'alias': 'wf'
    },
    {
      'sort': 4,
      'isVisible': 1,
      'title': '客厅',
      'alias': 'kt'
    },
    {
      'sort': 3,
      'isVisible': 1,
      'title': '餐厅',
      'alias': 'ct'
    },
    {
      'sort': 2,
      'isVisible': 1,
      'title': '书房',
      'alias': 'sf'
    },
    {
      'sort': 1,
      'isVisible': 1,
      'title': '儿童房',
      'alias': 'etf'
    }
    ]
  },
  {
    'alias': 'fg',
    'cid': 1,
    'createTime': new Date(),
    'id': 2,
    'isVisible': 1,
    'lastModifyTime': new Date(),
    'sort': 1,
    'title': '风格',
    'values': [{
      'sort': 6,
      'isVisible': 1,
      'title': '全部',
      'alias': 'all'
    },
    {
      'sort': 5,
      'isVisible': 1,
      'title': '简欧风格',
      'alias': 'jo'
    },
    {
      'sort': 4,
      'isVisible': 1,
      'title': '欧式风格',
      'alias': 'os'
    },
    {
      'sort': 3,
      'isVisible': 1,
      'title': '都市时尚风格',
      'alias': 'ss'
    },
    {
      'sort': 2,
      'isVisible': 1,
      'title': '现代简约风格',
      'alias': 'jy'
    },
    {
      'sort': 1,
      'isVisible': 1,
      'title': '新中式风格',
      'alias': 'xzs'
    }
    ]
  },
  {
    'alias': 'kj',
    'cid': 2,
    'createTime': new Date(),
    'id': 3,
    'isVisible': 1,
    'lastModifyTime': new Date(),
    'sort': 1,
    'title': '空间',
    'values': [{
      'sort': 5,
      'isVisible': 1,
      'title': '全部',
      'alias': 'all'
    },
    {
      'sort': 4,
      'isVisible': 1,
      'title': '定制卧房',
      'alias': 'wf'
    },
    {
      'sort': 3,
      'isVisible': 1,
      'title': '定制书房',
      'alias': 'sf'
    },
    {
      'sort': 2,
      'isVisible': 1,
      'title': '定制儿童房',
      'alias': 'etf'
    },
    {
      'sort': 1,
      'isVisible': 1,
      'title': '定制客餐厅',
      'alias': 'kct'
    }
    ]
  },
  {
    'alias': 'jj',
    'cid': 3,
    'createTime': new Date(),
    'id': 4,
    'isVisible': 1,
    'lastModifyTime': new Date(),
    'sort': 1,
    'title': '家具',
    'values': [{
      'sort': 10,
      'isVisible': 1,
      'title': '全部',
      'alias': 'all'
    },
    {
      'sort': 9,
      'isVisible': 1,
      'title': '软床类',
      'alias': 'rc'
    },
    {
      'sort': 8,
      'isVisible': 1,
      'title': '床垫类',
      'alias': 'cd'
    },
    {
      'sort': 7,
      'isVisible': 1,
      'title': '沙发类',
      'alias': 'sf'
    },
    {
      'sort': 6,
      'isVisible': 1,
      'title': '茶几',
      'alias': 'cj'
    },
    {
      'sort': 5,
      'isVisible': 1,
      'title': '边几',
      'alias': 'bj'
    },
    {
      'sort': 4,
      'isVisible': 1,
      'title': '餐桌椅',
      'alias': 'czy'
    },
    {
      'sort': 3,
      'isVisible': 1,
      'title': '单椅',
      'alias': 'dy'
    },
    {
      'sort': 2,
      'isVisible': 1,
      'title': '枕头',
      'alias': 'zt'
    },
    {
      'sort': 1,
      'isVisible': 1,
      'title': '单品',
      'alias': 'dp'
    }
    ]
  }
  ],
  activities: [
    {
      'content': '',
      'createTime': new Date() + 10,
      'description': '诗尼曼全屋定制，定制您的幸福家。在线免费预约量尺，一站式整体空间解决方案。',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'id': 1,
      'isVisible': 1,
      'lastModifyTime': new Date() + 20,
      'pic': 'http://ojejh4mx9.bkt.clouddn.com/product/public/uploads/1484547958548.jpg',
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '免费预约量尺'
    },
    {
      'content': '',
      'createTime': new Date() + 30,
      'description': '面临如今寸金寸土的高房价，小户型深受广大业主的青睐，但不意味着要牺牲居住品质，小户型也要住得宽敞。诗尼曼全屋定制空间大师，可根据空间特点量身定制，科学设计...',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'id': 2,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'pic': 'http://ojejh4mx9.bkt.clouddn.com/product/public/uploads/1484548108187.jpg',
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '诗尼曼全屋定制空间大师'
    },
    {
      'content': '',
      'createTime': new Date() + 40,
      'description': '唐顿庄园系列是诗尼曼2016年推出的高端全屋定制系列产品。设计灵感起源于英国著名电视剧《唐顿庄园》，剧中大气的府邸，考究的家具以及全剧中散发出...',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'id': 3,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'pic': 'http://ojejh4mx9.bkt.clouddn.com/product/public/uploads/1484548206928.jpg',
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '诗尼曼新品-唐顿庄园全屋定制'
    },
    {
      'content': '',
      'createTime': new Date() + 50,
      'description': 'E·灵动-1房变3房，可成长性家居。满足房屋使用者在不同时期、不同阶段的需求变化，利用多功能、组合式的家具，巧妙地根据不同年龄段实际需要搭配。',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'id': 4,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'pic': 'http://ojejh4mx9.bkt.clouddn.com/product/public/uploads/1484548265871.jpg',
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '诗尼曼新品-E灵动系列'
    },
    {
      'content': '',
      'createTime': new Date() + 60,
      'description': '诗尼曼全屋定制正品保证承诺。我是诗尼曼全屋定制，我承诺100%原厂制作，100%品质保证。我为我的品牌代言，我的我的客户负责！',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'id': 5,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'pic': 'http://ojejh4mx9.bkt.clouddn.com/product/public/uploads/1484548309338.jpg',
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '诗尼曼正品保证险'
    }
  ],
  banners: [
    {
      'createTime': new Date(),
      'description': '首创定制红檀木色系，采用吸塑做旧工艺，将欧洲皇家家具融入中式的静幽韵味。引进德国高端IP进口饰面，纹路清晰典雅，浅浮雕纹手感细腻，品质卓越。',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'link': 'http://baidu.com',
      'pic': 'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251608541744.jpg',
      'price': 0,
      'sort': 5,
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '唐顿庄园书房'
    },
    {
      'createTime': new Date(),
      'description': '星光系列让家具定制回归自然，把夜空、流星、宇宙等元素融于设计中，向大自然致敬。同时，玩转模块化组合，把全屋定制主导权交回给消费者，轻松设计，自由发挥，符合现代青年大众的时尚小资生活。',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'link': 'http://baidu.com',
      'pic': 'http://www.snimay.com/Uploads/Album/20160712/original_img/201607121221478912.jpg',
      'price': 0,
      'sort': 4,
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '星光系列餐厅'
    },
    {
      'createTime': new Date(),
      'description': '印象极简用最简洁、最质朴的家具定制设计理念，将西方的极简文化与东方传统的居家归属感相融合，以线条色块来区分点缀，做到功能的最直白表达。',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'link': 'http://baidu.com',
      'pic': 'http://www.snimay.com/Uploads/Album/20160626/original_img/201606261432232977.jpg',
      'price': 0,
      'sort': 3,
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '印象极简系列'
    },
    {
      'createTime': new Date(),
      'description': '空间以大面积的蓝白为主色调，烘托热烈浪漫的氛围。埃菲尔造型衣柜取代床头柜，45°角的线条工艺精湛有质感，掩门设计更方便取用衣物。',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'link': 'http://baidu.com',
      'pic': 'http://image.jiaju100.com/userfiles/images/dzjjwfA02.jpg',
      'price': 0,
      'sort': 2,
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '地中海风格主卧'
    },
    {
      'createTime': new Date(),
      'description': '诗尼曼STC-6004餐桌椅组合诗尼曼STC-6004餐桌椅组合诗尼曼STC-6004餐桌椅组合诗尼曼STC-6004餐桌椅组合',
      'endTime': new Date('2020-12-30T08:00:00.000+08:00'),
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'link': 'http://baidu.com',
      'pic': 'http://image.jiaju100.com/userfiles/images/dwl/peitaojiaju/canzuoyi/STC-6004/stc6004122301.jpg',
      'price': 0,
      'sort': 1,
      'startTime': new Date('2017-01-01T08:00:00.000+08:00'),
      'title': '诗尼曼STC-6004餐桌椅组合'
    }
  ],
  products: [
    {
      'categoryRef': ObjectId('586c5ac48fc4b61b883393df'),
      'cid': 1,
      'code': '001',
      'content': '详细内容',
      'createTime': new Date(),
      'description': '唐顿庄园系列是诗尼曼2016年推出的高端全屋定制系列产品。设计灵感起源于英国著名电视剧《唐顿庄园》，剧中大气的府邸，考究的家具以及全剧中散发出的诚实、勇敢、自由，无不反应出当时贵族生活中的家族荣耀和传承精神。',
      'id': 1,
      'isHome': 1,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 100,
      'search': [
        '唐顿庄园',
        '卧室'
      ],
      'skPic': 'http://www.snimay.com/Uploads/goods/1468656683.jpg',
      'sliderPics': [
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509529872.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509531749.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509534950.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509546439.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251509543236.jpg'
      ],
      'tag': [
        '唐顿庄园',
        '欧式'
      ],
      'title': '唐顿庄园-卧室',
      'where': [
        'all',
        'os',
        'wf'
      ]
    },
    {
      'categoryRef': ObjectId('586c5ac48fc4b61b883393df'),
      'cid': 1,
      'code': '002',
      'content': '详细内容',
      'createTime': new Date(),
      'description': '印象极简用最简洁、最质朴的家具定制设计理念，将西方的极简文化与东方传统的居家归属感相融合，以线条色块来区分点缀，做到功能的最直白表达。',
      'id': 2,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 200,
      'search': [
        '印象极简'
      ],
      'skPic': 'http://www.snimay.com/Uploads/Album/20160626/original_img/201606261432232977.jpg',
      'sliderPics': [
        'http://www.snimay.com/Uploads/Album/20160626/original_img/201606261432232977.jpg',
        'http://www.snimay.com/Uploads/Album/20160626/original_img/201606261432239580.jpg',
        'http://www.snimay.com/Uploads/Album/20160626/original_img/201606261432234956.jpg',
        'http://www.snimay.com/Uploads/Album/20160626/original_img/201606261432246006.jpg'
      ],
      'tag': [
        '印象极简'
      ],
      'title': '印象极简系列',
      'where': [
        'all',
        'jy'
      ]
    },
    {
      'categoryRef': ObjectId('586c5ac48fc4b61b883393df'),
      'cid': 1,
      'code': '003',
      'content': '详细内容',
      'createTime': new Date(),
      'description': '星光系列让家具定制回归自然，把夜空、流星、宇宙等元素融于设计中，向大自然致敬。同时，玩转模块化组合，把全屋定制主导权交回给消费者，轻松设计，自由发挥，符合现代青年大众的时尚小资生活。',
      'id': 3,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 300,
      'search': [
        '星光'
      ],
      'skPic': 'http://www.snimay.com/Uploads/Album/20160712/original_img/201607121221478912.jpg',
      'sliderPics': [
        'http://www.snimay.com/Uploads/Album/20160712/original_img/201607121221478912.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251626395153.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251626406501.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251626406501.jpg'
      ],
      'tag': [
        '星光'
      ],
      'title': '星光系列餐厅',
      'where': [
        'all',
        'ct'
      ]
    },
    {
      'categoryRef': ObjectId('586c5ac48fc4b61b883393df'),
      'cid': 1,
      'code': '004',
      'content': '详细内容',
      'createTime': new Date(),
      'description': '首创定制红檀木色系，采用吸塑做旧工艺，将欧洲皇家家具融入中式的静幽韵味。引进德国高端IP进口饰面，纹路清晰典雅，浅浮雕纹手感细腻，品质卓越。',
      'id': 4,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 300,
      'search': [
        '唐顿庄园'
      ],
      'skPic': 'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251608541744.jpg',
      'sliderPics': [
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251608541744.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251608542663.jpg',
        'http://www.snimay.com/Uploads/Album/20160625/original_img/201606251608542097.jpg'
      ],
      'tag': [
        '唐顿庄园'
      ],
      'title': '唐顿庄园书房',
      'where': [
        'all',
        'sf',
        'os'
      ]
    },
    {
      'categoryRef': ObjectId('586c5ac48fc4b61b883393df'),
      'cid': 1,
      'code': '005',
      'content': '详细内容',
      'createTime': new Date(),
      'description': '宝贝的事无小事，儿童房家具定制要充满创意和童趣，又可以随着成长灵活变换。给宝贝最细致的关爱和最贴心的呵护，环保、安全和细节，一样都不能打折，爱他就给他最好的。',
      'id': 5,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 500,
      'search': [
        'Basic',
        '儿童房'
      ],
      'skPic': 'http://www.snimay.com/Uploads/Album/20160908/original_img/201609081536468337.jpg',
      'sliderPics': [
        'http://www.snimay.com/Uploads/Album/20160908/original_img/201609081536468337.jpg',
        'http://www.snimay.com/Uploads/Album/20160908/original_img/201609081536466647.jpg',
        'http://www.snimay.com/Uploads/Album/20160908/original_img/201609081536465876.jpg',
        'http://www.snimay.com/Uploads/Album/20160908/original_img/201609081536467943.jpg'
      ],
      'tag': [
        'Basic',
        '儿童房'
      ],
      'title': 'Basic系列儿童房',
      'where': [
        'all',
        'etf'
      ]
    },
    {
      'categoryRef': ObjectId('586c5ac48fc4b61b883393df'),
      'cid': 1,
      'code': '006',
      'content': '详细内容',
      'createTime': new Date(),
      'description': '推拉门型材直边微小光顺过度，搭配优质下滑轮，推拉轻便顺畅；两轨推拉和三轨推拉带金刚网，高轨道和低轨道可选择，产品颜色和玻璃款式多样化，满足大众更多需求。',
      'id': 6,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 600,
      'search': [
        '拉门',
        '中型'
      ],
      'skPic': 'http://www.snimay.net/Upload/Images/20160719/0b56f701f76347b2b9c9a31b5895311b.jpg',
      'sliderPics': [
        'http://www.snimay.net/Upload/Images/20160719/0b56f701f76347b2b9c9a31b5895311b.jpg',
        'http://www.snimay.net/Upload/Images/20160719/3d08cad4b8914cb6b055792ffcca4078.jpg',
        'http://www.snimay.net/Upload/Images/20160719/e1e3c76f383b44beaf6bed93b92ba01f.jpg',
        'http://www.snimay.net/Upload/Images/20160719/2ed3c37591f64290955efb270dab2b3b.jpg'
      ],
      'tag': [
        '柏林中型',
        '推拉门'
      ],
      'title': '柏林中型推拉门系列',
      'where': [
        'all',
        'mc'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 2,
      'code': '515',
      'content': '',
      'createTime': new Date(),
      'description': '空间用色不多，通过软装搭配来满足对时尚感的需求。包围式的鞋柜到顶，转角利用，储物空间非常强大。餐边柜和电视柜造型方正，简约时尚，兼具实用性。整体搭配利落美观，给人舒适感。',
      'id': 7,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': null,
      'search': [
        '客餐厅',
        '现代时尚'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dzjjkctA01.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20160824/24141310by54.jpg',
        'http://image.jiaju100.com/20160824/24141312e85i.jpg',
        'http://image.jiaju100.com/20160824/24141319x9lf.jpg',
        'http://image.jiaju100.com/20160824/24141314bpkh.jpg'
      ],
      'tag': [
        '客餐厅',
        '现代时尚'
      ],
      'title': '现代时尚客餐厅',
      'where': [
        'all'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 2,
      'code': '515',
      'content': '',
      'createTime': new Date(),
      'description': '绿植，碎花壁纸，布艺沙发，给人一种贴近自然的生活气息。玄关鞋柜内嵌，恰到好处地利用空间。储物柜主色是白枫，置物架用了宫廷黄点缀，素雅中又带亮色，不呆板，不花哨。客餐厅合理布局，打造轻松舒适的氛围。',
      'id': 8,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '12件套(电视柜组合+鞋柜组合+装饰柜+吊柜+餐边柜+收纳柜+酒柜)',
      'price': 8333,
      'search': [
        '田园',
        '客餐厅'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dzjjkctA02.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20160824/24141310by54.jpg',
        'http://image.jiaju100.com/20160824/24141312e85i.jpg',
        'http://image.jiaju100.com/20160824/24141319x9lf.jpg',
        'http://image.jiaju100.com/20160824/24141314bpkh.jpg'
      ],
      'tag': [
        '田园',
        '客餐厅'
      ],
      'title': '田园风格客餐厅',
      'where': [
        'all',
        'kct'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 2,
      'code': '525',
      'content': '',
      'createTime': new Date(),
      'description': '根据户型和业主对空间舒适度的追求，皮床与定制柜的整体搭配很大气，浪漫飘窗有收纳功能，卧室电视柜与梳妆台合理利用空间，百叶移门衣柜简约时尚。',
      'id': 9,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '13件套(衣柜+收纳柜+床/床头柜+电视柜组合+梳妆台/凳+飘窗利用+吊柜+床垫)',
      'price': 26128,
      'search': [
        '主卧',
        '现代简约'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dzjjwfA01.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20160824/241454231beo.jpg',
        'http://image.jiaju100.com/20160824/241454253oxt.jpg',
        'http://image.jiaju100.com/20160824/24145427qk87.jpg'
      ],
      'tag': [
        '主卧',
        '现代简约'
      ],
      'title': '现代简约主卧',
      'where': [
        'all',
        'jy'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 2,
      'code': '341',
      'content': '',
      'createTime': new Date(),
      'description': '空间以大面积的蓝白为主色调，烘托热烈浪漫的氛围。埃菲尔造型衣柜取代床头柜，45°角的线条工艺精湛有质感，掩门设计更方便取用衣物。',
      'id': 10,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '7件套(衣柜+床/床头柜+电视柜组合+吊柜)',
      'price': 29678,
      'search': [
        '地中海',
        '主卧'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dzjjwfA02.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/201603/24202132i5br.jpg',
        'http://image.jiaju100.com/201603/24202135iy4u.jpg'
      ],
      'tag': [
        '地中海',
        '主卧'
      ],
      'title': '地中海风格主卧',
      'where': [
        'all',
        'zw'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 2,
      'code': '405',
      'content': '',
      'createTime': new Date(),
      'description': '缤纷活泼的墙面装饰给人欢乐愉悦的印象，柜子用宫廷黄和象牙白来提升亮度，波尔多印象板材有木的质感，给人温暖的感觉。整体布局紧凑，书桌柜一体，实用性强。侧柜做成开放式，方便存放玩具书包和其他物品。',
      'id': 11,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '6件套(衣柜+床/床头柜+书桌/电脑台组合+吊柜/壁柜)',
      'price': 9057,
      'search': [
        '极简风格',
        '儿童房'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dzjjnhfA01.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20160526/26113456rsfq.jpg',
        'http://image.jiaju100.com/20160526/26113458s73j.jpg',
        'http://image.jiaju100.com/20160526/26113500c6yl.jpg'
      ],
      'tag': [
        '极简风格',
        '儿童房'
      ],
      'title': '极简风格男生儿童房定制家具摆放图',
      'where': [
        'all',
        'etf'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 2,
      'code': '219',
      'content': '',
      'createTime': new Date(),
      'description': '飘窗柜与榻榻米整体打造了儿童房的强大储物空间。榻榻米单元柜设计成翻盖形式，收纳物品一目了然，取放方便。衣柜到顶，顶柜延伸，侧柜作圆弧处理，人性化设计防止孩子磕碰撞伤。白枫和象牙白两种板材色让房间素雅清淡，给孩子营造温馨舒适的起居空间。',
      'id': 12,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '套件数：8件套(衣柜+榻榻米+装饰柜+吊柜+书桌/电脑台组合)',
      'price': 17888,
      'search': [
        '现代简约',
        '榻榻米'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dzjjttmA01.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/201512/25092823vmvc.jpg',
        'http://image.jiaju100.com/201512/25092825ae13.jpg',
        'http://image.jiaju100.com/201512/25092828t6x9.jpg'
      ],
      'tag': [
        '现代简约',
        '榻榻米'
      ],
      'title': '现代简约风格榻榻米卧房',
      'where': [
        'all',
        'wf'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 3,
      'code': '647',
      'content': '',
      'createTime': new Date(),
      'description': '',
      'id': 13,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '餐椅*2',
      'price': 1100,
      'search': [
        '餐桌椅',
        'STC-6004'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dwl/peitaojiaju/canzuoyi/STC-6004/stc6004122301.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20161223/23142822tqet.jpg',
        'http://image.jiaju100.com/20161223/23142828mwrt.jpg',
        'http://image.jiaju100.com/20161223/23142837jnrj.jpg',
        'http://image.jiaju100.com/20161223/231428527zj7.jpg',
        'http://image.jiaju100.com/20161223/23142859bnpo.jpg'
      ],
      'tag': [
        '餐桌椅',
        'STC-6004'
      ],
      'title': '诗尼曼 STC-6004 餐桌椅组合',
      'where': [
        'all',
        'czy'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 3,
      'code': '645',
      'content': '',
      'createTime': new Date(),
      'description': '',
      'id': 14,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '至尊记忆枕*2+儿童记忆枕*1',
      'price': 588,
      'search': [
        '记忆枕',
        '儿童记忆枕'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dwl/peitaojiaju/zhentou/dlb16122201.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20161222/221126164p13.jpg',
        'http://image.jiaju100.com/20161222/221126205o14.jpg',
        'http://image.jiaju100.com/20161222/22112641t6iw.jpg',
        'http://image.jiaju100.com/20161222/22112629iyyc.jpg',
        'http://image.jiaju100.com/20161222/22112706rbgh.jpg'
      ],
      'tag': [
        '记忆枕',
        '儿童记忆枕'
      ],
      'title': '诗尼曼 SPL-6086 相知相伴大礼包',
      'where': [
        'all',
        'zt'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 3,
      'code': '352',
      'content': '',
      'createTime': new Date(),
      'description': '',
      'id': 15,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 4633,
      'search': [
        '雅典娜',
        '简欧风格'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/peitaojiaju/chuang/yadianya/yadiannamihuangse.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20160826/26162609olc4.jpg',
        'http://image.jiaju100.com/20160826/26162610l57s.jpg',
        'http://image.jiaju100.com/20160826/26162610qclt.jpg',
        'http://image.jiaju100.com/20160826/261626102moy.jpg',
        'http://image.jiaju100.com/20160826/261626106q0q.jpg'
      ],
      'tag': [
        '雅典娜',
        '简欧风格'
      ],
      'title': '雅典娜 CHJ1501_简欧风格 贵族经典 小户型私享',
      'where': [
        'all',
        'rc'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 3,
      'code': '574',
      'content': '',
      'createTime': new Date(),
      'description': '',
      'id': 16,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 2461,
      'search': [
        '诗尼曼',
        '真皮沙发'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dwl/peitaojiaju/shafa/sf1602/sf160208.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20161110/10175523y8xw.jpg',
        'http://image.jiaju100.com/20161110/10175529pmz8.jpg',
        'http://image.jiaju100.com/20161110/10175603lde4.jpg',
        'http://image.jiaju100.com/20161110/10175620icei.jpg',
        'http://image.jiaju100.com/20161123/23110445osxb.jpg'
      ],
      'tag': [
        '诗尼曼',
        '真皮沙发'
      ],
      'title': '诗尼曼 SF-P1602N_稳重大气品味款_现代真皮沙发',
      'where': [
        'all',
        'sf'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 3,
      'code': '524',
      'content': '',
      'createTime': new Date(),
      'description': '',
      'id': 17,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '',
      'price': 2461,
      'search': [
        '诗尼曼',
        'CY-6005'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dwl/peitaojiaju/danyi/CY-600502.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20161110/10154942pqba.jpg',
        'http://image.jiaju100.com/20161110/10154947cjwg.jpg',
        'http://image.jiaju100.com/20161115/15104325pq9x.jpg'
      ],
      'tag': [
        '诗尼曼',
        'CY-6005'
      ],
      'title': '诗尼曼 CY-6005 现代简约风格',
      'where': [
        'all',
        'cj'
      ]
    },
    {
      'categoryRef': ObjectId('586c5b51e3a6cb1bf36cf3eb'),
      'cid': 3,
      'code': '563',
      'content': '',
      'createTime': new Date(),
      'description': '',
      'id': 18,
      'isIndex': 1,
      'isVisible': 1,
      'lastModifyTime': new Date(),
      'part': '单椅',
      'price': 659,
      'search': [
        '诗尼曼',
        'CJ-6005'
      ],
      'skPic': 'http://image.jiaju100.com/userfiles/images/dwl/peitaojiaju/bianji/CJ-600602.jpg',
      'sliderPics': [
        'http://image.jiaju100.com/20161110/101544366wx7.jpg',
        'http://image.jiaju100.com/20161110/101544391xmm.jpg',
        'http://image.jiaju100.com/20161110/101544465d9o.jpg',
        'http://image.jiaju100.com/20161110/10154450nujk.jpg'
      ],
      'tag': [
        '诗尼曼',
        'CJ-6005'
      ],
      'title': '诗尼曼 CJ-6006 现代简约风格创意边几',
      'where': [
        'all',
        'bj'
      ]
    }
  ]
}
