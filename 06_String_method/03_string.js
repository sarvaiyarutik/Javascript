

let text1 = "i am fullstack developer";

// split a string into an array of substring

console.log(" split string into array without space   : ",text1.split(""));
console.log("split string into array with space added :",text1.split(" "));
console.log("will remove to specific value in a text and return string :",text1.split("am"));


// the substring () method does not change the original value 

// start is grater then end , arguments are swapped : (2,10) = (10,2)

// start or  end values less than 0, are treated as 0

// substring 


let text2 = "we can access all value in js";

console.log("substring : ",text2.substring(5));
console.log("substring : ",text2.substring(2,10));
console.log("substring : ",text2.substring(10,2));


// toLocalUpperCase 

let text3 = "hello";
console.log("uppercase : ",text3.toLocaleUpperCase());

// ToLocaleLowercase

let text4 = "HELLO";
console.log("lowercase : ",text4.toLocaleLowerCase());

// trim Return a string with remove whitespace

let text5 = "                  hello world                      ";
console.log("count a length : ",text5.length);

console.log("trim :",text5.trim());

console.log("TrimStart : ",text5.trimStart());

console.log("TrimStart : ",text5.trimEnd());





// example 


// split

let text6 = "they are playing a cricket";

console.log("split string with space added : ",text6.split(""));

console.log("split string without space  : ",text6.split(" "));

console.log("split remove the specific string : ",text6.split("e"))

console.log("split : ",text6.split("they"));

console.log("split : ",text6.split(""));

console.log("split : ",text6.split(" "))

console.log(text6.split(""));

console.log(text6.split(" "));

console.log(text6.split("playing"))



// substring

let text7 = "i have a full stack developer";

console.log("substring : ",text7.substring(1,9));

console.log("substring swap : ",text7.substring(9,1));

console.log("substring : ",text7.substring(-1));

console.log(text7.substring(5));

console.log(text7.substring(10,5));

console.log(text7.substring("hfhdf"));

console.log(text7.substring(0,-10));

console.log(text7.substring(8,2));

console.log(text7.substring(5,8));


// toUpperCase 

let text8 = "rutik";

console.log(text8.toLocaleUpperCase());

console.log(text1.toLocaleUpperCase());

console.log(text2.toLocaleUpperCase());


// toLowerCase 

let text9 = "RUTIK";

console.log(text9.toLocaleLowerCase());

let text10 = "I AM DEVELOPER";

console.log(text10.toLocaleLowerCase());

let text11 = "I AM A STUDENT";

console.log(text11.toLocaleLowerCase());


// trim 

let text12 = "                                web developer                                 ";

console.log(text12.trim());

console.log(text12.trimStart());

console.log(text12.trimEnd());

console.log(text12.trimEnd());

console.log(text12.trimStart());

console.log(text12.trim());

console.log(text12.trimEnd());

console.log(text12.trimEnd());

console.log(text12.trimStart());