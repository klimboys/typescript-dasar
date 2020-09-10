"use strict";
// enum
// sebuah tipe data yang menyimpan sekumpulan data konstan seperti pada file env yang menyimpan data konfigurasi
// numeric enums
var Month;
(function (Month) {
    Month[Month["JAN"] = 1] = "JAN";
    Month[Month["FEB"] = 2] = "FEB";
    Month[Month["MAR"] = 3] = "MAR";
    Month[Month["APR"] = 4] = "APR";
    Month[Month["MAY"] = 5] = "MAY";
})(Month || (Month = {}));
console.log(Month);
//string enums
var Days;
(function (Days) {
    Days["JAN"] = "januari";
    Days["FEB"] = "febuari";
    Days["MAR"] = "maret";
    Days["APR"] = "april";
    Days["MAY"] = "may";
})(Days || (Days = {}));
console.log(Days);
