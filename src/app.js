import "bootstrap";

window.onload = function() {
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  function getrandom(num) {
    return Math.floor(Math.random() * num);
  }

  function excuse() {
    return (
      who[getrandom(who.length)] +
      " " +
      action[getrandom(action.length)] +
      " " +
      what[getrandom(what.length)] +
      " " +
      when[getrandom(when.length)]
    );
  }

  document.getElementById("excuse").innerText = excuse();
};
