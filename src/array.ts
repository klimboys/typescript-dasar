// arayy
// let array:number [] = [1, 2, 3];
let array: number[];
// akan error karena jelas variable di atas number
// 1. array = ['string']
array = [1, 2, 3];

// string
let array2: string[];

array2 = ['oke', 'ok'];

let array3: any[];

array3 = [1, 'oke', true, {}];

// tuples
// adalah sebuah array yang berisi berbagaimacam data tetapi nilai atau item nya terbatas

let biodata: [string, number];
biodata = ['Tasik Malaya', 14];
// biodata = [12, 'Bandung']; salah
// biodata = ['Bandung', true] salah
// biodata = ['Bandung', 14, true] salah

