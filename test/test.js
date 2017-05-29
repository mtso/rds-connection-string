const expect = require('chai').expect
const getRDSConnectionString = require('../')

describe('getRDSConnectionString', function() {
  it('should be undefined', function(done) {
    expect(getRDSConnectionString()).to.be.null;
    done();
  });

  describe('should be defined', function() {
    before(function() {
      process.env.RDS_USERNAME = 'username';
      process.env.RDS_PASSWORD = 'password';
      process.env.RDS_HOSTNAME = 'hostname.com';
      process.env.RDS_PORT = '3750';
      process.env.RDS_DB_NAME = 'ebdb';
    });

    it('should return a good string', function(done) {
      const connectionString = getRDSConnectionString();
      const expected = 'username:password@hostname.com:3750/ebdb';
      expect(connectionString).to.eq(expected);
      done();
    });

    it('should use scheme option', function(done) {
      const connectionString = getRDSConnectionString({scheme: 'postgres'});
      const expected = 'postgres://username:password@hostname.com:3750/ebdb';
      expect(connectionString).to.eq(expected);
      done();
    })
  });
});
