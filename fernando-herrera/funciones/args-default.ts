(() => {

  //optional arguments in functions
  const fullName = (firstName: string, lastName?: string, upper: boolean = false): string => {
    if (upper) return `${firstName} ${lastName || "----"}`.toUpperCase()
    return `${firstName} ${lastName || "----"}`
  }

  const data = fullName("adrian", "garcia")
  const data2 = fullName("adrian")
  const data3 = fullName("adrian", "garcia", true)

  console.log(data)
})()