module.exports = {
  client: 'sqlite3',
  connection: {
    filename: './portifolio.sqlite'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  },
  useNullAsDefault: true
}
