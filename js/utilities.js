function getTheInputValue(id) {
  const input = document.getElementById(id).value;
  const inputValue = parseInt(input);
  return inputValue;
};

function getInnerText(id) {
  const element = document.getElementById(id).innerText;
  const innerNum = parseInt(element);
  return innerNum;
};

function showSection (id) {
  document.getElementById('Deposit-form').classList.add('hidden');
  document.getElementById('Withdrawal-form').classList.add('hidden');
  document.getElementById('Transaction-history-form').classList.add('hidden');

  document.getElementById(id).classList.remove('hidden');
};