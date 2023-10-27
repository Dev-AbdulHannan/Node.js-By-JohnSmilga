// The purpose of this program is to show that we can directly include the module without exporting it if it excuting some code
const num1 = 5;
const num2 = 10;

function addValues() {
  console.log(`The sum is : ${num1 + num2}`);
}

addValues();
