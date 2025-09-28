const rawEpisodes = [
  {
    season: 1,
    title: "Temporada 1",
    episodes: [
      { title: "Trio Luna in Once Upon a Studio" },
      { title: "Trio Luna Meets Talon" }, //Talon se unira al final del piloto
      { title: "Trio Luna wants to Wish" }, //Debut de Talon y Estrella se une al final, El trio lunatica (Opaline, Ash y Susie) se aliaran con el Rey Magnifico, Black Hat aparecera en el post credito como Thanos
      {title: "Trio Luna Meets Pinocchio"}, //debut de Estrella, y el trio luna rescatan a Jake, Jenna, las cutie mark crusaders, Cream y Maria Robotnik de las garras del Cochero
      {title: "Trio Luna Go to Labyrinth"}, //Black hat por primera vez se enfrentara al trio luna
      {title: "Trio Luna's Adventures of The Jungle Book"}, //el trio lunatica se aliaran con Shere Khan, en el post credito Black Hat invoca a Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador haciendo referencia a My Little Pony
      {title: "Trio Luna Meets Dumbo"},
      { title: "Trio Luna Meets Bambi" }, //luna loud y Loona se transformaran animales
      { title: "Trio Luna Meets Aladdin" }, //Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador se aliaran con Jafar
      { title: "Trio Luna Meets The Little Mermaid" }, //el trio lunatica se aliaran con Ursula, y Ariel se unira al final
      { title: "Trio Luna, Mickey and the Beanstalk"}, //debut de Ariel
      { title: "Trio Luna Meets The Reluctant Dragon" },
      { title: "Trio Luna's Adventures of The Lion King" }, //el trio luna se transformaran en animales de africa, Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador se aliaran con Scar, y en la escena post-credito aparece Black Hat en el que mandara a su aprendiz Darkash
      {title: "Trio Luna Meets Pocahontas"}, // el trio lunatica se aliaran con Gobernador Ratcliffe
      { title: "Trio Luna's Nightmare Before Christmas" }, //debut de Darkash contra el trio luna, y la princesa luna se transforma en Nightmare Moon y Luna Loud en Marceline la reina de los vampiros
      {title: "Trio Luna Meets Brother Bear"},
      { title: "Trio Luna Meets The Hunchback of Notre Dame" }, //Darkash unira fuerzas con el trio Lunaticas, Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador para aliar con Frollo
      {title: " Trio Luna meets Spider-Man (2002)"},
      { title: "Trio Luna's Adventures of Beauty and the Beast" }, //Darkash y el trio lunatica se aliaran con Gaston
      {title: "Trio Luna's Adventures of Beauty and the Beast: The Enchanted Christmas"}, //Darkash, Rey Sombra, Magica De hechizos, Bill Cipher y Lord Dominador se aliaran con Forte
      { title: "Trio Luna's Adventures of Fantasia" } //Black hat por primera vez invocara a su equipo completo de villanos
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