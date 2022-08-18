//ÖDEV (if-else for break continue)
//Fonksiyonlarla
//Örnek: 1 ile kullanıcının vereceği (prompt) bitiş sayısına göre
//kullancı: 5 verdi diyelim 1<=X<=5 "İlginçleştirelim verilen sayı kadar input istesin ve sayıların toplamını versin. "


/*for (let i = 0; i <= x; i++) {

    const element = x
}*/
/*
//1.adım: kaç tane sayı var ?
let x = Number(prompt("Lütfen bir sayı giriniz."));
if (x ==44) {
    window.close();
    
}
document.write("1.adım: kaç tane sayı var ? " +"<br/>"+ x +"<br/>");


//2.adım: sayı toplamları var ?
let sumFunction = () => {
    let a = 0
    for (let i = 0; i <= x; i++) {

        a += i;
            
    }
    return  a

}
document.write("2.adım: sayı toplamları var ? " +"<br/>"+ sumFunction(x)+"<br/>");



//3.adım: kaç tane tek sayı var ?

let numberOfOddFunction = () => {
    let odd = 0;
    for (let i = 0; i <=x; i++) {
        if(i%2 != 0){
            odd++;
        }
    }
    return odd

}
document.write("3.adım: kaç tane tek sayı var ?" +"<br/>"+numberOfOddFunction(x)+"<br/>");

//4.adım: tek sayılar toplamı ?
let sumOfOddFunction = () => {
    let sumOfOdd = 0;
    for (let i = 0; i <=x; i++) {
        if(i%2 != 0){
            sumOfOdd +=i;
        }
    }
    return sumOfOdd

}
document.write("4.adım: tek sayılar toplamı ?" +"<br/>"+sumOfOddFunction(x)+"<br/>");


//5.adım: tek sayılar gösterelim ?
document.write("5.adım: tek sayılar gösterelim ?" +"<br/>");


let displayOddNumbers = () => {
    let a ={};
    for (let i = 0; i <=x; i++) {
        if(i%2 != 0){
            document.write(i + "\t" +"<br/>");
        }
    }


}
displayOddNumbers(x);


//6.adım: kaç tane çift  sayı var ?

let numberOfEvenNumbersFunction = () =>{

    let even = 0;
    for (let i = 1; i <=x; i++) {
        if(i%2==0){
            even ++;
        }

    
    }
    return even
}
document.write("6.adım: kaç tane çift  sayı var ?" +"<br/>"+numberOfEvenNumbersFunction(x)+"<br/>");


//7.adım: çift sayılar toplamı ?

let sumOfEvenNumbersFunction = () =>{

    let sumOfEven = 0;
    for (let i = 1; i <=x; i++) {
        if(i%2==0){
            sumOfEven +=i;
        }

    
    }
    return sumOfEven
}
document.write("7.adım: çift sayılar toplamı ?" +"<br/>"+sumOfEvenNumbersFunction(x)+"<br/>");

//8.adım: çift sayılar gösterelim ?
document.write("5.adım: tek sayılar gösterelim ?" +"<br/>");


let displayEvenNumbers = () => {
  
    for (let i = 0; i <=x; i++) {
        if(i%2 == 0){
            document.write(i + "\t" +"<br/>");
        }
    }


}
displayEvenNumbers(x);

//Eğer verilen sayılarda 7 sayısı varsa bunu eklemesin (continue)
let noCR7 = () =>{
    
    for (let i = 0; i <=x; i++) {
        if(i ==7){
            document.write("We adore Messi not CR7" +"<br/>");
            continue;
        }
        
        
    }
};
noCR7();
//Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın  (break)

let controlInput =() =>{
    let sum = 0;
    if(x >=100){
       
        document.write("İnput bigger than 100");
        for (let i = 0; i <= x; i++) {
            sum += i;

            
            
        }

    }
    return sum;
};
document.write("Eğer bitiş sayısı 100 fazla ise 100'e kadar olanlar toplansın" +"<br/>"+controlInput(x)+"<br/>");
//Eğer kullanıcı başlangıç sayıdan küçük girerse uyaralım başlangıçtan büyük girmesini isteyelim

//Eğer kullanıcı secret-key girerse yani 44 sayısını girerse program çalışmayı direk durdursun

*/

// -----------ÖDEV------------------
// örneklerimizi function,anonymous ve arrow function ile yapalım.
// değişken olarak var,let,const kullanalım.

// Örnek-1 :  y=3x+4k ==>1.dereceden2bilinmeyenlidenklem algoritması
// Kullanıcı tarafından alınan x ve kdeğerlerini hesaplayan algoritma yazınız ?
/*
let x = Number(prompt("x:"));
let k = Number(prompt("k:"));

let function1 = () =>{
    return x + k

}
console.log(function1());

*/
// Örnek-2 :   Kullanıcı tarafından alınan dereceyi  Fahrenhayta çeviren algoritma yapalım.
// Formül:(derece*9/5)+32
/*
let celcius = Number(prompt("Celcius:"));
let fahrenayt = () => {

    return celcius*9/5 + 32


}
console.log(fahrenayt());

*/
// Örnek-3 :   operatör işlemleri: aşağıdaki örneği javascript ile yapalım
// 4+3*2(3:3-1*6+9:1+(3:3))
/*
let calculation = () => {
    return        4+3*2*((3/3)-(1*6)+(9/1)+(3/3))
}
console.log("Result: " + calculation());
*/
// Örnek-4 :  Aşağıdaki örnekleri math ile çözelim ?
//  -5.9 sayıyının aşağıdaki işlemleri yaptıralım ?
//  1-mutlak değeri alsın 5.9
/*
let b = -5.9;
console.log("Abs:" +Math.abs(-5.9));
*/
/*
//  2-yuvarlama yapsın  6.0
console.log("Round:" +Math.round(-5.9));
//  3-karesini alsın 36.00
console.log("Pow:" +Math.pow(-5.9,2));
//  4-karekök alsın 6.0
console.log("Abs:" +Math.sqrt(36.00,2));
//  5-yuvarlama yapsın 6.0
console.log("Round:" +Math.round(-5.9));
//  6-)çıkan sonucu 5 bölsün 6/5=1
console.log("Round:" +Math.round(6.0));
//  7-) iki sayı arasından karşılaştırma yapsın en küçüğünü alsın ve 1 ve 5
let smallest;
if(b>1){smallest= 1;}
//  8-) küçük sayı eğer tekse 3 eklesin çiftse 5 eklesin 
// if(b>1){
//     if(){smallest= 1;}
// Örnek-5 : kullanıcı tarafından girilen bir sayıyı negatif mi pozitif mi olduğu ekran yazdıran algoritma ?

let givenValue = Number(prompt("Please enter a number."));
let checkOddOrEven = ()=>{
    if(givenValue%2==0){
        return "Even"
        
    }
    else{
        return "Odd";
    }

}
console.log("Value is :" + checkOddOrEven());


// NOT: cast kullalım 
*/
// Örnek-6 : kullanıcı tarafından password ve repassword alalım sonrasında bu iki değeri karşılaştırma yapalım
// eğer aynı girilirse aynı veri yoksa birbirine uymadı yazan algoritma yapalım.
// This part made by Html5 and javascript


//JS Part
/*
document.getElementById("button").onclick= function(){
    let password = document.getElementById("password").value;
    let repassword = document.getElementById("repassword").value;
        if (password == repassword) {
            console.info("Corret password");
        } else {
            console.error("Invalid password");
        }
    };


*/
//HTML Part
/*
<table>
    <tr>
        <th>Password:</th>
        <td> <input type="text" id="password" name="password" placeholder="Enter your password" /> </td>
    </tr>
    <tr>
        <th>Repassword:</th>
        <td> <input type="text" id="repassword" name="repassword" placeholder="Enter your password" /> </td>
    </tr>
</table>


    <td><input id="button" type="submit" name="button" value="enter" /></td>

*/



// Örnek-7  Haftanın günlerini bulan algoritma ?
// let weekInDay = () => {
//     const nowDay = new Date().getDay();
//     console.log(nowDay);
//     try {
//         switch (nowDay) {
//             case 6:
//                 console.log("cumartesi");
//                 break;

//             default:
//                 console.log("haftanın günleri dışında girildi")
//                 break;
//         }
//     } catch (error) {
//         console.log(error)
//     }
// }
/*
let weekinDay = () => {
    const nowDay = new Date().getDay();


    if(nowDay % 7 ==0){
        console.log("Pazar");
        

    }else if(nowDay % 7 == 1){
        console.log("Pazartesi");


    }else if    (nowDay % 7 == 2){
        console.log("Salı");
    }
    else if    (nowDay % 7 == 3){
        console.log("Çarşamba");

    }
    else if    (nowDay % 7 == 4){
        console.log("Perşembe");
    }
    else if    (nowDay % 7 == 5){
        console.log("Cuma");
    }
    else if    (nowDay % 7 == 6){
        console.log("Cumatesi");
    }
};


weekinDay();

*/

// weekInDay()

// Örnek-8 :  aşağıdaki dizi elemanlarından tek ve çift olanları ayrı dizilerde listelemek ?
let oddElements = new Array();
let evenElements = new Array();
let elemanlar = [11, 22, 33, 44, 55, 66, 77, 88, 99]
let findOddandEven = () => {
    let result = new Array();
    for (const element of elemanlar) {
        if (element % 2 == 0) {
            evenElements.push(element);
        } else {
            oddElements.push(element);
        }



    }
    result[0] = evenElements;
    result[1] = oddElements;

    return result;
};

console.log(findOddandEven()[0]);


// elemanlar: 11,22,33,44,55,66,77,88,99

// Not: Hafta sonu işlenen derslerin bir kaç defa izlenmesi gereklidir.
// Aynı zamanda burada listelediğimiz konuların araştırılması konuyu anlamanıza yardımcı olacaktır.
// İşlediğimiz derslerde anlatılanların daha iyi kavranabilmesi için derste öğrendiklerimizi kendiniz de uygulayarak pekiştirebilirsiniz.