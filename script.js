// const ul = document.querySelector('.ul');
// ul.addEventListener('click', function (e) {
//     e.target.style.color = 'red';
//     e.currentTarget.style.backgroundColor = 'blue';
// });





// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”



// document.body.insertAdjacentHTML('beforeend',
//     `<form>
//     <input id="checkbox" type="checkbox">
//     <label for="checkbox">Согласен с условиями</label>
//     <br>
//     <button type="submit">Отправить</button>
//     </form>`
// );
// const checkboxEl = document.querySelector('input[type="checkbox"]');
// const buttonEl = document.querySelector('button');
// const formEl = document.querySelector('form');
// let errorMessage = false;

// buttonEl.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (!checkboxEl.checked && !errorMessage) {
//         const parEl = document.createElement('p');
//         parEl.textContent = 'Необходимо согласиться с условиями';
//         buttonEl.insertAdjacentElement('afterend', parEl);
//         errorMessage = true;
//     } else if (checkboxEl.checked) {
//         formEl.submit();
//     }
// });






// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”



// document.body.insertAdjacentHTML('beforeend',
//     `<form>
//     <label><input type="radio" id="tea" name="chooseDrink">Чай</label>
//     <label><input type="radio" id="coffee" name="chooseDrink">Кофе</label>
//     <br>
//     <button type="submit">Отправить</button>
//     <p></p>
//     </form>`
// );

// const buttonEl = document.querySelector('button');
// const inputEls = document.querySelectorAll('input');
// const pEl = document.querySelector('p');
// buttonEl.addEventListener('click', function (e) {
//     e.preventDefault();
//     inputEls.forEach(element => {
//         if (element.checked) {
//             if (element.id === 'tea') pEl.textContent = 'Чай закончился';
//             else if (element.id === 'coffee') pEl.textContent = 'Кофе закончился';
//         }
//     });
// });



// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”



// document.body.insertAdjacentHTML('beforeend',
//     `<form>
//     <label>Введите пароль: <input type="password"></label>

//     <br>
//     <button type="submit">Отправить</button>
//     </form>`
// );

// const inpetPass = document.querySelector('input');
// const buttonEl = document.querySelector('button');

// buttonEl.addEventListener('click', function (e) {
//     e.preventDefault();
//     if (inpetPass.value === 'пароль') {
//         inpetPass.style.border = '3px solid green';
//     } else {
//         inpetPass.style.border = '3px solid red';
//         inpetPass.placeholder = 'Пароль неверный';
//         inpetPass.value = '';
//     }
// });



// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода



// document.body.insertAdjacentHTML('beforeend',
//     `<input type="text">
//     <br><h1>Заголовок</h1>`
// );

// const inpetEl = document.querySelector('input');
// const h1El = document.querySelector('h1');
// inpetEl.addEventListener('input', function () {
//     h1El.textContent = inpetEl.value;
// });








// 1. При изменении значения в input с id="from", значение содержащееся в нем должно моментально отображаться в span. То есть при печати в input'е тег span также должен меняться.



const inputEl = document.querySelector('#from');
const spanEl = document.querySelector('span');
inputEl.addEventListener('input', function () {
    spanEl.textContent = inputEl.value;
});



// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
// - добавить два класса: animate_animated и animate_fadeInLeftBig
// - поставить данному элементу стиль visibility в значение 'visible'.



const mesBtnEl = document.querySelector('.messageBtn');
const mesEl = document.querySelector('.message');
mesBtnEl.addEventListener('click', function () {
    mesEl.classList.add('animate_animated', 'animate_fadeInLeftBig');
    mesEl.style.visibility = 'visible';
});



// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме. Если какое-либо поле не заполнено, форма не должна отправляться, также должны быть подсвечены незаполненные поля (необходимо поставить класс error незаполненным полям). Как только пользователь начинает заполнять какое-либо поле, необходимо, при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить (поставить класс error данному полю).
// - Если поле было чем-либо заполнено, подсветку (класс error) необходимо убрать.



const formEl = document.querySelector('form');
const inputFormEl = formEl.querySelector('input');
const selectFormEl = formEl.querySelector('select');
const buttonElem = formEl.querySelector('button');

buttonElem.addEventListener('click', function (e) {
    e.preventDefault();
    if (inputFormEl.value === '') {
        inputFormEl.style.border = '2px solid red';
        inputFormEl.classList.add('error');

    } else if (selectFormEl.value === '') {
        selectFormEl.style.border = '2px solid red';
        selectFormEl.classList.add('error');
    } else if (inputFormEl.value !== '' && selectFormEl.value !== '') {
        formEl.submit();
    }
});

inputFormEl.addEventListener('input', function () {
    if (inputFormEl.value !== '') {
        inputFormEl.style.removeProperty('border');
        inputFormEl.classList.remove('error');
    }
});

selectFormEl.addEventListener('input', function () {
    if (selectFormEl.value !== '') {
        selectFormEl.style.removeProperty('border');
        selectFormEl.classList.remove('error');
    }
});