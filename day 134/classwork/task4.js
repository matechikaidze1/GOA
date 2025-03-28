const cardNumber = "9283482716253827";

function maskCardNumber(number) {
  const last4 = number.slice(-4);
  const masked = "*".repeat(12) + last4;
  return masked;
}

const maskedCard = maskCardNumber(cardNumber);
console.log("card number:", cardNumber);
console.log("censored card number:", maskedCard);
