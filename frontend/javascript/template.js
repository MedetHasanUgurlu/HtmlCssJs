//alert("sads")

//single comment : comment out
// multiple comment

/*
console.log("Merhabalar");
console.info("info");

console.warn("warning");
console.error("error");

alert("pop-op");
window.alert("pop-up-2");

document.write("write verisi");
document.writeln("<br/> Benden sonra gelen alt satırda başlar");

*/

//variable: dinamik bir değerdir.
// $ ve _ baslayabilriz. Bu simgeler dışında başka bir şey kullanma sayi bile.
// Camelcase kullanalım

/*
var degiskenAdi = 44;
console.log(degiskenAdi);


var _degiskenAdi55 = "Merhabalar";
console.log(_degiskenAdi55);

var $degiskenAdi55 = "Merhabalar";
console.log($degiskenAdi55);

*/
/*
var sayi=44;
var object= {};
var dizi = [];
var karar = true;
*/
//whoisting : Değişken türünü sonra yaz.
//degisken =  55;
//var degisken;
//console.log(degisken);

//var ==> global 
// let ==> local ==> ES6





//console.log(typeof sayi)


// variable initialization
// İlk deger ataması
// var initData = "";
// nullpointer exception veya undefined almayız.

//Atama Operatörü
// = Atama operatörü
// == Eşit türüne bakmadan
// === eşit türüne bakarak

// Kullanıcadan veri alma
// prmpt: verisinde bize String yani kelime döner biz bunu sayıya çevirmemz gerekir.
//var userData = Number(prompt("Lütfen bir sayı giriniz"))
//console.log(userData*userData);



//instanceof o verinin o türe ait olmadığını söyler.
//var variable = "Mustafa Kemal Atatürk"
//console.log(variable);
//console.log(typeof(variable));

/*

var dizi = [];
console.log(dizi);
console.log(typeof(dizi));
console.log(dizi instanceof Array);
console.log(dizi instanceof Object);
*/

//
//console.log(dizi instanceof Number);


//undefined
//var variable;
//console.log(variable);

//Infinity 
/*
var number=7/0;
console.log(number);
*/

// NaN not a number
/*var result = 7/ "KOL";
console.log(result);
*/

//isNaN: is not a number?
//console.log(isNaN(554));


// new: hafızadan bir yer açmak
// null: hafızadaki yeri kapatmak
// zero: hafızadaki bir yere sahip ancak değeri sıfır 

//Escape Characher
//Bazen özel simgelerimizi işlem yapamadığımız durumlarda yardıma koşar.
// \
// single quote:  \'
// multiple quote \"
// console.log("1.satır \n 2.satır");


//JavaScript Keywords:
// break        : döngüyü durdurmak içindir
// return       :
// continue     : sadece o anda çalışma arasında döngüde devam etmek
// debugger     : debug atarken kullanıyoruz.


//Math

// console.log(Math.min(5435,4534,4353));
// console.log(Math.max(5435,4,54));
// console.log(Math.sqrt(16));

// Sayılar
// let sayi1 = 55;

// Tam Sayı
// console.log(sayi1);
// Virgüllü Sayı
// sayi1 = 44.44;
// console.log(sayi1);

//Bilimsel
// let bilimselGosterim;
// bilimselGosterim = 12E+5;



//İnfinity
// const number2 = 5/0;
// console.log(number2);

//Sayı sistemleri
//Binary(2) ==> 0 ve 1
//Octave(8) ==> 0,1,2,3,4,5,6,7
//Decimaş(10) ==> 0,1,2,3,4,5,6,7,8,9
//Hexadecimal(16) ==> 0,1,2,3,4,5,6,7,8,9,10,a,b,c,d,e,f


// let binary = 0b01101010;
// console.log(binary);

// let decimal = 0x76210;
// console.log(decimal);


// toFixed: virgülden sonra kaç rakam gösterilir.
// const sayi = 87.23234234;
// console.log(sayi.toFixed(5));

// toExpantional: 

// KELİMELER

// const string = "Mehaba güzel insanlar";
// document.write(string + "<br/>");
// document.write("Harf Sayisi: "+ string.length + "<br/>");
// document.write(string.toUpperCase + "<br/>");
// document.write(string.toLowerCase + "<br/>");
// document.write


//parcalama
const string = "Mehaba güzel insanlar";
document.write(string.substring(2));
document.write(string.substring(2,6));

//charat
document.write(string.charAt());

































