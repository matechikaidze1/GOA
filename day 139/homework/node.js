document.getElementById('calculateBtn').addEventListener('click', calculateDifference);

function calculateDifference() {
  const input = document.getElementById('inputDate').value;
  const resultDiv = document.getElementById('result');

  const parts = input.split('/');
  if (parts.length !== 3) {
    resultDiv.textContent = 'enter a date (day/month/year)';
    return;
  }

  const [day, month, year] = parts.map(Number);

  if (isNaN(day) || isNaN(month) || isNaN(year) || year < 1 || month < 1 || month > 12 || day < 1 || day > 31) {
    resultDiv.textContent = 'invalid date!';
    return;
  }

  const inputDate = new Date(year, month - 1, day);
  const currentDate = new Date();

  if (isNaN(inputDate)) {
    resultDiv.textContent = 'invalid date';
    return;
  }

  let years = currentDate.getFullYear() - inputDate.getFullYear();
  let months = currentDate.getMonth() - inputDate.getMonth();
  let days = currentDate.getDate() - inputDate.getDate();

  if (days < 0) {
    months--;
    const prevMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
    days += prevMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  const isFuture = inputDate > currentDate;
  const prefix = isFuture ? "the date is in the future!\nyou are" : "it has been";

  resultDiv.textContent = `${prefix} ${Math.abs(years)} years, ${Math.abs(months)} months, and ${Math.abs(days)} days ${isFuture ? "from now." : "since that date."}`;
}
