exports.seed = async (knex) => {
  await knex('movies').insert([
    {
      id: 1,
      uploader_id: '1',
      name: 'Top Gun Maverick',
      description: 'Tom Cruise Placeholder',
      image_url: '/images/topgun-maverick.jpg',
    },
    {
      id: 2,
      uploader_id: '1',
      name: 'Bohemian Rhapsody',
      description: 'Queen Placeholder',
      image_url: '/images/bohemian-rhapsody.jpg',
    },
    {
      id: 3,
      uploader_id: '2',
      name: 'Shawshank Redemption',
      description: 'Andy Dufrense Placeholder',
      image_url:
        'https://m.media-amazon.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg',
    },
    {
      id: 4,
      uploader_id: '3',
      name: 'Spiderman 2',
      description: 'Peter Parker Placeholder',
      image_url:
        'https://m.media-amazon.com/images/M/MV5BMzY2ODk4NmUtOTVmNi00ZTdkLTlmOWYtMmE2OWVhNTU2OTVkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg',
    },
  ])
}
