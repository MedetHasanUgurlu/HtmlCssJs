// alert("Deneme");
// window.alert("Deneme");

// console.log("Hello There")
// console.info("info");
// console.warn("warning");
// console.error("error");

// var  ==> global
// let  ==> local ==> ES6 (2015)
// const==> local ==> ES6 (2015)

// typeof yapısı
// let array = [];
// console.log(typeof array);

// nullpointer exception veya undefined hatası almayız.
// let initData = "";

// Kullanıcadan veri almak.
// Prompt String döndürür.
// let userData = prompt("Lütfen bir sayı giriniz.");
// console.log(userData);
// console.log(typeof userData);

// let userData2 = Number(prompt("Lütfen bir sayı giriniz."));
// console.log(userData);
// console.log(typeof userData);

// instanceof olup olamdığını kontrol eder
// let a = 'Lorem';
// console.log(a);
// console.log(a instanceof String);

// BACK SLASH
console.log("1.satır\n 2.satır");
console.log("1.satır\n \t 2.satır");


// Hexadecimal number
let hexadecimal = 0x76210;
console.log(hexadecimal);

//toFixed number
const number = 54.23234234;
console.log(number.toFixed(4));


//String ekleme
const string ="Merhabalar güzel insanlar";
document.write(string.concat(":-)") + "<br/>");

//String parçalama
//Substring
document.write(string.substring(4) +"<br/>");

document.write(string.substring(0,4) + "<br/>");

//Char at bir harf deneme
document.write(string.charAt(11)+ "<br/>");

//indexof ben harf veririrm o sayı dönecek

document.write(string.indexOf("güzel")+ "<br/>");
// lastIndexOf sağdan başlamaya başlar.
document.write(string.lastIndexOf("insanlar")+ "<br/>");

let variable = parseInt("56.343");
let variable2 = Number("543");

document.write(variable + "<br/>");
document.write(variable2 + "<br/>");




