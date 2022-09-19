exports.seed = async (knex) => {
  await knex('results').del()
  await knex('movies').del()
  await knex('users').del()
}
