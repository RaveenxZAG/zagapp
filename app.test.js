const request = require('supertest');
const app = require('./app');

describe('GET /', function () {
  let server;

  before(function (done) {
    server = app.listen(function () {
      done();
    });
  });

  after(function (done) {
    server.close(function () {
      done();
    });
  });

  it('should respond with "Hello, Im Building a Continuous Delivery Pipeline for Cloud-Native Apps on GCP"', function (done) {
    request(server)
      .get('/')
      .expect(200)
      .expect(function (response) {
        if (!response.text.includes('Hello, Im Building a Continuous Delivery Pipeline for Cloud-Native Apps on GCP')) {
          throw new Error('Response body does not contain the expected string');
        }
      })
      .end(done);
  });
});
