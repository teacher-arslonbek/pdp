const numberInput = document.getElementById("number");
const decrement = document.getElementById("decrement");
const increment = document.getElementById("increment");
const counterElement = document.getElementById("counter");
let counter = 0;

decrement.addEventListener("click", () => {
  change("-");
});
increment.addEventListener("click", () => {
  change("+");
});

function change(operation) {
  const time = numberInput.value;
  if (time == "0") {
    counter = eval(`${counter} ${operation} 1`);
    console.log(counter);
  } else {
    setTimeout(() => {
      counter = eval(`${counter} ${operation} 1`);
      console.log(counter);
    }, 1000 * +time);
  }
}
