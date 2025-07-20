const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna Meets Snow White and the Seven Dwarfs" },
      { title: "Trio Luna Meets Pinocchio" },
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna Meets Dumbo" },
      { title: "Trio Luna Meets Bambi" },
      // episodios de la temporada 1
    ]
  },
  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna's Adventures of Saludos Amigos'" },
      { title: "Trio Luna Meets The Three Caballeros" },
      { title: "Trio Luna Make Mine Music" },
      { title: "Trio LUna's Adventures of Fun and Fancy Free" },
      { title: "Trio Luna's Adventures of Melody Time" },
      { title: "Trio Luna's Adventures of The Adventures of Ichabod and Mr. Toad" }
      // episodios de la temporada 2
    ]
  },
  {
    season: 3,
    title: "Temporada 3",
    episodes: [
      { title: "Trio Luna Meets Cinderella" },
      { title: "Trio Luna Meets Alice in Wonderland" },
      { title: "Trio Luna Meets Peter Pan" },
      { title: "Trio Luna Meets Lady and the Tramp" },
      { title: "Trio Luna Meets Sleeping Beauty" },
      { title: "Trio Luna Meets 101 Dalmatians" }
      // episodios de la temporada 3
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