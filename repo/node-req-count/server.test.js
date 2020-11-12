var request = require('request');
var should = require('chai').should();
var server = require('./server');

describe('server', function() {
  beforeEach(function() {
    server.listen(8000, '127.0.0.1');
  });

  afterEach(function() {
    server.close();
  });

  it('should return an empty response if not set yet', function(done) {
    request.get('http://127.0.0.1:8000/error', function(err, res) {
      if (err) { return done(err); }

      res.body.should.equal('');
      done();
    });
  });

  it('should increment a property by 1', function(done) {
    request.post('http://127.0.0.1:8000/one', function(err) {
      if (err) { return done(err); }

      request.get('http://127.0.0.1:8000/one', function(err, res) {
        if (err) { return done(err); }

        // An 'Unexpected end of input' error means JSON.parse failed
        // Why might that be?
        var body = JSON.parse(res.body);
        body.should.equal(1);
        done();
      });
    });
  });

  it('should set a 200s status code on successful increment', function(done) {
    request.post('http://127.0.0.1:8000/another', function(err) {
      if (err) { return done(err); }

      request.get('http://127.0.0.1:8000/another', function(err, res) {
        if (err) { return done(err); }

        res.statusCode.should.be.within(200, 300);
        done();
      });
    });
  });

  it('should increment a property by 2', function(done) {
    request.post('http://127.0.0.1:8000/two', function(err) {
      if (err) { return done(err); }

      request.post('http://127.0.0.1:8000/two', function(err) {
        if (err) { return done(err); }

        request.get('http://127.0.0.1:8000/two', function(err, res) {
          if (err) { return done(err); }

          // An 'Unexpected end of input' error means JSON.parse failed
          // Why might that be?
          var body = JSON.parse(res.body);
          body.should.equal(2);
          done();
        });
      });
    });
  });

});
