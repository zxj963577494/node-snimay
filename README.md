# node-snimay

[![Build Status](https://travis-ci.org/zxj963577494/node-snimay.svg?branch=promise)](https://travis-ci.org/zxj963577494/node-snimay)
[![Coverage Status](https://coveralls.io/repos/github/zxj963577494/node-snimay/badge.svg?branch=promise)](https://coveralls.io/github/zxj963577494/node-snimay?branch=promise)

## Example

[https://snimay.herokuapp.com/](https://snimay.herokuapp.com/)

[https://snimay.herokuapp.com/signin](https://snimay.herokuapp.com/signin)

user:admin666
password:123456

[API Documentation](http://apizza.cc/console/project/2ad1dd97816daa24d7bc655458a4f0a3/browse)
or
[API Documentation](https://github.com/zxj963577494/node-snimay/blob/promise/API.md)

## Quick Start Install

you’ll need **Node.js v6 LTS**

1. git clone https://github.com/zxj963577494/node-snimay.git
1. cd node-snimay
1. npm install
1. Start node-snimay
    - Local environment: `npm run dev`
    - On a server: `npm start`
1. Web Application Init
    - Local environment: `http://localhost:4000/admin/install`
    - On a server: `http://localhost:80/admin/install`

## Usage

### ```config/default.js``` Or ```config/production.js```

```
  qiniu: {
    ACCESS_KEY: 'xxxxxxx',
    SECRET_KEY: 'xxxxxxx',
    BUCKET: 'xxxxxxx',
    UPLOAD_ORIGIN: 'http://xxxxxxx.u.qiniudn.com/',
    BROWSE_ORIGIN: 'xxxxxxx'
  },
```



