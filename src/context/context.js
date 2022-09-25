import { createContext } from "react";

export const CheatSheet = createContext([
    { title: "ЧИСЛА", text: "", example: "", id: 0.1 },
    { title: "Вызвать 255 шеснацатиричным способом", text: "console.log(0xff);", example: "", id: 1 },
    { title: "Вызвать 255 восмиричным способом", text: "console.log(0o377);", example: "", id: 2 },
    { title: "Вызвать 238 двоичным способом", text: "console.log(0b11101110);", id: 3 },
    { title: "Math -", text: "Округление числа  ", example: "let num = 1.12345;", id: 4 },
    { title: "Math.round-", text: "до ближайшего целого числа ", example: "let numOne = Math.round(num ); = 1", id: 5 },
    { title: "Math.floor", text: " в меньшую сторону", example: "let numOne = Math.floor(num ); = 1", id: 6 },
    { title: "Math.ceil ", text: "в большую сторону", example: "let numOne = Math.ceil(num ); = 2", id: 7 },
    { title: "Math.random()", text: " случайное число включая 0 до 1 не включая", example: "console.log(Math.random());", id: 8 },
    { title: "Math.max()", text: "наибольшее число из перечисленных", example: "console.log(Math.max(1, 2, 4, 5, 67, 66));", id: 9 },
    { title: "Math.min() ", text: " наименьшее число из перечисленных", example: "console.log(Math.min(1, 2, 4, 5, 67, 66));", id: 10 },
    { title: "Math.abs()", text: "Math.abs()", example: "console.log(Math.abs(-58));", id: 11 },
    { title: "Math.pow() ", text: " возведение числа в степень", example: "console.log(Math.pow(n,p)); n - число p - в степени", id: 12 },
    { title: ".trim() ", text: " вырезание пробелов 'лишних' с переди и с зади", example: "", id: 13 },
    { title: ".repeat() ", text: " Повторение", example: "что.repeat(сколько раз)", id: 14 },
    { title: "num.toFixed() ", text: "- количество знаков после запятой надо сократить", example: "let numOne = num.toFixed(2); Но переменная станет strihg, вылечить можно +num.toFixed(2)", id: 15 },
    { title: "Number.EPSILON", text: "бесконечно малое число для исправления проблемы неточных чисел", example: "problem =+ problem.toFixed(1);// лекарство НО строка, которая лечится +", id: 17 },
    { title: "parseInt", text: "покажет число до возникновения ошибки или nan", example: "let str = '0xff'; str = parseInt('0xff', 16); Второй параметр переводящий число в 2ичный , 8ричный, 16ричный вид НЕОБЯЗАТЕЛЕН", id: 18 },
    { title: "parseFloat", text: "покажет число c плавающей запятой до возникновения ошибки или nan", example: "let value = '158.35px';  console.log(parseFloat(value));", id: 19 },
    { title: "toString", text: "вернёт в строковом виде", example: "console.log(num.toString(16));//шеснадцатиричное; console.log(num.toString(2));//двоичное; console.log(num.toString(8));//восьмиричное", id: 20 },
    { title: "isNaN", text: "Проверка на равенство NAN", example: "let vetvl = 58 / 'Aleksei'; if (isNaN(vetvl)) {console.log('Результат выражения NaN'); }", id: 21 },
    { title: "Строка", text: "", example: "", id: 22 },
    { title: "let text = 'Если б мишки были пчёлы';", text: "", example: "", id: 23 },
    { title: ".length", text: "количество символов", example: "console.log(text.length);", id: 24 },
    { title: "вывести нужный по счёту символ", text: "console.log(text[0])", example: "console.log(text[10]);", id: 25 },
    { title: "вывести нужный по счёту символ но с конца", text: "console.log(text[text.length - 1])", example: "", id: 26 },
    { title: ".toUpperCase()", text: "ВЕРХНИЙ РЕГИСТР", example: "console.log(text.toUpperCase());", id: 27 },
    { title: ".toLowerCase()", text: "нижний регистр", example: "console.log(text.toLowerCase());", id: 28 },
    { title: ".indexOf()", text: "поиск покажет где, поиск начиная с № символа", example: "console.log(text.indexOf( 'шки'));  console.log(text.indexOf(' шки',10));", id: 29 },
    { title: ".includes()", text: "поиск булевый ответ; поиск начиная с № символа булевый ответ", example: "console.log(text.includes('шки')); console.log(text.includes('шки', 10)); console.log(text.toLocaleLowerCase().includes(textTwo.toLocaleLowerCase()));", id: 30 },
    { title: ".startsWith()", text: ".startsWith()", example: "console.log(text.startsWith('Есл'));", id: 31 },
    { title: ".endsWith()", text: " поиск с конца, булевый ответ", example: "console.log(text.endsWith('чёлы'));", id: 32 },
    { title: ".slice()", text: "покажет часть строки", example: "от 2 до 7;  console.log(text.slice(2, 7));", id: 33 },
    { title: " || ", text: "Или - true", example: "console.log(true ||' Alexsei'); //true;  console.log(undefined || '' || null || 0); //0", id: 33.1 },
    { title: " && ", text: "И - false", example: "console.log('aleksei' && 0 && 2);//0;  console.log(1 && 2 && null && 3);//null", id: 34 },
    { title: " ! ", text: "Не (отрицание)", example: "console.log(!true && 65 || 33 && !1);//false", id: 35 },
    { title: "??", text: " сравнивает с null и возвращает оперантд если он не null или undefined", example: "console.log(name ?? 'нет имени' ?? '');//нет имени", id: 36 },
    { title: "D.O.M.", text: "", example: "", id: 37 },
    { title: "", text: "", example: "", id: 38 },
    { title: ".documentElement", text: "Получить полностью html объект", example: "const htmlElement = document.documentElement;", id: 39 },
    { title: " document.head", text: "Получить head объект полностью со всем содержимим", example: "const headElement = document.head;", id: 40 },
    { title: ".document.body", text: "Получить body объект полностью со всем содержимим", example: "const bodyElement = document.body;", id: 41 },
    { title: ".firstChild", text: "Только после получения body -- ПЕРВЫЙ объект", example: "const firstChildNode = bodyElement.firstChild;", id: 42 },
    { title: ".firstElementChild", text: "Первый эллемент", example: "const firstChil = bodyElement.firstElementChild;", id: 43 },
    { title: ".lastChild", text: "Только после получения body -- ПОСЛЕДНИЙ объект", example: "const lastChildNode = bodyElement.lastChild;", id: 44 },
    { title: ".lastElementChild", text: "Последний эллемент", example: "const lastChil = bodyElement.lastElementChild;", id: 45 },
    { title: ".childNodes", text: "Список-коллекция всех детей-эллементов включая узлы", example: "const childNodes = bodyElement.childNodes;", id: 46 },
    { title: ".children", text: "Список-коллекция всех детей-эллементов БЕЗ узлов", example: "const bodyChildren = bodyElement.children;", id: 47 },
    { title: ".previousSibling", text: "Предыдущий узел", example: "const previousSiblingNode = bodyElement.previousSibling;", id: 48 },
    { title: ".previousElementSibling", text: "Предыдущий эллемент", example: "const previousSibling = bodyElement.previousElementSibling;", id: 49 },
    { title: ".nextSibling", text: "Следующий узел", example: "const nextSiblingNode = bodyElement.nextSibling;", id: 50 },
    { title: ".nextElementSibling", text: "Следующий элемент", example: "const nextSibling = bodyElement.nextElementSibling;", id: 51 },
    { title: ".parentNode", text: "Родительский узел", example: "const parentNode = bodyElement.parentNode;", id: 52 },
    { title: ".querySelectorAll();", text: "Поиск по имени класса, Всё что найдёт", example: "const elemsOne = document.querySelectorAll('.lesson__item-list');", id: 53 },
    { title: ".querySelector()", text: "Поиск по имени класса, Первый что найдёт", example: "const title = document.querySelector('h3');", id: 54 },
    { title: ".innerHTML", text: "ИЗМЕНЕНИЕ, Добавил к содержимому эллемента ", example: "subListNoAll.innerHTML = `${textElementContent}Упорство и труд всё перетрут`;", id: 55 },
    { title: ".outerHTML", text: "Получил СОДЕРЖИМОЕ эллемента вместе тегами со всем содержимым", example: "const textElementContent = subListNoAll.outerHTML;", id: 56 },
    { title: ".createElement('div')", text: "Создание нового Тега", example: "const newElement = document.createElement('div');", id: 57 },
    { title: ".createTextNode()", text: "Создал новый текстовый эллемент", example: "const newTextElement = document.createTextNode('${textElementContent} Упорство и труд всё перетрут');  ", id: 58 },
    { title: ".after()", text: "Вставил его после переменной subListNoAll", example: "относительноЧего.куда(что);  subListNoAll.after(newElement);", id: 59 },
    { title: ".before()", text: "Вставил его до переменной subListNoAll", example: "subListNoAll.before(newElement);", id: 60 },
    { title: ".prepend()", text: "Вставил его внутрь и в начало переменной subListNoAll", example: "subListNoAll.prepend(newElement);", id: 61 },
    { title: ".append()", text: "Вставил его внутрь и в конец переменной subListNoAll", example: "subListNoAll.append(newTextElement);", id: 62 },
    { title: ".remove()", text: "Удалить эллемент", example: "title.remove();", id: 63 },
    { title: ".cloneNode(true)", text: "Клонирование эллемента", example: "const newTitle = title.cloneNode(true);//создал клон, True-значит вместе со всем содержимым;  lessonBlock.before(newTitle); // Указал где ему появится, без этого его нет ", id: 64 },
    { title: "Живая коллекция", text: "", example: "", id: 65 },
    { title: ".getElementById()", text: "Поиск по id", example: "const elemsbyId = document.getElementById('listItem');", id: 66 },
    { title: ".getElementsByTagName()", text: "Поиск по тегу", example: "const elemsByTag = document.getElementsByTagName('ul');", id: 67 },
    { title: ".getElementsByClassName()", text: "Поиск по имени класса", example: "const elementByClass = document.getElementsByClassName('lesson__item-list');", id: 68 },
    { title: ".getElementsByTagName('*')", text: "Получить всех потомков", example: "const elementByClassStar = document.getElementsByTagName('*')", id: 69 },
    { title: ".getElementsByName()", text: "Поиск по атрибуту name", example: "const elementByName = document.getElementsByName('list');", id: 70 },
    { title: ".сlosest(selectors) ", text: "возвращает первый родительский элемент, совпавший с селекторами.", example: "const elemsAncestor = elemsDescendant.closest('.lesson');", id: 71 },
    { title: ".parentElement", text: "возвращает элемент, который является родителем данного узла. ", example: "const parentElement = bodyElement.parentElement;", id: 72 },
    { title: "Управление CSS классами", text: "", example: "", id: 73 },
    { title: ".querySelector('')", text: "Получил эллемент", example: "const element = document.querySelector('.lesson__item-list_red');", id: 74 },
    { title: ".classList.add('')", text: "Добавил класс", example: "element.classList.add('active');", id: 75 },
    { title: ".classList.remove('')", text: "Удалил класс", example: "element.classList.remove('active');", id: 76 },
    { title: ".classList.toggle('')", text: "Добавил если нет, удалить если есть", example: "element.classList.toggle('active');", id: 77 },
    { title: ".classList.contains('')", text: "Проверить есть или нет такое название класса true,false", example: "if (element.classList.contains('active')) {console.log('У эллемента есть класс 'active'!'); }", id: 78 },
    { title: ".className", text: "Изменил имя класса эллемента,  Показать имя класса эллемента", example: "element.className = 'red';  console.log(element.className);", id: 79 },
    { title: "Управление Стилями CSS", text: "", example: "", id: 80 },
    { title: ".style Добавил", text: "Добавил CSS стиль", example: "element.style.color = 'red'; newTitle.style.textAlign = 'center';", id: 81 },
    { title: ".style. Удалил", text: "Удалил значение CSS стиля", example: "newTitle.style.textAlign = '';", id: 82 },
    { title: ".style. Показать", text: "Показать стили эллемента записаные в HTML", example: "console.log(newTitle.style);", id: 83 },
    { title: ".style. Получил ", text: "Получил значение конкретного стиля эллемента из HTML", example: "let titleStyle = newTitle.style.textAlign;", id: 84 },
    {title: "Вычислил CSS свойство", text: `Вычислить CSS свойство
const elementBlueStyle = getComputedStyle(elementBlue),
        Вывести необходимое CSS свойство
console.log(elementBlueStyle.fontSize);
        Перевёл 22px в просто 22
const elementBlueStyleFontStyle = parseInt(elementBlueStyle.fontSize);
        Вычислил CSS свойство Псевдоэллемента
const elemsFourStyle = getComputedStyle(elemsFour, "::marker");
        Вывел необходимое CSS свойство Псевдоэллемента
console.log(elemsFourStyle.color);` , example: "", id: 85 },
        { title: ".hasAttribute('')", text: "Проверяем наличие атрибута", example: "console.log(lessonText.hasAttribute('name'));", id: 86 },
        { title: ".getAttribute('name')", text: "Получаем значение ат рибута", example: "console.log(lessonText.getAttribute('name'));", id: 87 },
        { title: ".setAttribute('')", text: "Устанавливаем значение атрибута 'value'", example: "lessonText.setAttribute('name','value');", id: 88 },
        { title: ".removeAttribute('')", text: "Удаляем атрибут", example: "lessonText.removeAttribute('name');", id: 89 },
        { title: "Окно браузера", text: "", example: "", id: 90 },
        { title: ".clientWidth", text: "Получил ширину окна", example: "let mainElementWidth = mainElement.clientWidth;", id: 91 },
        { title: ".clientHeight", text: "Получил высоту окна", example: "let mainElementHeight = mainElement.clientHeight;", id: 92 },
        { title: "innerWidth", text: "Получил ширину окна но вместе с шириной бегунка прокрутки", example: "let windowWidth = window.innerWidth;", id: 93 },
        { title: ".innerHeight", text: "Получил высоту окна но вместе с шириной бегунка прокрутки", example: "let windowHeight = window.innerHeight;", id: 94 },
        { title: "Полная ширина или Высота + скрытая прокрутка", text: "let scrollWidth = Math.max(document.body.scrollWidth, document.documentElement.scrollWidth,document.body.offsetWidth, document.documentElement.offsetWidth, document.body.clientWidth, document.documentElement.clientWidth ); ", example: "", id: 95 },
        { title: ".pageYOffset", text: "Получить количество прокрученых пикселей", example: "let windowScrollTop = window.pageYOffset; // По Y; let windowScrollLeft = window.pageXOffset; //По X", id: 96 },
        { title: ".scrollBy(0, 50)", text: "Прокручивать на (количество по X,количество по Y)", example: "function setScrollBy () { window.scrollBy(0, 50);}; setScrollBy()", id: 97 },
        { title: ".scrollTo(0, 1750)", text: "Прокрутить на указаные координаты", example: "function setScrollTo() {window.scrollTo(0, 1750)}setScrollTo();", id: 98 },
        { title: ".scrollTo()", text: "прокрутка ПЛАВНАЯ (не работает в сафари)", example: "function setScrollToOptions() {window.scrollTo({top: 500, left: 0, behavior: 'smooth'// плавно  //'smooth', 'instant', 'auto'-по умолчанию }); }  setScrollOption()", id: 99 },
        { title: ".getBoundingClientRect().left", text: "Получить конкретное значение объекта", example: "const getItemCoordsLeft =lessonSelected.getBoundingClientRect().left;", id: 100 },

])

export const ExampleDecision = createContext([ 
        { title: "Нашел эллемент по названию атрибута и присвоил его в константу", text: <div>
                const taskOne = document.querySelector('[data-say-hi]');     
        </div>, example: "", id: 999 },
        { title: "Присвоил значение атрибута в константу", text: ` let taskOneAttribute = taskOne.getAttribute('data-say-hi');`, example: "", id: 998 },
        { title: "Получить в переменную эллемент со значением Йончи", text:
                        `const body = document.querySelectorAll('ul>li');//Где буду искать
                        let ionshi = 'нет' ; //Какое значение если не найду
                         const taskTwo = (what)=>{ //Что буду искать
                          let i = 0;
                        while (i < body.length){
                     if (body[i].textContent==what) {
                                ionshi = body[i]; } 
                      i ++; } 
                     return ionshi; }
                        console.log(taskTwo('Йончи'));`, example: "", id: 997 },
        { title: "Получить в переменную коллекцию эллеменов со значением like", text: `let taskTree = document.querySelectorAll('.like'); console.log(taskTree[0],taskTree[1]);`, example: "", id: 996 },
        { title: "Cовпадение первого объекта со вторым: true или false", text: `const matches = (obj, source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);`, example: "", id: 995 },
        { title: "Cовпадение первого объекта со вторым: true или false и вывожу найденные, длинный вариант", text: ``, example: "", id: 994 },
  
])