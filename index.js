const input = document.querySelector(".input");
const submit = document.querySelector(".submit");
const body = document.querySelector(".body");
const key = document.querySelector(".key");
const value = document.querySelector(".value");

class Palindrome {
  constructor(text) {
    this.text = text;
    this.words = [];
  }
  check() {
    const textToArr = this.text.toLowerCase().split(" ");
    textToArr.reduce((acc, val) => {
      acc = val;
      const wordToArr = acc.split("");
      const reverseArr = wordToArr.reverse();
      const reverseArrToText = reverseArr.join("");
      acc === reverseArrToText && this.words.push(acc);
    }, {});
  }
  counter() {
    const counts = this.words.reduce(
      (acc, val) => ({
        ...acc,
        [val]: (acc[val] || 0) + 1,
      }),
      {}
    );
    return counts;
  }
}

submit.addEventListener("click", panlindromeHandler);

function panlindromeHandler() {
  if (input.value === "") return;
  key.innerHTML = "";
  value.innerHTML = "";
  const text = input.value;
  const newPalindrome = new Palindrome(text);
  newPalindrome.check();
  const results = Object.entries(newPalindrome.counter());
  results.map((result) => {
    key.innerHTML += `<h3>${result[0]}</h3>`;
    value.innerHTML += `<h3>${result[1]}</h3>`;
  });
}
