(() => {
  const hero: string = "flash"

  function returnName(): string {
    return hero
  }

  const activate = (): string => {
    return "activate"
  }

  console.log(typeof activate) // function type


  const heroName = returnName()
})()