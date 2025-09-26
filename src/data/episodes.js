const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna wants to Wish" },
      { title: "Trio Luna Meets Talon" },
      { title: "Trio Luna Meets Dumbo" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna's Adventures of The Super Mario Bros Movie" },
      { title: "Trio Luna Meets Bambi" },
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna's Nightmare Before Christmas" },
      { title: "Trio Luna's Adventures of The Lion King" },
      { title: "Trio Luna Meets Pocahontas" },
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna's Adventures of Beauty and the Beast" },
      { title: "Trio Luna Meets The Last Unicorn" },
      { title: "Trio Luna and The Flight of Dragons" }
    ]
  },

  {
    season: 1,
    title: "Temporada Children of the Night's Adventures",
    episodes: [
     { title: "Children of Nights joins Gulliver's Travels" }, //Esta aventura sucede después de Fantasia
    { title: "Children of Nights Meets The Brave Little Toaster" },
    { title: "Trio Luna and The Brave Little Toaster to the Rescue" }
      
    ]
  }
];

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