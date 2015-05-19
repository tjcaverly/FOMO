var pg = require('pg');
var dbUrl = process.env.DATABASE_URL || require('./dbConfig');
var fs = require('fs');
var schema = fs.readFileSync(__dirname+"/../schema.sql").toString();

module.exports = {
  runSchema: function(){
      pg.connect(dbUrl, function(err, client, done) {

        if(err) {
          return console.error('error fetching client from pool', err);
        }
        client.query(schema, function(err, result) {
        //call `done()` to release the client back to the pool
          done();
          if(err) {
            return console.error('error running query', err);
          }
        });
      }); 
      pg.end();
    },
  dropTables: function(){
      pg.connect(dbUrl, function(err, client, done) {

        if(err) {
          return console.error('error fetching client from pool', err);
        }
        client.query("DROP TABLE users_events, notifications, events, users;", function(err, result) {
        //call `done()` to release the client back to the pool
          done();
          if(err) {
            return console.error('error running query', err);
          }
        });
      }); 
      pg.end();
  }
}

