const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna joins Gulliver's Travels" },
      { title: "Trio Luna Meets The Brave Little Toaster" },
      { title: "Trio Luna wants to Wish" },
      { title: "Trio Luna Meets Talon" },
      { title: "Trio Luna's Adventures of The Super Mario Bros Movie" },
      { title: "Trio Luna Meets Bambi" },
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna and The Brave Little Toaster to the Rescue" },
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
     { title: "Trio Luna Meets Dumbo" },
      { title: "Children of the Night Meets The Reluctant Dragon" },
     { title: "Children of the Night's Adventures of Donkey Kong Country: The Legend of the Crystal Coconut" },
      { title: "Children of the Night Meets Ferdinand" },
      { title: "Children of the Night's Adventures with Mickey and the Beanstalk" },
      { title: "Children of the Night's Adventures of Mickey's Christmas Carol" },
      { title: "Children of the Night Meets Ben and Me" },
      { title: "Children of the Night and Donald in Mathmagic Land" },
      { title: "Children of the Night and the Adventures of Ichabod and Mr. Toad" },
      { title: "Children of the Night Meets Paul Bunyan" },
      { title: "Children of the Night Meets The Prince and the Pauper" },
      { title: "Trio Luna's Adventures of Pokemon: The Firts Movie" }
      
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