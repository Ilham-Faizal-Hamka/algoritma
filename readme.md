/******\******* ✨ Codeium Command 🌟 ******\*******/
// Bacaan singkat tentang cara menggunakan repo ini:
// 1. Membalik string dengan angka tetap di akhir
function reverseStringWithNumber(input) {
let letters = input.replace(/[0-9]/g, ""); // Hapus angka
let number = input.replace(/[^0-9]/g, ""); // Ambil angka

// 1. Clone repo ini dengan perintah `git clone https://github.com/ilhamfa/algoritma.git`
// 2. Masuk ke direktori repo dengan perintah `cd algoritma`
// 3. Jalankan perintah `node index.js` untuk menjalankan kode algoritma
let reversedLetters = letters.split("").reverse().join("");
return reversedLetters + number;
}

// Fungsi yang tersedia:
// 1. Membalik string dengan angka tetap di akhir: `reverseStringWithNumber(input)`
// 2. Mencari kata terpanjang dari kalimat: `longest(sentence)`
// 3. Menghitung kemunculan kata dalam array: `countOccurrences(input, query)`
// 4. Menghitung selisih diagonal matriks NxN: `diagonalDifference(matrix)`
// 2. Mencari kata terpanjang dari kalimat
