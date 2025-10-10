/* n amount of operations (+= repeats for every value of i)
i++ also scales, n addtions and n assignments
let total = 0 is 1 assignment
i = 1 assignments
i <= n = n number of assignments

This is as high as 5n + 2
*/

function addUpTo(n) {
  let total = 0;
  for (let i = 0; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(100000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
