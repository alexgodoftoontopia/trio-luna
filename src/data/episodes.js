const rawEpisodes = [
  {
    season: 0,
    title: "Temporada 0",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna Meets Talon" }, //Talon se unira al final del piloto
      { title: "Trio Luna wants to Wish" } //Debut de Talon y Estrella se une al final, El trio lunatica (Opaline, Ash y Susie) se aliaran con el Rey Magnifico, Black Hat aparecera en el post credito como Thanos
    ]
  },
  
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna Meets Spider-Man (2002)" },
      { title: "Trio Luna's Adventures of Spider-Man 2" },
      { title: "Trio Luna's Adventures of Spider-Man 3" },
      { title: "Trio Luna's Adventures of A Christmas Carol" },
      { title: "Trio Luna's Adventures of The Polar Express" },
      { title: "Trio Luna's Adventures of The Nightmare Before Christmas" },
      { title: "Trio Luna Learns How the Grinch Stole Christmas" },
      { title: "Trio Luna Meets The Nutcracker" },
      { title: "Trio Luna's Adventures of The Simpsons Movie" },
      { title: "Trio Luna Meets Spyro - Reignited Trilogy" },
      { title: "Trio Luna Meets Crash Bandicoot Trilogy" },
      { title: "Trio Luna' Adventures of Crash Bandicoot 4" },
      { title: "Trio Luna Meets Ratchet & Clank" },
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna Meets Beauty and the Beast" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna Meets The Lion King" },
      { title: "Trio Luna Meets Pocahontas" },
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna Meets Hercules" },
      { title: "Trio Luna Meets Mulan" },
      { title: "Trio Luna Meets Tarzan" },
      { title: "Trio Luna's Adventures of Pokemon The First Movie" },
      { title: "Trio Luna's Adventures of Pokemon The Movie 2000" },
      { title: "Trio Luna's Adventures of Pokemon The Movie 3" },

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