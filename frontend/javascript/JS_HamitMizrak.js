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
// console.log("1.satır\n 2.satır");
// console.log("1.satır\n \t 2.satır");


// // Hexadecimal number
// let hexadecimal = 0x76210;
// console.log(hexadecimal);

// //toFixed number
// const number = 54.23234234;
// console.log(number.toFixed(4));


// //String ekleme
// const string ="Merhabalar güzel insanlar";
// document.write(string.concat(":-)") + "<br/>");

// //String parçalama
// //Substring
// document.write(string.substring(4) +"<br/>");

// document.write(string.substring(0,4) + "<br/>");

// //Char at bir harf deneme
// document.write(string.charAt(11)+ "<br/>");

// //indexof ben harf veririrm o sayı dönecek

// document.write(string.indexOf("güzel")+ "<br/>");
// // lastIndexOf sağdan başlamaya başlar.
// document.write(string.lastIndexOf("insanlar")+ "<br/>");

// let variable = parseInt("56.343");
// let variable2 = Number("543");

// document.write(variable + "<br/>");
// document.write(variable2 + "<br/>");



// function hi(name){
//     return "Merhabalar " + name +"<br/>";
// }
// let x = hi("Medet");
// document.write(x + "<br/>");

// Function Types
// 1- Immedia Function
// 2- Normal Function
// 3- Anonymous Function
// 4- Array Function

//1- Immedia Function Çağırmaya gerek yok
// (function(){
//     console.log("Immedia Function");
// })()

// // 2- Normal Function

// function normalFunction(){
//     console.log("Normal Function");
// }
// normalFunction()
// // 3- Anonymous Function

// let z = anonymousFunction = function(){
//     console.log("Anonymous Function");
// }
// anonymousFunction();
// // 4- Arrow Function

// let y = () =>{
//     console.log("Arrow Function");
//     document.write("<br/> 4-Arrow Function");
// }
// y();


// setTimeout(()=>{},5000)


// function first (number){
//     console.log(Math.pow(number, 2));


// }

// function second(){
//     const data = Number(prompt("Lütfen bir sayı giriniz."))
//     first(data);
// }

// second();



// let sumfunction = (x)=> {
//     let sum = 0;
//     for (let i = 0; i<=x;i++) {
//         sum +=i;
        
//     }
//     return sum;


// }

// document.write(sumfunction(10));

// Dizi   
let dizi = [];
let dizi2 = new Array();
let z = Number(prompt("Lütfen bir sayı giriniz."));


 let randomArrayFunction = ()=> {


    let temp;
    let array= [];
    for (let i = 0; i<z; i++) {
        temp = Math.floor(Math.random(10)*50);
        array.push(temp);

        dizi[i] = temp;
    }
    return array;

 };

 console.log("--------------------------------")
 console.log(randomArrayFunction());

//  for of(verinin kendisi) ve for each farkı 


// for (const key in randomArrayFunction()) {

//     console.log(randomArrayFunction()[key]);

//     }

console.log("*--------------------------------")
randomArrayFunction().forEach(element => {
    console.log(element);
    
});

// Filter

const a = [11,22,33,44,55,66,77,88,99,]
let b = ()=> {
    
   let result = a.filter(function(value) {
        return value >=55;

    });
    document.writeln("<br/>" + result);
};


b();











