'use strict';
exports.DATABASE_URL = process.env.DATABASE_URL || 'mongodb://my-new-user:mexico98@ds245762.mlab.com:45762/node-restaurants-app';
exports.TEST_DATABASE_URL = process.env.TEST_DATABASE_URL || 'mongodb://localhost/test-restaurants-app';
exports.PORT = process.env.PORT || 8080;