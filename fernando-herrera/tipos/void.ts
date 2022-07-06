(()=>{
  function callBatman(): void {
    // return 1
  }

  // void declares that this function doesnt return any
  const callSuperman= (): void => {
    return;
  }
  // if the function doesn't return any, the value of a is void
  const a = callBatman()
  console.log(a)
})()