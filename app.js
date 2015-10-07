'use strict';
var r = require('rethinkdb');
var connection = null;
r.connect( {host: 'localhost', port: 28015})
.then(function(conn) {
	connection = conn;
})
.then(function() {
	r.db('test').tableCreate('authors').run(connection, function(err, result) {
	    if (err) throw err;
	    console.log(JSON.stringify(result, null, 2));
	});
});
