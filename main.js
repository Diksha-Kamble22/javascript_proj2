var a_string="THE ARRAYS";
console.log(a_string);
const countries=["Paris","America","S.Korea","Sri Lanka","India"];
console.log(countries);
countries.unshift("Europe");
console.log(countries);
countries.shift();
console.log(countries);
countries.push("china");
console.log(countries);
countries.sort();   // .reverse& .sort are given same output
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
countries.splice(1,0,"FRANCE");
console.log(countries);
countries.pop();
console.log(countries);
const numbers=["44","33","75","85","97","78"];
console.log(numbers);
