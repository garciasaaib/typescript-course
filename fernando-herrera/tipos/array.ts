(() => {
  const numbers: number[] = [1,2,34,6,7,7,8];
  const anys: any[] = [1,2,34,'5',6,7,7,8, true];
  const names: string[] = ["dormamu", "fruto rojo", "duende verde"];
  numbers.push(1)
  console.log(numbers)
  names.map(name => console.log(name.toUpperCase()))
})()