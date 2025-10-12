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
      { title: "Trio Luna and The Nightmare Before Christmas" },
      { title: "Trio Luna Meets Sleeping Beauty" },
      { title: "Trio Luna Meets 101 Dalmatians" }
      
    ]
  },

  {
    season: 0,
    title: "Temporada Outlaws Adventures", // Suceso después de Trio Luna Meets Carrie (2013)
    episodes: [
      { title: "Dorkiek Meets Beetlejuice" },
      { title: "Dorkiek Meets Batman" },
      { title: "Dorkiek Meets Edward Scissorhands" },
      { title: "Dorkiek Meets The Addams Family" },
      { title: "Dorkiek and The Nightmare Before Christmas" },
      { title: "Dorkiek Meets Ed Wood" },
      { title: "Dorkiek Goes to Sleepy Hollow" },
      { title: "Dorkiek Discovers to Planet of the Apes" },
      { title: "Dorkiek Meets Charlie and the Chocolate Factory" },
      { title: "Dorkiek Meets The Corpse Bride" },
      { title: "Dorkiek Meets Sweeney Todd: The Demon Barber of Fleet Street" },
      { title: "Dorkiek Meets Alice in Wonderland" },
      { title: "Dorkiek's Adventures of Dark Shadows" },
      { title: "Dorkiek's Adventures of Frankenweenie" },
      { title: "Dorkiek Meets Dumbo" },
      { title: "Dorkiek Meets Wednesday" },
      { title: "Dorkiek Meets Beetlejuice Beetlejuice" }
    
      
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