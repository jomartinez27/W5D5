const readline = require("readline");
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question('Give number ', function(answer) {
      const res = parseInt(answer);

      sum += res;
      console.log(`Partial: ${sum}`);

      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
  }
}

addNumbers(0, 3, function(sum) {
  console.log(`Total sum: ${sum}`);
  reader.close();
})
