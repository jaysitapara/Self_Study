let p = fetch("https://dog.ceo/api/breeds/image/random");
p.then((value1) => {
  return value1.json;
}).then((value2) => {
  console.log(value2);
});
