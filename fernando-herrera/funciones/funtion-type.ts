(() => {

  const addNumber = (a: number, b: number) => a + b
  const saludar = (a: string) => `Hola ${a}`
  const saveTheWorld = () => `El mundo esta salvado`

  // variable con tipo any can be values or _functions
  let myFun : any
  
  // only asignable to functions
  // let myFun: Function 
  
  // only asignable to functions that returns a number
  // let myFun: () => number 

  // only asignable to functions that returns a number
  // & has 2 number args 
  // let myFun: (y: number, z: number) => number 

  // has value of 10
  myFun = 10
  console.log(myFun);

  // has value of a function
  myFun = addNumber
  console.log(myFun);
  console.log(myFun(1, 2)); // 3

  // has value of other function
  myFun = saludar
  console.log(myFun);
  console.log(myFun("Adrian")); // "Hola Adrian"

  // has value of other function
  myFun = saveTheWorld
  console.log(myFun);
  console.log(myFun()); // `El mundo esta salvado`



})()