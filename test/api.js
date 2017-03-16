const supertest = require('supertest')
const app = require('../index')
const request = supertest(app)
const config = require('./config')

describe('API', function () {
  let userid = ''
  before(function (done) {
    request.post('/api/v1/users/admin')
    .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        userid = res.body._id
        done()
      })
  })
  describe('Activities', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/activities')
        .set('Authorization', token)
        .send(config.ActivitiesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/activities/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /activities', function (done) {
      request.get('/api/v1/activities')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /activities/:_id', function (done) {
      request.get('/api/v1/activities/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /activities', function (done) {
      request.post('/api/v1/activities')
        .set('Authorization', token)
        .send(config.ActivitiesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /activities/:_id', function (done) {
      request.put('/api/v1/activities/' + globalId)
        .set('Authorization', token)
        .send(config.ActivitiesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /activities/:_id', function (done) {
      request.del('/api/v1/activities/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Banners', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/banners')
        .set('Authorization', token)
        .send(config.BannersBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/banners/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /banners', function (done) {
      request.get('/api/v1/banners')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /banners/:_id', function (done) {
      request.get('/api/v1/banners/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /banners', function (done) {
      request.post('/api/v1/banners')
        .set('Authorization', token)
        .send(config.BannersBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /banners/:_id', function (done) {
      request.put('/api/v1/banners/' + globalId)
        .set('Authorization', token)
        .send(config.BannersBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /banners/:_id', function (done) {
      request.del('/api/v1/banners/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Categories', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/categories')
        .set('Authorization', token)
        .send(config.CategoriesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/categories/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /categories', function (done) {
      request.get('/api/v1/categories')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /categories/:_id', function (done) {
      request.get('/api/v1/categories/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /categories', function (done) {
      request.post('/api/v1/categories')
        .set('Authorization', token)
        .send(config.CategoriesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /categories/:_id', function (done) {
      request.put('/api/v1/categories/' + globalId)
        .set('Authorization', token)
        .send(config.CategoriesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /categories/:_id', function (done) {
      request.del('/api/v1/categories/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Consults', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/consults')
        .set('Authorization', token)
        .send(config.ConsultsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/consults/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /consults', function (done) {
      request.get('/api/v1/consults')
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /consults/:_id', function (done) {
      request.get('/api/v1/consults/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /consults', function (done) {
      request.post('/api/v1/consults')
        .set('Authorization', token)
        .send(config.ConsultsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /consults/:_id', function (done) {
      request.put('/api/v1/consults/' + globalId)
        .set('Authorization', token)
        .send(config.ConsultsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /consults/:_id', function (done) {
      request.del('/api/v1/consults/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Matches', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/matches')
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/matches/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /matches', function (done) {
      request.get('/api/v1/matches')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /matches/:_id', function (done) {
      request.get('/api/v1/matches/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /matches', function (done) {
      request.post('/api/v1/matches')
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /matches/:_id', function (done) {
      request.put('/api/v1/matches/' + globalId)
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /matches/:_id', function (done) {
      request.del('/api/v1/matches/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Modes', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/modes')
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/modes/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /modes', function (done) {
      request.get('/api/v1/modes')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /modes/:_id', function (done) {
      request.get('/api/v1/modes/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /modes', function (done) {
      request.post('/api/v1/modes')
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /modes/:_id', function (done) {
      request.put('/api/v1/modes/' + globalId)
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /modes/:_id', function (done) {
      request.del('/api/v1/modes/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Products', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/products')
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/products/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /products', function (done) {
      request.get('/api/v1/products')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /products/:_id', function (done) {
      request.get('/api/v1/products/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /products', function (done) {
      request.post('/api/v1/products')
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /products/:_id', function (done) {
      request.put('/api/v1/products/' + globalId)
        .set('Authorization', token)
        .send(config.MatchesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /products/:_id', function (done) {
      request.del('/api/v1/products/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Users', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/users')
        .set('Authorization', token)
        .send(config.UsersBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/users/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /users', function (done) {
      request.get('/api/v1/users')
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /users/:_id', function (done) {
      request.get('/api/v1/users/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('PUT /users/:_id', function (done) {
      request.put('/api/v1/users/' + globalId)
        .set('Authorization', token)
        .send(config.UsersBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /users', function (done) {
      var UsersBody = Object.assign({}, config.UsersBody)
      UsersBody.name += parseInt(Math.random() * 100)
      request.post('/api/v1/users')
        .set('Authorization', token)
        .send(UsersBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('Delete /users/:_id', function (done) {
      request.del('/api/v1/users/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Websites', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/websites')
        .set('Authorization', token)
        .send(config.WebsitesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/websites/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /websites', function (done) {
      request.get('/api/v1/websites')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /websites', function (done) {
      request.post('/api/v1/websites')
        .set('Authorization', token)
        .send(config.WebsitesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /websites/:_id', function (done) {
      request.put('/api/v1/websites/' + globalId)
        .set('Authorization', token)
        .send(config.WebsitesBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /websites/:_id', function (done) {
      request.del('/api/v1/websites/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Selectors', function () {
    let globalId = ''
    let _id = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    beforeEach(function (done) {
      request.post('/api/v1/selectors/heads/2')
        .set('Authorization', token)
        .send(config.SelectorsHeadsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    afterEach(function (done) {
      request.del('/api/v1/selectors/heads/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /selectors/heads/2', function (done) {
      request.get('/api/v1/selectors/heads/2')
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /selectors/heads/2/:_id', function (done) {
      request.get('/api/v1/selectors/heads/2/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /selectors/heads/2', function (done) {
      request.post('/api/v1/selectors/heads/2')
        .set('Authorization', token)
        .send(config.SelectorsHeadsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = res.body._id
          done()
        })
    })
    it('PUT /selectors/heads/:_id', function (done) {
      request.put('/api/v1/selectors/heads/' + globalId)
        .set('Authorization', token)
        .send(config.SelectorsHeadsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /selectors/heads/:_id', function (done) {
      request.del('/api/v1/selectors/heads/' + _id)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  describe('Selectors', function () {
    let globalId = ''
    let _id = ''
    let _sid = ''
    let token = 'Bearer '
    before(function (done) {
      request.post('/api/v1/signin')
      .send(config.user)
      .expect(200)
      .end(function (err, res) {
        if (err) {
          return done(err)
        }
        token += res.body.token
        done()
      })
    })
    before(function (done) {
      request.post('/api/v1/selectors/heads/2')
        .set('Authorization', token)
        .send(config.SelectorsHeadsBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    after(function (done) {
      request.del('/api/v1/selectors/heads/' + globalId)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          globalId = res.body._id
          done()
        })
    })
    it('GET /selectors/bodys/:_id', function (done) {
      request.get('/api/v1/selectors/bodys/' + globalId)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('POST /selectors/bodys/:_id', function (done) {
      request.post('/api/v1/selectors/bodys/' + globalId)
        .set('Authorization', token)
        .send(config.SelectorsBodysBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          _id = globalId
          _sid = res.body._id
          done()
        })
    })
    it('PUT /selectors/bodys/:_id/:_sid', function (done) {
      request.put('/api/v1/selectors/bodys/' + _id + '/' + _sid)
        .set('Authorization', token)
        .send(config.SelectorsBodysBody)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('GET /selectors/bodys/:_id/:_sid', function (done) {
      request.get('/api/v1/selectors/bodys/' + _id + '/' + _sid)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
    it('Delete /selectors/bodys/:_id/:_sid', function (done) {
      request.del('/api/v1/selectors/bodys/' + _id + '/' + _sid)
        .set('Authorization', token)
        .expect(200)
        .end(function (err, res) {
          if (err) {
            return done(err)
          }
          done()
        })
    })
  })
  after(function (done) {
    request.del('/api/v1/users/admin/' + userid)
    .expect(200)
    .end(function (err, res) {
      if (err) {
        return done(err)
      }
      done()
    })
  })
})
