const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna Meets Talon" }, //Talon se unira al final del piloto
      { title: "Trio Luna wants to Wish" }, //Debut de Talon y Estrella se une al final, El trio lunatica (Opaline, Ash y Susie) se aliaran con el Rey Magnifico, Black Hat aparecera en el post credito como Thanos
      {title: "Trio Luna Meets Pinocchio"}, //debut de Estrella, y el trio luna rescatan a Jake, Jenna, las cutie mark crusaders, Cream y Maria Robotnik de las garras del Cochero
      {title: "Trio Luna's Adventures of The Jungle Book"}, //el trio lunatica se aliaran con Shere Khan, en el post credito Black Hat invoca a Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador haciendo referencia a My Little Pony
      {title: "Trio Luna Meets Dumbo"}, 
      { title: "Trio Luna Meets Aladdin" }, //Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador se aliaran con Jafar
      { title: "Trio Luna Meets The Little Mermaid" }, //el trio lunatica se aliaran con Ursula, y Ariel se unira al final
      { title: "Trio Luna, Mickey and the Beanstalk"},
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna's Adventures of The Lion King" }, //el trio luna se transformaran en animales de africa, Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador se aliaran con Scar, y en la escena post-credito aparece Black Hat en el que mandara a su aprendiz Darkash
      {title: "Trio Luna Meets Pocahontas"}, // el trio lunatica se aliaran con Gobernador Ratcliffe
      { title: "Trio Luna's Nightmare Before Christmas" }, 
      { title: "Trio Luna Meets The Hunchback of Notre Dame" },
      { title: "Trio Luna's Adventures of Beauty and the Beast" },
      { title: "Trio Luna's Adventures of Fantasia" }
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