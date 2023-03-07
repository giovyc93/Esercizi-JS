
function printAsyncName(callback, name) {
    setInterval(() => {
      console.log(name);
    }, 1000);
  }
  
  printAsyncName(null, "giovanni");