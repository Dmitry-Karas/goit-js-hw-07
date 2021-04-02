// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.
// ===============================================================================

// Ссылки на элементы

const controlsContainer = document.querySelector('#controls');
const input = document.querySelector('#controls > input');
const renderBtn = document.querySelector('button[data-action="render"]');
const destroyBtn = document.querySelector('button[data-action="destroy"]');
const boxesContainer = document.querySelector('#boxes');

//Функция, создающая указанное кол-во элементов
const createBoxes = amount => {
  let boxes = [];
  let width = 30;
  let height = 30;

  for (let i = 1; i <= amount; i++) {
    // Создет элемент
    let box = document.createElement('div');

    // Создает рандомные числа для каждого цвета RGB
    const red = Math.floor(Math.random() * 250);
    const green = Math.floor(Math.random() * 250);
    const blue = Math.floor(Math.random() * 250);
    const color = `rgb(${red}, ${green}, ${blue})`;

    // Добавляет инлайн стили каждому элементу
    box.style.width = `${width}px`;
    box.style.height = `${height}px`;
    box.style.backgroundColor = color;
    box.style.marginLeft = 'auto';
    box.style.marginRight = 'auto';
    box.style.marginBottom = '10px';

    // Добавляет элемент в общий массив и увеличивает размеры следующего элемента
    boxes.push(box);

    width += 10;
    height += 10;
  }

  // Добавляет элементы на страницу одной операцией
  boxesContainer.append(...boxes);
};

// Создает кол-во элементов, указанное в инпуте
function onRenderBtnClick() {
  boxesContainer.innerHTML = '';
  createBoxes(input.value);
  input.value = 0;
}

// Удаляет все элементы
function onDestroyBtnClick() {
  boxesContainer.innerHTML = '';
}

renderBtn.addEventListener('click', onRenderBtnClick);
destroyBtn.addEventListener('click', onDestroyBtnClick);
