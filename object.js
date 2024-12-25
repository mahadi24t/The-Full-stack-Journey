function increaseCounterObject(objectCounter) {
    objectCounter.counter += 1;
  }
  
  function increaseCounterPrimitive(primitiveCounter) {
    primitiveCounter += 1;
  }
  
  const object = { counter: 0 };
  let primitive = 0;


  
  console.log(increaseCounterObject(object));
  increaseCounterPrimitive(primitive);
  