const promise = new Promise((resolve, reject) => {
    const number = 15;
    if (number > 10) {
      resolve('Maggiore');
    } else {
      reject('Minore o uguale');
    }
  });
  
  promise
    .then(result => {
      console.log(result);
    })
    .catch(error => {
      console.error(error);
    });
