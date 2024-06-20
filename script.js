const textInput = document.getElementById('text-input');
const checkBtn = document.getElementById('check-btn');
const result = document.getElementById('result');

checkBtn.addEventListener('click', () => {
  const inputText = textInput.value.trim().toLowerCase().replace(/[^a-z0-9]/g, '');

  if (inputText === '') {
    alert('Please input a value');
    return;
  }

  const isPalindrome = inputText === inputText.split('').reverse().join('');
    let message;
  if (isPalindrome) {
    message = `${textInput.value} is a palindrome`;
  } else {
    message = `${textInput.value} is not a palindrome`;
  }
  result.textContent = message;
});