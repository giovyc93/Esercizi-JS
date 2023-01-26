function multiplyByTwo(value) {
  let number = 2;
  function inner(value) {
    return number * value;
  }
  console.log(inner(value));
}

multiplyByTwo(4);
