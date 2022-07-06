(()=>{

  type Avengers = {
    nick: string;
    ironman: string;
    vision: string;
    activo: boolean;
    poder: number;
  }
  // not to use var, instead you use let and const
  const avengers = {
    nick: 'Samuel L. Jackson',
    ironman: 'Robert Downey Jr.',
    vision: 'Paul Bettany',
    activo: true,
    poder: 1500.43
  }

  // desestructuracion es igual que en js
  const {poder, vision} = avengers

  console.log(poder.toFixed(2), vision.toUpperCase())

  //
  const printAvenger = (avengers: Avengers) => {
    console.log(avengers.ironman)
  }

  // desesctructuring typed
  const printAvenger = ({ironman,...args}: Avengers) => {
    console.log(ironman, args.vision)
  }

  printAvenger( avengers)
})()