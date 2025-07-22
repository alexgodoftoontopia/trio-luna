const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna Meets Snow White and the Seven Dwarfs" },
      { title: "Trio Luna Meets Pinocchio" },
      { title: "Trio Luna's Adventures of Fantasia" },
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna Meets Dumbo" },
      { title: "Trio Luna Meets Bambi" },
      // episodios de la temporada 1
    ]
  },
  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna's Adventures of Saludos Amigos'" },
      { title: "Trio Luna Meets The Three Caballeros" },
      { title: "Trio Luna Make Mine Music" },
      { title: "Trio LUna's Adventures of Fun and Fancy Free" },
      { title: "Trio Luna's Adventures of Melody Time" },
      { title: "Trio Luna's Adventures of The Adventures of Ichabod and Mr. Toad" }
      // episodios de la temporada 2
    ]
  },
  {
    season: 3,
    title: "Temporada 3",
    episodes: [
      { title: "Trio Luna Meets Cinderella" },
      { title: "Trio Luna's Adventures with Alice in Wonderland" },
      { title: "Trio Luna Meets Peter Pan" },
      { title: "Trio Luna Meets Lady and the Tramp" },
      { title: "Trio Luna Meets Sleeping Beauty" },
      { title: "Trio Luna Meets 101 Dalmatians" },
      { title: "Trio Luna and The Sword in the Stone" },
      { title: "Trio Luna Meets Mary Poppins" },
      { title: "Trio Luna's Adventures of The Jungle Book" }
      // episodios de la temporada 3
    ]
  },
  {
    season: 4,
    title: "Temporada 4",
    episodes: [
      { title: "Trio Luna Meets The Aristocats" },
      {title: "Trio Luna's Adventures of Bedknobs and Broomsticks" },
      { title: "Trio Luna Meets Robin Hood" },
      { title: "Trio Luna Meets The Many Adventures of Winnie the Pooh" },
      { title: "Trio Luna Meets The Rescuers" },
      { title: "Trio Luna Meets Pete's Dragon" },
      { title: "Trio Luna Meets The Fox and the Hound" },
      { title: "Trio Luna's Adventures of Mickey's Christmas Carol" },
      { title: "Trio Luna Meets The Black Cauldron" },
      { title: "Trio Luna Meets The Great Mouse Detective" },
      { title: "Trio Luna Meets Oliver & Company" }
      // episodios de la temporada 4
    ]
  },
  {
    season: 5,
    title: "Temporada 5",
    episodes: [
      { title: "Trio Luna Meets The Little Mermaid" },
      {title: "Trio Luna Meets The Prince and the Pauper" },
      { title: "Trio Luna Meets The Rescuers Down Under" },
      { title: "Trio Luna Meets Beauty and the Beast" },
      { title: "Trio Luna Meets Aladdin" },
      { title: "Trio Luna Meets The Lion King" },
      { title: "Trio Luna Meets Pocahontas" },
      { title: "Trio Luna's Adventures of Toy Story"},
      { title: "Trio Luna's Adventures of A Goofy Movie" },
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna Meets Hercules" },
      { title: "Trio Luna Meets Mulan" },
      { title: "Trio Luna's Adventures of A Bug's Life" },
      { title: "Trio Luna Meets Tarzan" }
      // episodios de la temporada 5
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