const { Pool } = require('pg');

const pool = new Pool({
  user: 'magicuser',
  host: 'localhost',
  database: 'magicdb',
  password: 'magickey',
  port: 5432,
});

module.exports = pool;
