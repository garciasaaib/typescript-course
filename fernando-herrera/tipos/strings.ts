(()=>{
  const batman:string = 'batman';
  const linternaVerde:string = "Linterna's verde"
  const volcanNegro:string = `Volcán negro`

  console.log(`I'm ${batman}`);
  console.log(batman.toUpperCase());
  console.log(batman[10]?.toUpperCase() || 'No está presente');
  
})()