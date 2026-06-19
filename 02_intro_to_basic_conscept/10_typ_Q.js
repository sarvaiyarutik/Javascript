

// String to Number



console.log("String to Number 1 :", "454" - 5);

console.log("String to Number 2 :","30" + 10);

console.log("String to Number 3 :","1330" * 1000);

console.log("String to Number 4 :","12" / 10);

console.log("String to Number 5 :", "355" % 123);

console.log("String to Number 6 :","2323" + 5534);

console.log("String to Number 7 :","545" * 3232);

console.log("String to Number 8 :","54" + 13);

console.log("String to Number 9 :","535" / 545 );

console.log("String to Number 10 :", "gggf" - 434);


// Number to String 

console.log("Number to String 1  :",  12 + "3434");

console.log("Number to String 2  :",100 - "12");

console.log("Number to String 3  :",10 * "ddgg");

console.log("Number to String 4  :",47 / "2");

console.log("Number to String 5  :",512 % "6");

console.log("Number to String 6  :",434 + "244");

console.log("Number to String 7  :",331 - "fdfdf");

console.log("Number to String 8  :",100 || 13);

console.log("Number to String 9  :",3133 * "cds");

console.log("Number to String 10 :",22333 - "4ffd");


// Boolean to Number 


console.log("Boolean to Number 1 :",true + 10);

console.log("Boolean to Number 2 :",false + 2);

console.log("Boolean to Number 3 :",true - 4);

console.log("Boolean to Number 4 :",false * 82);

console.log("Boolean to Number 5 :",true / 72);

console.log("Boolean to Number 6 :",true ** 20);

console.log("Boolean to Number 7 :",false % 50);

console.log("Boolean to Number 8 :",true + "10");

console.log("Boolean to Number 9 :",false - "30");

console.log("Boolean to Number 10:",false + 50);

// Null to Number 

console.log("Null to Number 1 :",null + 10);

console.log("Null to Number 2 :",null - 50);

console.log("Null to Number 3 :",null * 2320);

console.log("Null to Number 4 :",null / 60);

console.log("Null to Number 5 :",null % 90);

console.log("Null to Number 6 :",null + "113");

console.log("Null to Number 7 :",null - "4234");

console.log("Null to Number 8 :",null + 211);

console.log("Null to Number 9 :",null - 100);

console.log("Null to Number 10:",null + 120);



// Undefine to Number 


console.log("Undefine to Number 1 :",undefined - 100);

console.log("Undefine to Number 2 :",undefined + 45);

console.log("Undefine to Number 3 :",undefined * 10);

console.log("Undefine to Number 4 :",undefined / 20);

console.log("Undefine to Number 5 :",undefined % 30);

console.log("Undefine to Number 6 :",undefined + "231");

console.log("Undefine to Number 7 :",undefined - "321");

console.log("Undefine to Number 8 :",undefined + "ds2343");

console.log("Undefine to Number 9 :",undefined ** 10);

console.log("Undefine to Number 10:",undefined + 1021);


// Type Conversion 


let str1 = 123;

let num1 = String(str1);

console.log("Number to String :",num1);

console.log("Type of          :",typeof num1);


let str2 = "rutik";

let num2 = Number(str2);

console.log("String to Number :",num2);

console.log("Type of          :",typeof num2);


let str3 = true;

let num3 = String(str3);

console.log("Boolean to Number :",num3);

console.log("Type of           :",typeof num3);


let str4;

let num4 = String(str4);

console.log("Undefine to Number :",num4);

console.log("Type of            :",typeof num4);


let str5 = 74587864568766;

let num5 = Boolean(str5);

console.log("Bigint to Boolean :",num5);

console.log("Type of           :",typeof num5);

let str6 = 31.4584;

console.log("ParseInt   :",parseInt(str6));

console.log("ParseFloat :",parseFloat(str6)); 


let str7 = 312323.435555;

console.log("parseInt", parseInt(str7));
console.log("parseFloat",parseFloat(str7));

