const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna wants to Wish" },
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna Meets Ferdinand" },
      { title: "Trio Luna's Adventures with Mickey and the Beanstalk" },
      { title: "Trio Luna's Adventures of Mickey's Christmas Carol" },
      { title: "Trio Luna Meets Ben and Me" },
      { title: "Trio Luna and Donald in Mathmagic Land" },
      { title: "Trio Luna and the Adventures of Ichabod and Mr. Toad" },
      { title: "Trio Luna Meets Paul Bunyan" },
      { title: "Trio Luna's Adventures of Fantasia" }
      // episodios de la temporada 1
    ]
  },

  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna's Adventures of Pokemon: The Firts Movie" }
      // episodios de la temporada 1
    ]
  }

];

// Asignar numeración automática
let episodeCounter = 1;
const episodes = rawEpisodes.map(season => ({
  ...season,
  episodes: season.episodes.map(ep => ({
    number: episodeCounter++,
    ...ep
  }))
}));

export default episodes;