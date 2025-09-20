const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna wants to Wish" },
      { title: "Trio Luna Meets Talon" },
      { title: "Trio Luna's Adventures of The Super Mario Bros Movie" },
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna Meets Ferdinand" },
      { title: "Trio Luna's Adventures with Mickey and the Beanstalk" },
      { title: "Trio Luna's Adventures of Mickey's Christmas Carol" },
      { title: "Trio Luna Meets Ben and Me" },
      { title: "Trio Luna and Donald in Mathmagic Land" },
      { title: "Trio Luna and the Adventures of Ichabod and Mr. Toad" },
      { title: "Trio Luna Meets Paul Bunyan" },
      { title: "Trio Luna Meets The Prince and the Pauper" },
      { title: "Trio Luna's Adventures of Fantasia" }
      // episodios de la temporada 1
    ]
  },

  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna Meets Dumbo" },
      {title: "Trio Luna's Adventures of Donkey Kong Country: The Legend of the Crystal Coconut"},
      { title: "Trio Luna's Adventures of Pokemon: The Firts Movie"},
      { title: "Trio Luna's Adventures of The Lion King"},
      { title: "Trio Luna Meets Pocahontas" },
      { title: "Trio Luna's Adventures of The Little Mermaid: Ariel's Beginning"},
      { title: "Trio Luna Meets The Hunchback of Notre Dame"},
      { title: "Trio Luna's Adventures of Beauty and the Beast"},
      { title: "Trio Luna Meets The Last Unicorn"},
      { title: "Trio Luna and The Flight of Dragons"}
      // episodios de la temporada 2
    ]
  }

];

// Asignar numeración automática
const episodes = rawEpisodes.map(season => {
  let episodeCounter = 1; // Reinicia el contador en cada temporada
  return {
    ...season,
    episodes: season.episodes.map(ep => ({
      number: episodeCounter++,
      ...ep
    }))
  };
});

export default episodes;