const rawEpisodes = [
  {
    season: 0,
    title: "Piloto",
    episodes: [
      { title: "The Return of Grogar" },
      ]
  },
  
  {
    season: 1,
    title: "Temporada 1: Inicio del Viaje",
    episodes: [
      { title: "Trio Luna Meets Sleeping Beauty" }
      
    ]
  },

  {
    season: 0,
    title: "Temporada Especiales",
    episodes: [
      { title: "Trio Luna and The Nightmare Before Christmas" }
      
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