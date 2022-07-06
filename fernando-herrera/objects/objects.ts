(() => {

  // declarando un objeto y creandolo
  let flash: {
    // define attributes
    name: string,
    age: number,
    powers: string[],

    // define methods
    getName?: () => string,
  } = {
    name: "Barry Allen",
    age: 24,
    powers: ["super velocidad", "Viajes en el tiempo"]
  }


  // cambiando la data de los objetos
  flash = {
    name: "Clark",
    age: 60,
    powers: ["Súper fuerza", "Rashos lazer"],
    getName() {
      return this.name
    }
  }

  console.log(flash.getName)
})()