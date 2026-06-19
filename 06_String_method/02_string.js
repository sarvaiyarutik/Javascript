

// 1 match is a searches a string and return the matched value

let text1 = "i am a full stack full developer";
console.log("match :"+text1.match("full"));

console.log("match :"+text1.match("xyz"));

// 2 repeat a string a specific number of times

let text2 = "he is a developer";

console.log("repeat :",text2.repeat(2));

// 3 replace word or value in a string with another value 

let text3 = "he was play cricket";
console.log("replace : ",text3.replace("h","H"));
console.log("replace : ",text3.replace("play","PLAY"));


// 4 replaceALL replace the all specific value

let text4 = "they play cricket";
console.log("replaceALL : "+text4.replaceAll("e","E"));

// 5 search a string and return the position of the match

let text5  = "he has not play";
console.log("search :",+text5.search("not"));

// 6 indexof we cant starting index we can do that indexof method

let text6 = "they are a watching  movie";
console.log("indexof :",text6.indexOf("w",8));

// 7 slice  this method is extracts a part of a string and return a new string  

let text7 = "i am full stack developer";

console.log("slice : ",text1.slice(3))

console.log("slice : ",text1.slice(3,10))




// 1 match 

let text8 = "what is your name ";

console.log("match : ",text8.match("your"));


let text9 = "where are you going ";

console.log("match : ", text9.match("you"));

console.log("match : ",text8.match("xyz"));

// 2 repeat 

let text10 = "what is your strength ";

console.log("repeat : ",text10.repeat(3));
console.log("repeat : ",text10.repeat(5));
console.log("repeat : ",text10.repeat(7));

// 3 replace

let text11 = "sarvaiyarutik2gmail.com";

console.log("replace : ",text11.replace("2","@"))

let text12 = "i am thinking solver";

console.log("replace : ",text12.replace("l","L"));

let text13 = "all men are achieve gol";

console.log("replace : ",text13.replace("e"));


// 4 replaceAll 


let text14 = "aaaa bbbb cccc dddd";

console.log("replaceAll : ",text14.replaceAll("a","A"));

let text15 = "i am working bug handling method";

console.log("replaceALL : ",text15.replaceAll("i","I"));

let text16 = "developer is create web site";
console.log("replaceAll : ",text16.replaceAll("e","E"));

//5 search 

let text17 = "all men are achieve gol";

console.log("search : ",text17.search("men"));

console.log("search : ",text17.search("are"));

console.log("search : ",text17.search("achieve"));

//6 indexof

let text18 = "fine a specific position";

console.log("index of : ",text18.indexOf("f",11));

console.log("index of : ",text18.indexOf("e",2));

console.log("index of : ",text18.indexOf("o",30));


// 7 slice 

let text19 = "slice in a pizza";

console.log("slice : ",text19.slice(2,7));

console.log("slice : ",text19.slice(-1,10));

console.log("slice : ",text19.slice(5,7))
