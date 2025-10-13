const rawEpisodes = [
  {
    season: 0,
    title: "Piloto",
    episodes: [
      { title: "The Return of Grogar", link: "TheReturnOfGrogar.html" }, //buscare una forma de hacer reunir por primera vez a la princesa luna con Loona y Luna Loud que muy posiblemente lo hara yensid o Merlin para explicar la profecia
      ]
  },
  
  {
    season: 1,
    title: "Temporada 1: Inicio del Viaje",
    episodes: [
      { title: "Trio Luna enters The Haunted Mansion", 
        link: "Season1/TrioLunaEntersTheHauntedMansion.html", 
        target: "_blank" }, //esta primera aventura del tiro luna transcurre despues de the Return of grogar porque he pensado hacer algo parecido a la de pooh's adventures of the nightmare Before christmas en el que aparece Lord Muerte con Grogar maquinando un malvado plan y que hablan de la profecía incluso, y luego en el epilogo aparecería de nuevo Lord Muerte en el que enviara Malefica a acabar con el trio luna y algunos ponis (cosa que seria para la siguiente aventura en la bella durmiente)
      { title: "Trio Luna Meets Dumbo", link: "Season1/TrioLunaMeetsDumbo.html" },
      { title: "Trio Luna Meets Sleeping Beauty", link: "Season1/TrioLunaMeetsSleepingBeauty.html" }, 
      { title: "Trio Luna Meets 101 Dalmatians", link: "Season1/TrioLunaMeets101Dalmatians.html" }
      
    ]
  },

  {
    season: 0,
    title: "Temporada Outlaws Adventures", // Suceso después de Trio Luna Meets Carrie (2013)
    episodes: [
      { title: "Dorkiek Meets Beetlejuice", link: "DorkiekMeetsBeetlejuice.html" },
      { title: "Dorkiek Meets Batman", link: "DorkiekMeetsBatman.html" },
      { title: "Dorkiek Meets Edward Scissorhands", link: "DorkiekMeetsEdwardScissorhands.html" },
      { title: "Dorkiek Meets The Addams Family", link: "DorkiekMeetsTheAddamsFamily.html" },
      { title: "Dorkiek and The Nightmare Before Christmas", link: "DorkiekAndTheNightmareBeforeChristmas.html" },
      { title: "Dorkiek Meets Ed Wood", link: "DorkiekMeetsEdWood.html" },
      { title: "Dorkiek Goes to Sleepy Hollow", link: "DorkiekGoesToSleepyHollow.html" },
      { title: "Dorkiek Discovers to Planet of the Apes", link: "DorkiekDiscoversToPlanetOfTheApes.html" },
      { title: "Dorkiek Meets Charlie and the Chocolate Factory", link: "DorkiekMeetsCharlieAndTheChocolateFactory.html" },
      { title: "Dorkiek Meets The Corpse Bride", link: "DorkiekMeetsTheCorpseBride.html" },
      { title: "Dorkiek Meets Sweeney Todd: The Demon Barber of Fleet Street", link: "DorkiekMeetsSweeneyTodd.html" },
      { title: "Dorkiek Meets Alice in Wonderland", link: "DorkiekMeetsAliceInWonderland.html" },
      { title: "Dorkiek's Adventures of Dark Shadows", link: "DorkieksAdventuresOfDarkShadows.html" },
      { title: "Dorkiek's Adventures of Frankenweenie", link: "DorkieksAdventuresOfFrankenweenie.html" },
      { title: "Dorkiek Meets Dumbo", link: "DorkiekMeetsDumbo.html" },
      { title: "Dorkiek Meets Wednesday", link: "DorkiekMeetsWednesday.html" },
      { title: "Dorkiek Meets Beetlejuice Beetlejuice", link: "DorkiekMeetsBeetlejuiceBeetlejuice.html" }
    
      
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