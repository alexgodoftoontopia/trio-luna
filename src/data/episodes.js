const rawEpisodes = [
  {
    season: 1,
    title: "Trio Luna's Adventures Series",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna wants to Wish" },
      { title: "Trio Luna Meets Talon" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna's Nightmare Before Christmas" },
      { title: "Trio Luna's Adventures of The Lion King" },
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna's Adventures of Beauty and the Beast" }
    ]
  },

  {
    season: 2,
    title: "Trio Guardians Adventures Series",
    episodes: [
    { title: "Trio Guardians Meets Bambi" },  
    { title: "Trio Guardians Adventures of The Super Mario Bros Movie" },
    { title: "Trio Guardians Meets Pocahontas" },
    { title: "Trio Guardians Meets Anastasia"}
    ]
  },

  {
    season: 3,
    title: "Bambi and Cream's Adventures Series",
    episodes: [
    { title: "Bambi and Cream Meets Dumbo" }, //Esta aventura sucede después de Fantasia
    { title: "Bambi and Cream Meets The Reluctant Dragon"},
    { title: "Bambi and Cream's Adventures of Pokemon I Choose You"},
    { title: "Bambi and Cream joins Gulliver's Travels" }, 
    { title: "Bambi and Cream Meets The Brave Little Toaster" },
    { title: "Bambi, Cream and The Brave Little Toaster to the Rescue" }
      
    ]
  },

   {
    season: 4,
    title: "Alex and Kaa's Adventures Series",
    episodes: [
    { title: "Alex and Kaa's Adventures of Donkey Kong Country" },
    { title: "Bambi and Cream's Adventures of Pokemon I Choose You"},
    { title: "Bambi and Cream joins Gulliver's Travels" }, 
    { title: "Bambi and Cream Meets The Brave Little Toaster" },
    { title: "Bambi, Cream and The Brave Little Toaster to the Rescue" }
      
    ]
  },

  {
    season: 5,
    title: "Crossovers Adventures Series",
    episodes: [
    { title: "Trio Luna and Trio Guardians Meets The Last Unicorn" },
    { title: "Trio Luna, Trio Guardians and The Flight of Dragons"}
      
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