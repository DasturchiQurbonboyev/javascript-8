// string 1

// let n = 5;

// function getUpperCases (){
//     let res = "";
//     for ( let i=65; i< n + 65; i++){
//         res += String.fromCharCode(i)
//     }
//     return res;
// }

// console.log(getUpperCases());




// String 2









// String 3

// let satr ="bkjahbvbhafvuao";

//      console.log(satr.charCodeAt(0)); 
//      console.log(satr.charCodeAt(satr.length - 1)); 






// String 4


// let N = 5;
// let belgi =`A`;
// let res = ""

// for (let i = 1; i<=N; i++){
//     res += belgi;
// }

// console.log(res);





// String 5



// let str =`Abiasuviaus`;
// let res = ""


// for (let i = str.length-1; i>=0; i--){
//     res += str[i]
// }
// console.log(res);





// String 6


// function getStringStars(satr, N) {

//     let yangiSatr = "";

//     for (let i = 0; i < satr.length; i++) {
//         yangiSatr += satr[i];
//         for (let j = 0; j < N; j++) {
//             yangiSatr += "*";
//         }
//     }

//     return yangiSatr;
// }

// let originalSatr = "salom";
// let yangiSatr = getStringStars(originalSatr, 3);
// console.log(yangiSatr.slice(0, yangiSatr.length-3));




// String 7 




// let str = "dcuabysduyasudk5879"

// e =0;

// for (el of str) {
//     if (!isNaN(el)){
//         e += el.length;
//     }
// }

// console.log(e + " ta");





// String 8



// let str = "dcuгофаbcv"

// let lotin = "";
// let lotinSoni = 0;
// let kiril = "";
// let kirilSoni = 0;


// for (let i =0; i<str.length; i++){

//     res = str.charCodeAt(i)
    
//     if (res>=97 && res<=122){
//         lotin = String.fromCodePoint(res)
//         lotinSoni +=lotin.length;  
//     }
//     else{
//         kiril =String.fromCodePoint(res);
//         kirilSoni += kiril.length;
//     }
// }

// console.log(`Lotin alifbosidagilari ${lotinSoni}   ta`);
// console.log(`Kiril alifbosidagilari ${kirilSoni}   ta`);





// String 9



// let kichikSatr = "ksdybsbaHKVSHdcasvvf"

// let kattaSatr = kichikSatr.toLocaleUpperCase();

// console.log(kattaSatr);




// String 10




// function kichigigaAlmashtir(satr) {
//     let yangiSatr = "";
    
//     for (let i = 0; i < satr.length; i++) {
//         let harf = satr[i];
        
//         if (harf >= "A" && harf <= "Z") {
//             yangiSatr += harf.toLowerCase();
//         } else if (harf >= "a" && harf <= "z") {
//             yangiSatr += harf.toUpperCase();
//         } else {
//             yangiSatr += harf;
//         }
//     }

//     return yangiSatr;
// }

// let originalSatr = "QuRbONbOyEv ZaFaRbEk";
// let yangiSatr = kichigigaAlmashtir(originalSatr);

// console.log(`Orijinal satr: ${originalSatr}`);
// console.log(`Almashtirilgan satr: ${yangiSatr}`);




// String 11




// function tekshirSatr(satr) {
//     if (satr.includes('.')) {
//         let kasrQismi = satr.split('.')[1];
//         if (kasrQismi === undefined || kasrQismi.length === 0) {
//             return 1;
//         } else {
//             return 2;
//         }
//     } else {
//         return 0;
//     }
// }

// let satr1 = "123.";
// let satr2 = "123.45";
// let satr3 = "Salom, Dunyo!";

// console.log(tekshirSatr(satr1)); 
// console.log(tekshirSatr(satr2)); 
// console.log(tekshirSatr(satr3)); 




// String  12


// function getInverseNumber(n) {
//     return -n;
// }

// let son = 7;
// let tersSon = getInverseNumber(son);

// console.log(`Berilgan son: ${son}`);
// console.log(`Ters son: ${tersSon}`);



// String 13



// function qiymatniAniqlash(ifoda) {
//     let bolganlar = ifoda.split(/[\+\-]/); 
//     let belgilar = ifoda.match(/[\+\-]/g); 

//     let natija = parseInt(bolganlar[0], 10); 

//     for (let i = 1; i < bolganlar.length; i++) {
//         let belgi = belgilar[i - 1]; 
//         let qiymat = parseInt(bolganlar[i], 10); 

//         if (belgi === '+') {
//             natija += qiymat;
//         } else if (belgi === '-') {
//             natija -= qiymat;
//         }
//     }

//     return natija;
// }

// let ifoda1 = "7 + 3 - 2";
// let ifoda2 = "5 - 2 + 1";

// console.log(`Natija-1: ${qiymatniAniqlash(ifoda1)}`); 
// console.log(`Natija-2: ${qiymatniAniqlash(ifoda2)}`); 





// String 14




// function yangiSatrHosilQilish(N1, N2, S1, S2) {
//     if (typeof N1 !== 'number' || typeof N2 !== 'number' || typeof S1 !== 'string' || typeof S2 !== 'string') {
//         return "Noto'g'ri kiritish.";
//     }

//     let yangiSatr = S1.slice(0, N1) + S2 + S1.slice(-N2);

//     return yangiSatr;
// }

// let N1 = 2;
// let N2 = 3;
// let S1 = "Najot";
// let S2 = "Talim";

// let natija = yangiSatrHosilQilish(N1, N2, S1, S2);
// console.log(`Yangi satr: ${natija}`);




// String 15




// function ikiMartaOrttir(S, C) {
//     let karakterDizisi = S.split('');

//     for (let i = 0; i < karakterDizisi.length; i++) {
//         if (karakterDizisi[i] === C) {
//             karakterDizisi[i] += C;
//         }
//     }

//     let sonuc = karakterDizisi.join('');
//     return sonuc;
// }

// let S = "JavaScript";
// let C = "a";

// let natija = ikiMartaOrttir(S, C);
// console.log(`Natija: ${natija}`);





// String 16




// function ikiMartaOrttir(S1 ,S2, C) {
//     let karakterDizisi = S1.split('');

//     for (let i = 0; i < karakterDizisi.length; i++) {
//         if (karakterDizisi[i] === C) {
//             karakterDizisi[i-1] += S2;
//         }
//     }

//     let sonuc = karakterDizisi.join('');
//     return sonuc;
// }

// let S1 = "JavaScript";
// let S2 = "AAA"
// let C = "a";

// let natija = ikiMartaOrttir(S1,S2, C);
// console.log(`Natija: ${natija}`);




// String 17



// let S1 = "asdfgasdxnvbuxasdj,jznasd"
// let S2 = "asd"

// let res = S1.split(S2);

// console.log(res.length-1);



// String 18

// let S1 = "fgasdxnvbuxasdj,jznasd"
// let S2 = "asd"
// console.log(S1);
// let x = (S1.replace(S2, ""));
// console.log(x);



// String 19

// let S1 = "asdfgasdxnvbuxasdj,jasdznasd"
// let S2 = "asd"
// console.log(S1);
// let x = (S1.replaceAll(S2, ""));
// console.log(x);


// String 20


// let S1 = "fgasdxnvbuxasdj,jznasd"
// let S2 = "asd"
// let S3 = "ASD"
// console.log(S1);
// let x = (S1.replace(S2, S3));
// console.log(x);



// String21


// let S1 = "fgasdxnvbuxasdj,jznavsd"
// let S2 = "asd"
// let S3 = "ASDSDCSD"
// let x = (S1.lastIndexOf(S2, S3));

// let s = S1.slice(0,x)

// let t = S1.slice(x+S2.length)

// let str = s.concat(S3)+t

// console.log(str);



// String 22


// function boshlanuvchiTugovchiSozlar(matn) {
//     var sozlar = matn.split(" ");

//     var boshlanuvchilar = [];
//     var tugovchilar = [];

//     for (var i = 0; i < sozlar.length; i++) {
//         var soz = sozlar[i];

//         var tozalanganSoz = soz.replace(/\s+/g, '');

//         if (tozalanganSoz !== '') {
//             var boshHarf = tozalanganSoz[0];
//             var tugHarf = tozalanganSoz[tozalanganSoz.length - 1];

//             if (boshHarf === tugHarf ) {
//                 boshlanuvchilar.push(soz);
//             }

//             if (boshHarf !== tugHarf) {
//                 tugovchilar.push(soz);
//             }
//         }
//     }

//     return {
//         boshlanuvchilar: boshlanuvchilar,
//         tugovchilar: tugovchilar
//     };
// }

// var matn = "Salom dunyo. Sog'liqni saqlang. Bobo";
// var natija = boshlanuvchiTugovchiSozlar(matn);

// console.log("Boshlanuvchi so'zlar:", natija.boshlanuvchilar);
// console.log("Tugovchi so'zlar:", natija.tugovchilar);





// String 23



// function findWordsWithTwoAs(str) {
//     var sozlar = str.split(" ");

//     var a2Sozlar = [];

//     for (var i = 0; i < sozlar.length; i++) {
//         var soz = sozlar[i];

//         var aHarflar = 0;
//         for (var j = 0; j < soz.length; j++) {
//             if (soz[j].toUpperCase() === 'A') {
//                 aHarflar++;
//             }
//         }

//         if (aHarflar === 2) {
//             a2Sozlar.push(soz);
//         }
//     }

//     return a2Sozlar;
// }

// var satr = "Salom dunyo. Alisher Anvar. Andijon Arslon";
// var a2Sozlar = findWordsWithTwoAs(satr);

// console.log("2 ta 'A' harfi bor so'zlar:", a2Sozlar);




// String 24



// function getMaxOfString(str) {
//     var sozlar = str.split(" ");

//     var engUzunSoz = "";
//     for (var i = 0; i < sozlar.length; i++) {
//         var soz = sozlar[i];

//         if (soz.length > engUzunSoz.length) {
//             engUzunSoz = soz;
//         }
//     }

//     return engUzunSoz;
// }

// var satr = "Salom dunyo. Sog'liqni saqlang. O'zbek tili";
// var uzunSoz = getMaxOfString(satr);

// console.log("Eng uzun so'z:", uzunSoz);




// String 25


// let satr = "cbz chuscy ycuzyejbj cbuzyjm jbcuzye"

// let s = satr.replaceAll(" ", ".")

// console.log(s);




// String26





// function birinchiHarfiniKattaQil(str) {
//     var sozlar = str.split(" ");

//     for (var i = 0; i < sozlar.length; i++) {
//         var soz = sozlar[i];

//         if (soz !== "") {
//             var birinchiHarf = soz[0].toUpperCase();
//             var qolganHisoblanmaydi = soz.substring(1).toLowerCase();
//             sozlar[i] = birinchiHarf + qolganHisoblanmaydi;
//         }
//     }

//     return sozlar.join(" ");
// }

// var satr = "salom dunyo. bugun havo juda yaxshi";
// var natija = birinchiHarfiniKattaQil(satr);

// console.log("Yangi satr:", natija);





// String 27




// function tinishBelgilariSoniChiqar(str, marks) {
//     var tinishBelgilarSoni = 0;

//     for (var i = 0; i < str.length; i++) {
//         var belgi = str[i];
//         if (marks.includes(belgi)) {
//             tinishBelgilarSoni++;
//         }
//     }

//     return tinishBelgilarSoni;
// }

// var satr = "Salom, dunyo! Qandaydir savol? Yaxshi, Rahmat.";
// var belgilar = [".", ",", ";", ":", "?", "!", "-", "'", '"', "(", ")"];

// var soni = tinishBelgilariSoniChiqar(satr, belgilar);
// console.log("Tinish belgilari soni:", soni);





// String 28



// function faylningNominiAniqlash(faylNom) {
//     var qatlamalar = faylNom.split("/");

//     var oxirgiQatlama = qatlamalar[qatlamalar.length - 1];

//     var kengaytmaIndeksi = oxirgiQatlama.lastIndexOf(".");
//     var kengaytma = kengaytmaIndeksi !== -1 ? oxirgiQatlama.substring(kengaytmaIndeksi + 1) : "";

//     var kengaytmasizNom = kengaytmaIndeksi !== -1 ? oxirgiQatlama.substring(0, kengaytmaIndeksi) : oxirgiQatlama;

//     return kengaytmasizNom;
// }

// var faylNom = "D:/Qudrat_c++/books/My_book.exe";
// var faylNomKengaytmasiz = faylningNominiAniqlash(faylNom);
// console.log("Kengaytmasiz fayl nomi:", faylNomKengaytmasiz);




// String 29



// function faylningKengaytmasiniAniqlash(faylNom) {
//     var qatlamalar = faylNom.split("/");

//     var oxirgiQatlama = qatlamalar[qatlamalar.length - 1];
//     var kengaytmaIndeksi = oxirgiQatlama.lastIndexOf(".");
//     var kengaytma = kengaytmaIndeksi !== -1 ? oxirgiQatlama.substring(kengaytmaIndeksi + 1) : "";

//     return kengaytma;
// }

// var faylNom = "D:/Qudrat_c++/books/My_book.exe";
// var kengaytma = faylningKengaytmasiniAniqlash(faylNom);
// console.log("Fayl kengaytmasi:", kengaytma);




// String 30




// function oxirgiPapkaNominiAniqlash(faylNom) {
//     var qatlamalar = faylNom.split("/");

//     var oxirgiPapkaNom = qatlamalar[qatlamalar.length - 2];

//     return oxirgiPapkaNom;
// }

// var faylNom = "D:/Qudrat_c++/books/My_book.exe";
// var oxirgiPapka = oxirgiPapkaNominiAniqlash(faylNom);
// console.log("Oxirgi papka nomi:", oxirgiPapka);