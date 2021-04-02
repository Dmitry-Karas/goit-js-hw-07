// Напиши скрипт, который реагирует на изменение значения input#font-size-control (событие input) и изменяет инлайн-стиль span#text обновляя свойство font-size. В результате при перетаскивании ползунка будет меняться размер текста.

const rangeEl = document.querySelector('#font-size-control');
const textEl = document.querySelector('span#text');
const fontSize = textEl.setAttribute('style', `font-size: ${rangeEl.value}px`);

function changeFontSize() {
  textEl.setAttribute('style', `font-size: ${rangeEl.value}px`);
}

rangeEl.addEventListener('input', changeFontSize);
