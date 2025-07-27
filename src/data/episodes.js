const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna's Adventures of We're Back a Dinosaur Story" },
      { title: "Trio Luna's Adventures of Pokemon the Movie: Secrets of the Jungle" },
      { title: "Trio Luna's Adventures of The Secret of NIHM" },
      { title: "Trio Luna Goes to Hotel Transylvania" },
      { title: "Trio Luna's Adventures of Hotel Transylvania 2" },
      { title: "Trio Luna's Adventures of Hotel Transylvania 3" },
      { title: "Trio Luna's Adventures of Hotel Transylvania: Transformania" },
      { title: "Trio Luna Meets Bumblebee" },
      { title: "Trio Luna and Knuckles (2024)" },
      { title: "Trio Luna Meets Shrek" },
      { title: "Trio Luna's Adventures of Shrek 2"},
      { title: "Trio Luna's Adventures of Shrek the Third" },
      { title: "Trio Luna's Adventures of Shrek Forever After" },
      {title: "Trio Luna in Ice Age" },
      { title: "Trio Luna's Adventures of Ice Age: The Meltdown" },
      { title: "Trio Luna's Adventures of Ice Age: Dawn of the Dinosaurs" },
      { title: "Trio Luna's Adventures of Ice Age: Continental Drift" },
      { title: "Trio Luna joins to X-Men" },
      // episodios de la temporada 1
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