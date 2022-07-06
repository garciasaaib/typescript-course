(() => {

  //optional arguments in functions
  const fullName = (firstName: string, lastName?: string): string => {
    return `${firstName} ${lastName || "----"}`
  }

  const data = fullName("adrian", "garcia")
  const dat2a = fullName("adrian")

  console.log(data)
})()