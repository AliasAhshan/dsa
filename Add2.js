// three operations
// O(1)

function addUpTo(n) {
  total = (n * (n + 1)) / 2;
}

let t1 = performance.now();
addUpTo(100000000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds.`);
