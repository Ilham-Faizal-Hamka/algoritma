// 1. Membalik string dengan angka tetap di akhir
function reverseStringWithNumber(input) {
  let letters = input.replace(/[0-9]/g, ""); // Hapus angka
  let number = input.replace(/[^0-9]/g, ""); // Ambil angka

  let reversedLetters = letters.split("").reverse().join("");
  return reversedLetters + number;
}

// 2. Mencari kata terpanjang dari kalimat
function longest(sentence) {
  const words = sentence.split(" ");
  let longestWord = "";

  words.forEach((word) => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return `${longestWord}: ${longestWord.length} karakter`;
}

// 3. Menghitung kemunculan kata dalam array
function countOccurrences(input, query) {
  const result = [];

  query.forEach((q) => {
    const count = input.filter((word) => word === q).length;
    result.push(count);
  });

  return result;
}

// 4. Menghitung selisih diagonal matriks NxN
function diagonalDifference(matrix) {
  let n = matrix.length;
  let primaryDiagonal = 0;
  let secondaryDiagonal = 0;

  for (let i = 0; i < n; i++) {
    primaryDiagonal += matrix[i][i]; // Diagonal utama
    secondaryDiagonal += matrix[i][n - 1 - i]; // Diagonal sekunder
  }

  return Math.abs(primaryDiagonal - secondaryDiagonal);
}

// Test kasus untuk setiap soal:

// Test 1: Membalik string dengan angka tetap di akhir
const inputString = "NEGIE1";
console.log(reverseStringWithNumber(inputString)); // Output: "EIGEN1"

// Test 2: Mencari kata terpanjang dalam kalimat
const sentence = "Saya sangat senang mengerjakan soal algoritma";
console.log(longest(sentence)); // Output: "mengerjakan: 11 karakter"

// Test 3: Menghitung kemunculan kata dalam array
const INPUT = ["xc", "dz", "bbb", "dz"];
const QUERY = ["bbb", "ac", "dz"];
console.log(countOccurrences(INPUT, QUERY)); // Output: [1, 0, 2]

// Test 4: Menghitung selisih diagonal dari matriks NxN
const matrix = [
  [1, 2, 0],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(diagonalDifference(matrix)); // Output: 3
