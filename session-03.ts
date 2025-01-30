// Write a code to display the multiplication table of a given integer
/* Example : Number → 9, Output: 9x1, 9x2, ... , 9x10 */
function multiplicationTable(num: number, rows: number): void {
  console.log(`Tabel ${num} (${rows} baris):`);
  for (let i = 1; i <= rows; i++) {
    console.log(`${num} x ${i}${rows > 10 ? " " : ""} = ${num * i}`);
  }
}
multiplicationTable(9, 10);

// Write a code to check whether a string is a palindrome or not
/* Example : ‘madam’ → palindrome */
function palindromeCheck(str: string): boolean {
  const lowerStr = str.toLowerCase();
  return lowerStr === lowerStr.split("").reverse().join("");
}
console.log(palindromeCheck("madam"));

// Write a code to convert centimeter to kilometer
/* Example : 100000 → “1 km” */
function cmToKm(cm: number): string {
  const kilometers = cm / 100000;
  return `${kilometers} km`.replace(/\.0$/, "");
}
console.log(cmToKm(100000));

// Write a code to format number as currency (IDR)
/* Example : 1000 → “Rp. 1.000,00” */
function formatToIDR(amount: number): string {
  const format = amount.toLocaleString("id-ID", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return `Rp. ${format}`;
}
console.log(formatToIDR(1000));

// Write a code to remove the first occurrence of a given “search string” from a string
/* Example : string = “Hello world”, search string = “ell” → “Ho world” */
function removeOccu(text: string, search: string): string {
  const index = text.indexOf(search);
  if (index === -1) return text;
  return text.slice(0, index) + text.slice(index + search.length);
}
console.log(removeOccu("Hello World", "ell"));

// Write a code to capitalize the first letter of each word in a string
/* Example : “hello world” → “Hello World” */
