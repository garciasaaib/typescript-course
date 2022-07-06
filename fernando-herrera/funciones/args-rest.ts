(() => {

  // rest arguments se refiere a todos los argumentos faltantes
  // en js se muestra solo haciendo args...

  const fullName = (firstName: string, ...args: string[]): string => {
    return `${firstName} ${args.join(' ')}`
  }


  const superman = fullName("adrian", "garcia", "saaib")

  console.log(superman)
})()