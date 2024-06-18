let country = 'Portugal';
let continent = 'Europe';
let population = 10;
let language='english';





const description1 =
  country +
  ' is in ' +
  continent +
  ', and its ' +
  population +
  ' million people speak ' +
  language;

console.log(description1);

if (population > 33) {
    console.log(`${country}'s population is above average`);
  } else {
    console.log(
      `${country}'s population is ${33 - population} million
      below average`
    );
  }