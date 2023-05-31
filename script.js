function convertToBinary() {
  const decimalNumber = document.getElementById("decimalNumber").value;
  const binaryNumber = decimalToBinary(decimalNumber);
  document.getElementById("result").textContent =
    "Binary equivalent: " + binaryNumber;
}

function decimalToBinary(decimalNumber) {
  let binaryNumber = "";

  while (decimalNumber > 0) {
    binaryNumber = (decimalNumber % 2) + binaryNumber;
    decimalNumber = Math.floor(decimalNumber / 2);
  }

  return binaryNumber;
}
