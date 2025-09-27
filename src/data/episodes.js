const rawEpisodes = [
  {
    season: 1,
    title: "Trio Luna's Adventures Series",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna Meets Talon" }, //Talon se unira al final del piloto
      { title: "Trio Luna wants to Wish" }, //Debut de Talon y Estrella se une al final, El trio lunatica (Opaline, Ash y Susie) se aliaran con el Rey Magnifico, Black Hat aparecera en el post credito como Thanos
      {title: "Trio Luna's Adventures of The Jungle Book"}, //debut de Estrella y adoptan a Jake y Jenna (los hijos de Soarin), Rey Sombra, Magica y Bill Cipher se aliaran con Shere Khan
      { title: "Trio Luna Meets Aladdin" }, //el trio lunatica (Opaline, Ash y Susie) se aliaran con Jafar
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna's Nightmare Before Christmas" },
      { title: "Trio Luna's Adventures of The Lion King" },
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna's Adventures of Beauty and the Beast" }
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