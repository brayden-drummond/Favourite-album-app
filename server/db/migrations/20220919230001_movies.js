exports.up = function (knex) {
  return knex.schema.createTable('movies', (table) => {
    table.increments('id')
    table.string('uploader_id').references('users.auth0_id')
    table.string('name')
    table.string('description')
    table.string('image_url')
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('movies')
}
