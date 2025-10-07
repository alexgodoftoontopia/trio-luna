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
  },
  {
    season: 2,
    title: "Temporada 2",
    episodes: [
      { title: "Trio Luna's Adventures of Flubber"},
      { title: "Trio Luna Meets Shin-chan: Action Mask vs. Leotard Devil"},
      { title: "Trio Luna Goes to Back to the Future Trilogy"},
      { title: "Trio Luna's Adventures of High School Musical"},
      { title: "Trio Luna Meets Small Soldiers"},
      { title: "Trio Luna Meets Harry Potter and the Chamber of Secrets"},
      { title: "Trio Luna Discovers Treasure Planet"},
      { title: "Trio Luna Gets Home Alone Duology"},
      { title: "Trio Luna Meets Mermaid Melody: Pichi Pichi Pitch"},
      { title: "Trio Luna vs The Mummy"},
      { title: "Trio Luna's Adventures of The Mummy Returns"},
      { title: "Trio Luna Meets The Goonies"},
      { title: "Trio Luna goes to Titanic"},
      { title: "Trio Luna Meets The Mask"},
      { title: "Trio Luna's Adventures of The Simpsons Movie 2"},
      { title: "Trio Luna's Adventures of A Bug's Life"},
      { title: "Trio Luna Meets The Lord of the Rings: The Two Towers"},
      { title: "Trio Luna'Adventures of The Super Mario Bros. Movie"},
      { title: "Trio Luna's Adventures of Recess: School's Out"},
      { title: "Trio Luna Meets Asterix & Obelix: Franchise"},
      { title: "Trio Luna Meets Peter Pan"},
      { title: "Trio Luna's Adventures of Digimon: The Movie" },
      { title: "Trio Luna Meets The Little Mermaid 2: Return to the Sea" },
      {title: "Trio Luna's Adventures of Star Wars: Episode II - Attack of the Clones" },
      { title: "Trio Luna Meets Kill Bill" },
      {title: "Trio Luna Meets The Powerpuff Girls: The Movie" },
      { title: "Trio Luna Meets Indiana Jones Trilogy" }

    ]
  },
  {
    season: 3,
    title: "Temporada 3",
    episodes: [
      { title: "Trio Luna Meets Iron Man" },
      { title: "Trio Luna Meets The Incredible Hulk" },
      { title: "Trio Luna Meets Iron Man 2" },
      { title: "Trio Luna Meets Thor" },
      { title: "Trio Luna Meets Captain America: The First Avenger" },
      { title: "Trio Luna Joins The Avengers" },
      { title: "Trio Luna Meets Mickey, Donald, Goofy: The Three Musketeers" },
      { title: "Trio Luna, Mickey and the Beanstalk" },
      { title: "Trio Luna's Adventures of Mickey's Christmas Carol" },
      { title: "Trio Luna Meets The Prince and the Pauper" },
      { title: "Trio Luna Meets Mickey's Once Upon a Christmas" },
      { title: "Trio Luna Meets The Exorcist" },
      { title: "Trio Luna Meets Harry Potter and the Prisoner of Azkaban" },
      { title: "Trio Luna go to The Road to El Dorado" },
      { title: "Trio Luna's Adventures of Chicken Run" },
      { title: "Trio Luna Meets Charlie and the Chocolate Factory" },
      { title: "Trio Luna Meets Doraemon: Nobita's Dorabian Nights" },
      {title: "Trio Luna Meets Mean Girls" },
      { title: "Trio Luna Gets Spirited Away" },
      {title: "Trio Luna's Adventures of Twilight franchise" },
      { title: "Trio Luna Meets Babe"},
      { title: "Trio Luna Meets The Wizard of Oz" },
      { title: "Trio Luna vs Alien" },
      { title: "Trio Luna Meets George of the Jungle" },
      { title: "Trio Luna's Adventures of Naruto the Movie: Ninja Clash in the Land of Snow" },
      { title: "Trio Luna Meets ET the Extra Terrestrial" },
      { title: "Trio Luna Meets Pinocchio" },
      { title: "Trio Luna is Fiding Nemo" },
      {title: "Trio Luna is Finding Dory" },
      {title: "Trio Luna's Adventures of Star Wars: Episode III - Revenge of the Sith"},
      {title: "Trio Luna's Adventures of Matrix Trilogy"},
      { title: "Trio Luna Meets The Lord of the Rings: The Return of the King" }
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