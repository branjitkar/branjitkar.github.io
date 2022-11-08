function sum(x) {
  return x.reduce((acc, item) => acc + item, 0);
}

function multiply(x) {
  return x.reduce((acc, item) => acc * item, 1);
}

function reverse(x) {
  return x.split("").reduce((acc, c) => c + acc);
}

function filterLongWords(words, i) {
  return words.filter((w) => w.length > i);
}
