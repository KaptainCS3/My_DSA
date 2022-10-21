let n = prompt("Enter first value: ");
let m = prompt("Enter first value: ");
let rem;

while (n != 0) {
  rem = m % n;
  m = n;
  n = rem;
  console.log(`${m}, ${n}`);
}
