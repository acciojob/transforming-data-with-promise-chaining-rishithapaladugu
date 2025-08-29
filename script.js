//your JS code here. If required.
//your JS code here. If required.
document.getElementById("btn").onclick = function () {
  const inputVal = Number(document.getElementById("ip").value);
  const output = document.getElementById("output");

  output.innerHTML = ""; // Clear previous results

  // Utility function: returns a promise that resolves after given delay
  const delayPromise = (value, delay) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(value), delay);
    });
  };

  // Step 1: Initial Promise (show input value after 2s)
  delayPromise(inputVal, 2000)
    .then((num) => {
      output.innerHTML = `Result: ${num}`;
      return delayPromise(num * 2, 2000); // Step 2: Multiply by 2
    })
    .then((num) => {
      output.innerHTML = `Result: ${num}`;
      return delayPromise(num - 3, 1000); // Step 3: Subtract 3
    })
    .then((num) => {
      output.innerHTML = `Result: ${num}`;
      return delayPromise(num / 2, 1000); // Step 4: Divide by 2
    })
    .then((num) => {
      output.innerHTML = `Result: ${num}`;
      return delayPromise(num + 10, 1000); // Step 5: Add 10
    })
    .then((num) => {
      output.innerHTML = `Final Result: ${num}`;
    });
};