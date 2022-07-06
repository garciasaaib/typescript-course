(() => {
  let avenger: any = 123;
  let exists; // implicit any
  const power; // const must be initializated

  avenger = 'Dr Strange'
  console.log(avenger[0]);
  console.log(avenger.charAt(0));

  avenger = 12345.46123
  console.log(avenger.toFixed(2));

  console.log(exists);
  console.log(power);
  console.log((avenger as string).charAt(2));
  
})()