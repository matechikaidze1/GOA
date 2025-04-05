const iterations = 1000000;

const set = new Set();
console.time('Set .add()');
for (let i = 0; i < iterations; i++) {
  set.add(i);
}
console.timeEnd('Set .add()');

const array = [];
console.time('Array .push()');
for (let i = 0; i < iterations; i++) {
  array.push(i);
}
console.timeEnd('Array .push()');
