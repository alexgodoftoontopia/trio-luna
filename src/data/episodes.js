const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna Meets Dumbo" },
      { title: "Trio Luna Meets Bambi" },
      { title: "Trio Luna's Adventures of Mickey and the Beanstalk" },
      { title: "Trio Luna Meets Pocahontas"},
      { title: "Trio Luna Meets The Little Mermaid: Ariel's Beginning" },
      { title: "Trio Luna's Adventures ofThe Jungle Book" },
      { title: "Trio Luna Meets The Lion King" },
      { title: "Trio Luna Meets Tarzan"}
      // episodios de la temporada 1
    ]
  },
  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna Meets The Prince and the Pauper" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna Meets Hercules" },
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna Meets The Aristocats" },
      { title: "Trio Luna Meets The Fox and the Hound" },
      { title: "Trio Luna Joins to The Rescuers" },
      { title: "Trio Luna and The Sword in the Stone" },
      { title: "Trio Luna and The Emperor's New Groove" },
      { title: "Trio Luna Meets Mulan" } 
      // episodios de la temporada 2
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