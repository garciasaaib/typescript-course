(() => {

  // enums works like an array, that every value
  // apunta a la posicion del array
  enum AudioLevel {
    min, med, max
  } 

// we can declarate the position,
  enum AudioLevel2 {
    min = 10,
    med = 20,
    max = 30
  } 
  // when you create a variable that is an enum parameter
  // you return the index from that enum
  let currentAudio = AudioLevel.med;


  console.log(currentAudio);
  console.log(AudioLevel);
  
})()