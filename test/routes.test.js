import request from 'supertest';
import app from '../src/app.js';

var agent = request.agent(app);

/****************************
* LOGIN AS A ADMIN           *
*****************************/

describe('Access as Admin', function () {
  it('Login', function(done) {
    agent
      .post('/login')
      .type('form')
      .send({ email: 'britneyblankenship@quotezart.com' })
      .send({ password: 'password' })
      .expect(200)
      .expect('set-cookie', /sessionId/)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it('Get User data by ID', function(done) {
    agent
      .get('/users/username/britneyblankenship@quotezart.com')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
    });

    it('Get User data by Username', function(done) {
      agent
        .get('/users/username/britneyblankenship@quotezart.com')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
      });

    it('Get Policies by Username', function(done) {
      agent
        .get('/users/britneyblankenship@quotezart.com/policies/')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it('Get User data by Policy ID', function(done) {
      agent
        .get('/policies/64cceef9-3a01-49ae-a23b-3761b604800b/user/')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it('Logout', function(done) {
      agent
        .post('/logout')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
});


/****************************
* LOGIN AS A USER           *
*****************************/

describe('Access as User', function () {
  it('Login', function(done) {
    agent
      .post('/login')
      .type('form')
      .send({ email: 'simoneblankenship@quotezart.com' })
      .send({ password: 'password' })
      .expect(200)
      .expect('set-cookie', /sessionId/)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
  });

  it('Get User data by ID', function(done) {
    agent
      .get('/users/username/britneyblankenship@quotezart.com')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        return done();
      });
    });

    it('Get User data by Username', function(done) {
      agent
        .get('/users/username/britneyblankenship@quotezart.com')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
      });

    it('Get Policies by Username', function(done) {
      agent
        .get('/users/britneyblankenship@quotezart.com/policies/')
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it('Get User data by Policy ID', function(done) {
      agent
        .get('/policies/64cceef9-3a01-49ae-a23b-3761b604800b/user/')
        .expect(403)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });

    it('Logout', function(done) {
      agent
        .post('/logout')
        .expect(200)
        .end(function(err, res) {
          if (err) return done(err);
          return done();
        });
    });
});