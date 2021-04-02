// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое на правильное количество символов.
// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым, если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const inputEl = document.querySelector('#validation-input');

function onInputTyping() {
  const inputTextLength = inputEl.value.length;
  const maxLength = inputEl.getAttribute('data-length');

  inputEl.classList.add('valid');

  if (!inputTextLength) {
    inputEl.classList.remove('valid');
    inputEl.classList.remove('invalid');
  }

  if (inputTextLength > maxLength) {
    return inputEl.classList.replace('valid', 'invalid');
  }

  if (inputEl.classList.contains('invalid')) {
    return inputEl.classList.replace('invalid', 'valid');
  }
}

inputEl.addEventListener('blur', onInputTyping);
