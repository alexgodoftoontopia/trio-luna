const rawEpisodes = [
  {
    season: 0,
    title: "Temporada 0",
    episodes: [
      { title: "The Return of Grogar" },
      ]
  },
  
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna Meets Spider-Man (2002)" },
      { title: "Trio Luna's Adventures of Spider-Man 2" },
      { title: "Trio Luna's Adventures of Spider-Man 3" },
      { title: "Trio Luna's Adventures of The Nightmare Before Christmas" },
      { title: "Trio Luna's Adventures of A Christmas Carol" },
      { title: "Trio Luna's Adventures of The Polar Express" },
      { title: "Trio Luna Meets Meets Harry Potter and the Philosopher's Stone" },
      { title: "Trio Luna's Adventures of The Simpsons Movie" },
      { title: "Trio Luna Meets Spyro - Reignited Trilogy" },
      { title: "Trio Luna Meets Crash Bandicoot Trilogy" },
      { title: "Trio Luna' Adventures of Crash Bandicoot 4" },
      { title: "Trio Luna Meets Ratchet & Clank" },
      { title: "Trio Luna Meets The Little Mermaid" },
      { title: "Trio Luna Meets Beauty and the Beast" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna Meets The Lion King"},
      { title: "Trio Luna Meets Pocahontas"},
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna Meets Hercules" },
      { title: "Trio Luna Meets Mulan" },
      { title: "Trio Luna Meets Tarzan" },
      { title: "Trio Luna's Adventures of Pokemon Trilogy Movie" },
      { title: "Trio Luna' Meets Batman (1989)" },
      { title: "Trio Luna Meets Batman Returns" },
      { title: "Trio Luna Meets The Lord of the Rings: The Fellowship of the Ring" },
      { title: "Trio Meets Barbie (2023)" },
      { title: "Trio Luna Meets Barbie: The Princess and the Pauper" },
      { title: "Trio Luna's Adventures of The SpongeBob Movie" },
      { title: "Trio Luna's Adventures of Star Wars: Episode I - The Phantom Menace" },
      { title: "Trio Luna's Adventures of Mortadelo y Filemon: El armario del tiempo" },
      { title: "Trio Luna plays Jumanji" },
      { title: "Trio Luna Goes to Jurassic Park Trilogy" },
      { title: "Trio Luna's Adventures of Toy Story Trilogy" }
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