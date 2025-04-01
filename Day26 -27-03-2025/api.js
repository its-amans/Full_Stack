//generally the api response are in json format.

let jsonRes='{"fact":"The first cartoon cat was\u00a0Felix the Cat\u00a0in 1919. In 1940, Tom and Jerry starred in the first theatrical cartoon \u201cPuss Gets the Boot.\u201d In 1981 Andrew Lloyd Weber created the musical\u00a0Cats, based on T.S. Eliot\u2019s Old\u00a0Possum\u2019s Book of Practical Cats.","length":245}';

console.log(jsonRes);

//this will give error
// console.log(jsonres.fact);

let validRes=JSON.parse(jsonRes);
console.log(validRes);

console.log(validRes.fact);



//Similarly JSON.stringify(JSON) used to parse the js object to JSON

//There are JSON validators called jsonlint.com that are used to validate the js file.

//We can test our api response in tools like 
//1.    Hopscotch  ---open source  //https://hoppscotch.io/
//2.    Postman

//1. https://api.potterdb.com
//2. https://catfact.ninja/fact
//3. https://dog.ceo/api/breeds/image/random
//4. http://universities.hipolabs.com/                     Routes ///search?name=Greater
//5. https://icanhazdadjokes.com/