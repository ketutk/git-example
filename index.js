function penjumlahan(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("must be a number");
  return a + b;
}

console.log(penjumlahan(5, 5));

function pengurangan(a, b) {
  if (isNaN(a) || isNaN(b)) throw new Error("must be a number");
  return a + b;
}

console.log(pengurangan(5, 5));
