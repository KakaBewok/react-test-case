// JAWABAN NO.1
const input = 'NEGIE1';
const number = input.slice(-1);
const str = input.slice(0, -1).split('').reverse().join('');
const result = str + number;
console.log(result); // EIGEN1
// Penjelasan kode:
// 1.	const input = "NEGIE1"; menginisialisasi variabel input dengan nilai "NEGIE1".
// 2.	const number = input.slice(-1); mengambil karakter terakhir dari input dan menyimpannya di variabel number.
// 3.	const str = input.slice(0, -1).split("").reverse().join(""); mengambil semua karakter dari input kecuali karakter terakhir (angka) menggunakan .slice() dan kemudian mereverse urutan abjad dengan .split(), .reverse(), dan .join(). Hasilnya disimpan di variabel str.
// 4.	const result = str + number; menggabungkan kembali string dan angka, dan menyimpan hasilnya di variabel result.
// 5.	console.log(result); mencetak hasilnya ke konsol.

// JAWABAN NO.2
const kalimat = 'Saya sangat senang mengerjakan soal algoritma';
const kataTerpanjang = kalimat
  .split(' ')
  .reduce((a, b) => (a.length >= b.length ? a : b));
console.log(kataTerpanjang); //mengerjakan
// Penjelasan kode:
// 1.	Pertama-tama, kita definisikan sebuah konstanta kalimat yang berisi kalimat yang ingin dicari kata terpanjangnya.
// 2.	Kemudian, kita gunakan method split untuk memecah kalimat menjadi array of string, dengan separator spasi.
// 3.	Selanjutnya, kita menggunakan method reduce untuk mencari kata terpanjang dalam array of string tersebut. Method reduce akan menjalankan fungsi callback untuk setiap elemen dalam array, dimulai dari indeks pertama.
// 4.	Fungsi callback tersebut akan membandingkan panjang string dari elemen sekarang (b) dengan panjang string dari elemen sebelumnya (a). Jika panjang string a lebih besar atau sama dengan panjang string b, maka nilai a akan dikembalikan sebagai hasil reduksi. Jika tidak, maka nilai b akan dikembalikan sebagai hasil reduksi.
// 5.	Hasil reduksi akhir adalah kata terpanjang dalam kalimat tersebut, yang kemudian akan dicetak ke console menggunakan console.log.

// Dalam kalimat "Saya sangat senang mengerjakan soal algoritma", terdapat beberapa kata yang memiliki panjang yang sama, yaitu "mengerjakan" dan "algoritma", yang keduanya memiliki panjang 10 karakter. Namun, kode di atas akan mengembalikan kata "mengerjakan" sebagai kata terpanjang, karena ia muncul lebih awal dalam urutan kata dalam kalimat tersebut. Jadi, jika ada beberapa kata dengan panjang yang sama, kode tersebut akan mengambil kata yang muncul lebih awal dalam kalimat.

// JAWABAN NO.3
const inputText = ['xc', 'dz', 'bbb', 'dz'];
const query = ['bbb', 'ac', 'dz'];
const kemunculan = query.map((q) => inputText.filter((i) => i === q).length);
console.log(kemunculan); //[1,0,2]
// Penjelasan kode:
// 1.	Pertama-tama, kita definisikan sebuah konstanta input yang berisi array of string yang akan dicari kemunculan kata-katanya.
// 2.	Selanjutnya, kita definisikan sebuah konstanta query yang berisi array of string yang akan dicari kemunculannya dalam input.
// 3.	Untuk mencari kemunculan masing-masing query dalam input, kita menggunakan method map pada array query. Method map akan menjalankan fungsi callback untuk setiap elemen dalam array, dan mengembalikan array baru yang berisi hasil pemanggilan fungsi callback pada setiap elemen.
// 4.	Fungsi callback tersebut akan menggunakan method filter untuk mencari elemen-elemen dalam input yang sama dengan query saat ini (q), dan mengembalikan array baru yang berisi elemen-elemen tersebut. Kemudian, panjang array tersebut (yaitu jumlah kemunculan query saat ini dalam input) akan dikembalikan sebagai hasil pemanggilan fungsi callback.
// 5.	Hasil array dari pemanggilan method map adalah array baru yang berisi jumlah kemunculan masing-masing query dalam input, yang kemudian akan dicetak ke console menggunakan console.log.
// Dalam kasus ini, array hasil pemanggilan method map adalah [1, 0, 2], yang berarti query "bbb" muncul sebanyak 1 kali, query "ac" tidak muncul, dan query "dz" muncul sebanyak 2 kali dalam input.

// JAWABAN NO. 4
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
let diagonal1 = 0;
let diagonal2 = 0;
for (let i = 0; i < matrix.length; i++) {
  diagonal1 += matrix[i][i]; //15
  diagonal2 += matrix[i][matrix.length - i - 1]; //12
}
const selisihDiagonal = diagonal1 - diagonal2;
console.log(selisihDiagonal); //3
// Penjelasan kode:
// 1.	Pertama-tama, kita definisikan sebuah konstanta matrix yang berisi matriks yang ingin dicari selisih diagonalnya.
// 2.	Selanjutnya, kita inisialisasi dua variabel diagonal1 dan diagonal2 dengan nilai awal 0. Variabel diagonal1 akan digunakan untuk menghitung jumlah elemen pada diagonal pertama, sedangkan diagonal2 akan digunakan untuk menghitung jumlah elemen pada diagonal kedua.
// 3.	Untuk menghitung jumlah elemen pada diagonal utama dan diagonal kedua, kita menggunakan loop for untuk mengiterasi baris dan kolom pada matriks. Pada setiap iterasi, kita menambahkan elemen pada diagonal utama ke variabel diagonal1 (yaitu elemen dengan indeks baris dan kolom yang sama), dan menambahkan elemen pada diagonal kedua ke variabel diagonal2 (yaitu elemen dengan indeks baris yang sama dengan indeks kolom terbalik).
// 4.	Setelah loop selesai, kita hitung selisih antara jumlah elemen pada diagonal utama dan diagonal kedua dengan mengurangkan nilai variabel diagonal2 dari nilai variabel diagonal1. Hasilnya akan disimpan pada variabel selisihDiagonal, yang kemudian akan dicetak ke console menggunakan console.log.
// Dalam kasus ini, jumlah elemen pada diagonal utama adalah 1 + 5 + 9 = 15, dan jumlah elemen pada diagonal kedua adalah 0 + 5 + 7 = 12. Oleh karena itu, selisih antara kedua diagonal adalah 15 - 12 = 3.
