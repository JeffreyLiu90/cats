const nameInverter = function (name) {

  if(name === undefined) {
    throw new Error("Error")
  }

  if (name === '' || name === "Dr. ") {
    return '';
  }

  let honorifics = "Dr."
  let doctorFirstName = name.trim().split(" ")
console.log(doctorFirstName[0])
  if (doctorFirstName.length === 2) {
    if (doctorFirstName[0] === honorifics) {
      return name
    }}
    if (doctorFirstName.length === 3 && doctorFirstName[0] === honorifics) {


      return (doctorFirstName[0] +" " + doctorFirstName[2] + ", " + doctorFirstName[1])
    }

      let letters = name.trim().split(" ")
      let newLetters = letters.reverse();
      let answer = newLetters.join(", ")
      return answer;
    }



/*
"A" === "Dr. A"
"A"


"Dr." -> ""
"Dr. Jeff" -> "Dr. Jeff"
"Jeff Liu" -> "Liu, Jeff"


Dr. Jeff -> how do i check if this string is two words
Dr. Jeff -> it's two words, how do i check if the first word is Dr.
if the first word is dr., return original thing
if the first word is not dr., return last name, first name

*/









module.exports = nameInverter;



// const shouldBuyCar = function(car) {
//   if (car === undefined) {
//     return undefined;
//   }

//   if (car.type && car.type.toLowerCase() === "hatchback") {
//     return false;
//   }

//   if (car.color && car.color.toLowerCase() === "pink") {
//     return true;
//   }

//   const goodLitres = car.litresPer100km && car.litresPer100km >= 6 && car.litresPer100km <= 11;
//   const goodPrice = car.price && car.price <= 5000;

//   if (goodLitres && goodPrice) {
//     return true;
//   }

//   return false;
// }

// module.exports = shouldBuyCar;