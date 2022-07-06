(()=>{
  // not a array, its a tuple
  // definition of each position in an array
  const hero: [string, number, boolean] = ['Dr Strange', 100, true]

  // hero[0] = 50
  // hero[1] = "Ironman"
  
  hero[0] = "Ironman"
  hero[1] = 50
  hero[2] = true

  console.log(hero)
})()