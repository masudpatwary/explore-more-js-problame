for (let i = 1; i <= 50; i++) {
 
    if (i % 3 === 0 && i % 5 === 0) {
    console.log("Foo Barr");
  } 

  else if (i % 3 === 0) {
    console.log("Foo");
  } 

  else if (i % 5 === 0) {
    console.log("Barr");
  } 

  else {
    console.log(i);
  }
}
