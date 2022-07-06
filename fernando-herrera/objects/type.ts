(() => {

  //crea reglas o constrains en objetos
  type Hero = {
    name: string,
    age: number,
    powers: string[],
    getName?: () => string
  }


  // creando un objeto
  let flash: Hero = {
    name: "Barry Allen",
    age: 24,
    powers: ["super velocidad", "Viajes en el tiempo"]
  }


  // creando otro objeto
  let superman: Hero = {
    name: "Clark",
    age: 60,
    powers: ["Súper fuerza", "Rashos lazer"],
    getName() {return this.name}
  }

  console.log(flash.getName)
})()