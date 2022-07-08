
var a_string="THE ARRAYS";
console.log(a_string);
const countries=["Paris","America","S.Korea","Sri Lanka","India"];
console.log(countries);
var spck=countries.toString();
console.log(spck);
countries.unshift("Europe");
console.log(countries);
countries.shift();
console.log(countries);
countries.push("china");
console.log(countries);
countries.sort();   // .reverse& .sort are given same output
console.log(countries);
countries.pop();
console.log(countries);
var length_ofCountries=countries.length;
console.log(length_ofCountries);
var third_last_country=countries[length_ofCountries-3]; 
console.log(third_last_country);
var thirdLast_leng_ofCountry=third_last_country.length;
console.log(thirdLast_leng_ofCountry);
var forth_char=third_last_country.charAt(thirdLast_leng_ofCountry-4);
console.log(forth_char);
var last_country=countries[length_ofCountries-1];
console.log(last_country);
var len_lastCOUNTRY=last_country.length;
console.log(len_lastCOUNTRY);
var char_ofcountry=last_country.charAt(len_lastCOUNTRY-1);
console.log(char_ofcountry);
var charcode_ofcountry=last_country.charCodeAt(len_lastCOUNTRY-1);
console.log(charcode_ofcountry);
var secondCOUNTRY="              america           ";
console.log(secondCOUNTRY);
secondCOUNTRY=secondCOUNTRY.trim(); 


function display_second_country(){ 
  document.getElementById("java_2").innerHTML = secondCOUNTRY;
}

console.log(secondCOUNTRY);                                                      
const numbers=["22","44","76","87"];
console.log(numbers);























