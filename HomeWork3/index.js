//const HomeWork3 = require('./circle');

//HomeWork3.circleArea((5));
//HomeWork3.circleCircumference((10));

/*


Ödev 3
Daire Modüler Dosyası
Daire alan : circleArea ve daire çevre : circleCircumference fonksiyonları içeren ve consola sonuçları yazdıran circle.js dosyası oluşturunuz.
module.exports yöntemi ile fonksiyonları oluştururken export ediniz.
require ve object destructing kullanarak index.js dosyasında yarıçap (r) 5 olacak şekilde ekran çıktısını alınız.
Kolay gelsin.
*/


// Daire alan

const { circleArea, circleCircumference } = require('./circle');

const r = 5;

circleArea(r);
circleCircumference(r);


