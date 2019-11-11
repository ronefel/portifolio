exports.up = function(knex) {
  return knex.schema.createTable('users', table => {
    table.increments('id')
    table.string('name', 100).notNullable()
    table.string('email', 200).notNullable()
    table.string('password', 50).notNullable()
  })
}

exports.down = function(knex) {
  return knex.schema.dropTable('users')
}
