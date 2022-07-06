(()=>{

  // never type means a function that runs an error

  // only never function
  const abc = (message: string): never => {
    throw new Error(message)
  }
  abc("error")

  // never or number function
  const abcd = (message: string): (never | number) => {
    if(false) {
      throw new Error("this brake if this function only return a never")
    }
    return 1
  }
  abcd("error")
  
 
})()