const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna Finds to The Black Cauldron" },
      { title: "Trio Luna's Adventures of A Goofy Movie" },
      { title: "Trio Luna's Adventures of Babes in Toyland"},
      { title: "Trio Luna Meets Thumbelina" },
      { title: "Trio Luna Meets The Swan Princess" },
      { title: "Trio Luna Meets The Great Mouse Detective" },
      { title: "Trio Luna's Adventures of Pokemon the Movie: Secrets of the Jungle" },
      { title: "Trio Luna's Adventures of The Secret of NIHM" },
      { title: "Trio Luna Meets The Prince of Egypt" },
      { title: "Trio Luna's Adventures of Transformers One" },
      { title: "Trio Luna Meets The Brave Little Toaster" },
      { title: "Trio Luna Goes to Ferngully: The Last Rainforest" },
      { title: "Trio Luna Meets The Pagemaster" },
      { title: "Trio Luna Meets Fantastic Four (2005)" }
      // episodios de la temporada 1
    ]
  },
  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna Go to The Road to el Dorado" },
      { title: "Trio Luna  Calls Out Help I'm a Fish"},
      { title: "Trio Luna Meets Sinbad: Legend of the Seven Seas" },
      { title: "Trio Luna Go to Atlantis The Lost Empire" },
      {title: "Trio Luna Meets Osmosis Jones" },
      { title: "Trio Luna Meets Balto" },
      { title: "Trio Luna Meets Oliver and Company" },
      { title: "Trio Luna Go to Treasure Planet" },
      { title: "Trio Luna Meets The Iron Giant" },
      { title: "Trio Luna and the Rise of the Guardians" },
      { title: "Trio Luna reads The Book of Life" },
      { title: "Trio Luna's Adventures of Epic" },
      { title: "Trio Luna's Adventures When All Dogs go to Heaven" },
      { title: "Trio Luna's Adventures When All Dogs go to Heaven 2" },
      { title: "Trio Luna's Adventures of Fantastic Four: Rise of the Silver Surfer" }
      // episodios de la temporada 2
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