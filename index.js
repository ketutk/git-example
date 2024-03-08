function penjumlahan(a, b) {
    if (isNaN(a) || isNaN(b)) throw new Error('must be a number');
    return a + b;
}

console.loc(penjumlahan(5 + 'a'));
console.loc(penjumlahan(5 + 5));