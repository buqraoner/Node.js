/*
Hepimizin Matematik derslerinden bildiği üzere Dairenin Alanı 
= π x r2 şeklinde hesaplanır. Node.JS Javascript çalışma ortamında yarıçap
değerini konsoldan parametre olarak girerek alanı bulmaya çalışacağız. 
Konsol çıktısı: Yarıçapı (Yarıçap) olan dairenin alanı: (Alan) şeklinde olmalıdır.

*/

const pi = 3.14;

const R = process.argv.slice(2);

const alan = pi * R * R;

console.log(
    `YarıÇapı ${R} olan dairenin Alanı : ${alan} olur.`
);

