(() => {
  const fullName = (firstName: string, lastName: string): string => {
    if(!firstName) throw new Error("Name required")
    return `${firstName} ${lastName}`
  }

  const data = fullName("adrian", "garcia")

  console.log(data)
})()