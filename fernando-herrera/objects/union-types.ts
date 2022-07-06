(() => {

  //crea reglas o constrains en objetos
  type Hero = {
    name: string;
    age: number;
    powers: number[];
    getName?: () => string;
  }

  // esta variable puede ser de uno de estos 3 tipos
  let myCustomVariable: (string | number | Hero)

  // es un string
  myCustomVariable = "Fernando"

  // es un hero
  myCustomVariable = {
    name: "adrian",
    age: 10,
    powers: [1]
  }

// los type son mostrados como tipo objeto
  console.log(typeof myCustomVariable)


})()