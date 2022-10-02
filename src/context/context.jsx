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
        { title: "Нашел эллемент по названию атрибута и присвоил его в константу", text: '', example: "const taskOne = document.querySelector('[data-say-hi]');", id: 999 },
        { title: "Присвоил значение атрибута в константу", text: '', example:` let taskOneAttribute = taskOne.getAttribute('data-say-hi');` , id: 998 },
        { title: "Получить в переменную эллемент со значением Йончи", text:"", example:
          <h4>
                     <p />   const body = document.querySelectorAll('ul&#8250;li');//Где буду искать
                     <p />   let ionshi = 'нет' ; //Какое значение если не найду
                     <p />   const taskTwo = (what)=&#8250;&#123; //Что буду искать
                     <p />     let i = 0;
                     <p />   while (i &#8249; body.length)&#123;
                     <p />   if (body[i].textContent==what) &#123;
                     <p />           ionshi = body[i]; &#125; 
                     <p />      i ++; &#125; 
                     <p />   return ionshi; &#125;
                     <p />   console.log(taskTwo('Йончи'));
          </h4>
         , 
        id: 997 },
        { title: "Получить в переменную коллекцию эллеменов со значением like", text: ``,
         example: <h3> let taskTree = document.querySelectorAll('.like'); 
               <p /> console.log(taskTree[0],taskTree[1]);
         </h3>
         , id: 996 },
        { title: "Cовпадение первого объекта со вторым: true или false", text: ``,
         example:  "const matches = (obj, source) => Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);",
         id: 995 },
        { title: "Cовпадение первого объекта со вторым: true или false и вывожу найденные, длинный вариант", text: 
         <h4>
                        const matches = (obj, source) =&#62;&#123;
                    <p />            let objKey;
                    <p />    let sourceKey;
                    <p />    let result = false;
                    <p />    for (const key in obj) &#123;
                    <p />            objKey = key + ": " + obj[key];
                    <p />    for (const key in source)&#123;
                    <p />            sourceKey = key + ": " + source[key];
                    <p />    if (objKey === sourceKey) &#123;
                    <p />            result = true;
                    <p />    console.log(objKey, "=", sourceKey);
                    <p />   return result &#125; &#125; &#125; &#125;
                       

         </h4>
        , example: <div>
                <h4>Примеры :</h4>
                <p /> console.log(matches(&#123;age: 25, hair: 'long', beard: true &#125;, &#123;hair: 'long', beard: true &#125;));
                <p /> console.log(matches(&#123;hair: 'long', beard: false &#125;, &#123;age: 25, hair: 'long', beard: true &#125;));
                <p />  console.log(matches(&#123;hair: 'long', beard: true &#125;, &#123;age: 55, hair: 'long', beard: true &#125;));
        </div>, id: 994 },
        { title: "проверка слова на двухстороннюю читаемость", text:<div>
                const isPalindrome = (word) = &#62; &#123;
                <p />         let wordLowerCase = word.toLowerCase();
                <p />          return wordLowerCase == wordLowerCase.split('').reverse().join('') &#125;;
                <p />         const isNotPalindrome = (word) = &#62; !isPalindrome(word);
        </div> , example: <div>
                console.log(isPalindrome("амак"));
                <p /> console.log(isNotPalindrome("амак"))
        </div>, id: 993 },
        { title: "добавил если не хватает https://", text: "", example: <div>
                const normalizeUrl = (checkAdress) =&#62; &#123;
              <p />   if (checkAdress.startsWith('https://')) &#123;
              <p />     return checkAdress;
              <p />      &#125; else &#123;
              <p />     return checkAdress = 'https://'+checkAdress;  &#125;  &#125;;
        </div>, id: 992 },
        { title: "разбирает кто друг а кто враг", text: "", example: <div>
                const whoIsThisHouseToStarks = (family) =&#62; &#123;
              <p />           let status;
              <p />   if (family === 'Karstark' || family ==='Tally') &#123;
              <p />           status = 'friend';
              <p />           &#125; else if (family === 'Lannister'||family ==='Frey') &#123;
              <p />           status = 'enemy';
              <p />           &#125; else &#123;
              <p />           status = 'neutral'; &#125;
              <p />           return status; &#125;;
              <p />   console.log(whoIsThisHouseToStarks("Getmanov"));   
        </div>, id: 991 },
        { title: "если первая буква с маленикой то переверачивам", text: "", example: <div>
                const convertText = (str) =&#62; &#123;
              <p />           str = str.trim();//убрал лишние - пустые символы с переди и с зади
              <p />   if (str === "") &#123;
              <p />       return '';
              <p />       &#125; else if(str[0] === str[0].toUpperCase()) &#123;
              <p />       return str;
              <p />       &#125;else&#123;
              <p />       return str = str.split('').reverse().join(''); &#125; &#125;;
              <p />   console.log(convertText(" dwtyt"));
        </div> , id: 989 },
        {title: "функция switch сравнивает задаваемый параметр с num он же case это простой способ записи такого рода функций else if", text: "", example: <div>
                const getNumberExplanation = (num) =&#62; &#123;
             <p />  switch (num) &#123;
             <p />  case 7:
             <p />    return 'prime number';
             <p />    case 42:
             <p />    return 'answer for everything';
             <p />    case 666:
             <p />    return 'devil number';
             <p />    default:
             <p />    return null &#125;&#125;;
             <p />    console.log(getNumberExplanation(7)); 
        </div>, id: 988 },
        { title: "Перебирает числа", text: "", example: <div>
                const printNumbers = (lastNumber) =&#62; &#123;
              <p />           let i = lastNumber;
              <p />           while (i &#62; 0) &#123;
              <p />           console.log(i);
              <p />       i = i - 1&#125;
              <p />   console.log('finished!')&#125;;
              <p />   printNumbers(4);
        </div>, id: 987 },
        { title: "Перемножает числа в указаном диапозоне", text: "", example: <div>
                const multiplyNumbersFromRange = (start, finish) =&#62; &#123;
               <p />       let a = start;
               <p />     let b = finish;
               <p />     let sum = 1;
               <p />     while (a &#60;= b) &#123; 
               <p />         sum=sum * a ;
               <p />          a=a + 1; &#125; 
               <p />          return sum; &#125;;
               <p />           console.log(multiplyNumbersFromRange(6, 6));
        </div>, id: 986 },
        { title: "записывает числа из диапазона в строку", text: "", example: <div>
                const joinNumbersFromRange = (start, finish) =&#62; &#123;
             <p />            let result = '';
             <p />    let a = start;
             <p />    while (a &#60; = finish) &#123;
             <p />            result = `$&#123;result&#125;$&#123;a&#125;`; 
             <p />     a = a + 1 &#125; 
             <p />     return result &#125;;
             <p />    console.log(joinNumbersFromRange(1, 5));   
        </div>, id: 985 },
        { title: "распечатывает каждую букву слова на отдельной строке", text: "", example: <div>
                const printNameBySymbol = (name) =&#62;  &#123;
              <p />          let i = 0; // Такая проверка будет выполняться до конца строки
              <p />          while (i &#60; name.length)  &#123; // включая последний символ. Его индекс `length - 1`.
              <p />          console.log(name[i]);    // Обращаемся к символу по индексу 
              <p />          i = i + 1;  &#125; &#125;;
              <p />         const name='Arya' ;
              <p />         printNameBySymbol(name);
        </div> , id: 984 },
        { title: "распечатывает каждую букву слова на отдельной строке НО задом на оборот", text: "", example: <div>
                const printReversedWordBySymbol = (name) =&#62; &#123;
              <p />           let i = name.length;
              <p />            while (i &#62; 0) &#123;
              <p />           i = i - 1;
              <p />   console.log(name[i]) &#125;&#125;;
              <p />   console.log(printReversedWordBySymbol('Hexlet'));
        </div>, id: 983 },
        { title: "считает количество заданых букв в строчке не зависимо от регистра", text: "", example: <div>
                const countChars = (str, char) =&#62; &#123;
              <p />           let i = 0;
              <p />   let count = 0;
              <p />   while (i &#60; str.length) &#123; 
              <p />    if (str[i].toLowerCase()===char.toLowerCase()) &#123;
              <p />           count = count + 1&#125;
              <p />   i=i + 1 &#125;
              <p />   return count &#125;;
              <p />   console.log(countChars('раССмотренных', 'с' ));
        </div>, id: 982 },
        { title: "Записываем слова задом на оборот начиная с первого символа", text: "", example: <div>
                const reverse = (str) =&#62; &#123;
              <p />          let i = 0;// Нейтральный элемент для строк это пустая строка
              <p />  let result = '';
              <p />  while (i &#60; str.length) &#123;// Соединяем в обратном порядке 
              <p />          result = `$&#123;str[i]&#125;$&#123;result&#125;`; // То же самое через конкатенацию
              <p />          i=i + 1; &#125;  // result=str[i] + result;  
              <p />  return result &#125;;
              <p />  console.log(reverse('символы'));
        </div>, id: 981 },
        { title: "Ещё один способ но начинаем записывать не с первого символа, а с последного", text: "", example: <div>
                const reverse = (str) =&#62;  &#123;
             <p />            let i = str.length - 1;// Нейтральный элемент для строк это пустая строка                
             <p />           let result = '';
                <p />           while (i &#62; = 0)  &#123;// Соединяем в нормальном порядке                        
             <p />            result = `$ &#123;result&#125;$ &#123;str[i]&#125;`;// То же самое через конкатенацию                
             <p />           i = i - 1 &#125;; // result = result + str[i] ;  
             <p />        return result &#125;; 
             <p />    console.log(reverse('ГЕТМАНОВ')); 
        </div> , id: 980 },
        { title: "Cоставляем строку без указаного символа", text: "", example: <div>
                const hasChar = (str, leter) =&#62; &#123;
             <p />    let i = 0;
             <p />    let result = '';
             <p />       while (i &#60; str.length) &#123; 
             <p />    if (str[i] !==leter)  &#123;
             <p />        result = `$&#123;result&#125;$&#123;str[i]&#125;`&#125;;         
             <p />       i +=1 &#125;;     
             <p />       return result&#125;;     
             <p />    console.log(hasChar('If I looooook back I am lost', 'o' ));
        </div> , id: 979 },
        { title: "Меняет каждый указаный знак на верхний регистр", text: "", example: <div>
                const makeItFunny = (str, num) =&#62; &#123;
             <p />        let i = 0;
             <p />       let result = '';
             <p />       while (i &#60; str.length) &#123; 
             <p />    if ((i + 1) % num===0) &#123;
             <p />            result = `$&#123;result&#125;$&#123;str[i].toUpperCase()&#125;`;
             <p />        &#125; else &#123;
             <p />            result = `$&#123;result&#125;$&#123;str[i]&#125;`&#125;;             
             <p />       i ++ &#125;;            
             <p />        return result&#125;;            
             <p />    console.log(makeItFunny('I never look back', 2));
        </div> , id: 978 },
        { title: "Показывает простое это число или нет", text: "", example: <div>
                const isPrime = (number) =&#62; &#123;
            <p />     if (number &#60; 2) &#123;
            <p />     return false  &#125;;         
            <p />     let divider=2;
            <p />      while (divider &#60;=number / 2) &#123;
            <p />    if (number % divider===0) &#123;
            <p />         return false  &#125; ;                    
            <p />         divider +=1  &#125; ;                   
            <p />        return true  &#125;;               
            <p />      console.log(isPrime(9));  
        </div> , id: 977 },
        { title: "Вывести все простые числа в диапозоне", text: "", example: <div>
                    function calc(num) &#123;
               <p />     labelName: 
                <p />     for (let n = 2; n &#60; = num; n++) &#123;   
                <p />        for (let i = 2; i &#60; n ; i++) &#123;
               <p />           if (n % i === 0)  continue labelName &#125;;                  
               <p />          console.log(n) &#125; &#125;;  
                <p />  calc(17)
        </div> , id: 976 },
        { title: "Ищет еть ли в строке указанный символ", text: "", example: <div>
                const hasChar = (str, leter) =&#62; &#123;
              <p />           let i = 0;
              <p />   while (i &#60; str.length) &#123;
              <p />       if (str[i]===leter) &#123;
              <p />            return true; 
              <p />        &#125;
              <p />            i +=1; 
              <p />        &#125;
              <p />            return false;
              <p />         &#125;;
              <p />   console.log(hasChar('If I looooook back I am lost', 'o' ));
        </div>, id: 975 },
        { title: "Зашифровать сообщение, каждый второй знак поменять местами с предыдущим", text: "", example: <div>
                const encrypt = (str) =&#62; &#123;
         <p />          let i = 0 ;
         <p />          let leterTwo = '';
         <p />          let result = '';
         <p />          while (i  &#60; = str.length ) &#123; 
         <p />              if (i % 2===0) &#123;
         <p />                   leterTwo=`$&#123;str[i]&#125;` ;
         <p />                 &#125; else &#123;
         <p />              result=`$&#123;result&#125;$&#123;str[i] || ''&#125;$&#123;leterTwo&#125;` &#125;;           
          <p />             i ++  &#125;;          
         <p />              return result &#125;;           
         <p />             console.log(encrypt('123456789'));
        </div>, id: 974 },
        { title: "Зашифровать сообщение, каждый второй знак поменять местами с предыдущим #2", text: "", example: <div>
                const encryptTwo = (str) =&#62; &#123;
         <p />               let i = 0;
         <p />       let leterTwo = '';
         <p />       let result = '';
         <p />       while (i &#60; str.length) &#123;
         <p />               leterTwo = str[i + 1] || '' ;
         <p />           // Так как на последний будет undefined а это False, то должен сработать || 'или' и вставится пустое 
         <p />              result=`$&#123;result &#125;$&#123;leterTwo &#125;$&#123;str[i] &#125;`;
         <p />         i=i + 2;
         <p />        &#125;
         <p />        return result; 
         <p />       &#125;;
         <p />     console.log(encryptTwo('123456789'));
        </div>, id: 973 },
        { title: "Зашифровать сообщение, каждый второй знак поменять местами с предыдущим #3", text: "", example: <div>
                const encryptTree = (str) =&#62; &#123;
           <p />              let i = 1;
           <p />      let result = '';
            <p />      while (i &#60; str.length) &#123;
           <p />              result = `$&#123;result&#125;$&#123;str[i]&#125;$&#123;str[i - 1]&#125;`;
           <p />           i=i + 2;
           <p />        &#125; if (str.length % 2===1) &#123; // Если количество знаков нечётное 
           <p />              result += str[str.length - 1]; // Добавить первый знак с заду в конец собраной строки &#125;
           <p />      return result; 
           <p />     &#125;;
           <p />      console.log(encryptTree('123456789'));
        </div>, id: 972 },
        { title: "Зашифровать сообщение, каждый второй знак поменять местами с предыдущим #4", text: "", example: <div>
                const encryptTesher = (str) =&#62; &#123;
                <p />        let result = '';
                <p />        for (let i = 0; i &#60; str.length; i +=2) &#123;
                <p />            const nextSymbol=str[i + 1] || '' ;
                <p />             result=`$&#123;result&#125;$&#123;nextSymbol&#125;$&#123;str[i]&#125;`;
                <p />       &#125;
                <p />  return result; &#125;;
                <p />   console.log(encryptTesher('123456789'));
        </div>, id: 971 },
        { title: "Oднострочное решение, которое вычисляет сумму квадратных корней для всех чётных чисел целочисленного массива.", text: <div></div>, example: <div>
           <p />      let mass = [ 1, 4, 3, 0, 4, 5, 4 ];
           <p />      let massTwo = [9, 4, 25, 18];
           <p />         console.log(massTwo.filter(element =&#62; !(element % 2)).reduce((accumulator, element) =&#62; accumulator + Math.sqrt(element),0) );
           <p /> 
           <p />        //оставляем только те числа которые делятся без остатка
           <p />         console.log(mass.filter(element =&#62; !(element % 2)));
           <p /> 
           <p />         // вычисляем корень квадратный, из числа которое делится без остатка (когда оно одно)
           <p />         console.log(Math.sqrt(massTwo.filter(element =&#62; !(element % 2))));
           <p /> 
           <p />         // выполняем сложение эллементов по очереди записывая результат в аккамулятор
           <p />         console.log(massTwo.reduceRight((accumulator, element ) =&#62; accumulator + element,0
           <p />      //аккамулятор это первый эллемент, если не добавить ,0 или другое нужное число
           <p />      //element это каждый раз следующий
           <p />      ));
        </div>, id: 970 },
        { title: "Продолжение ", text: "Будет", example: " Потом", id: 969 },
])

export const HtmlTegs = createContext([
        { title: 
                <pre>                       
  {`<!DOCTYPE html>
         <html lang="ru">
           <head>
              <title>  </title>
               <link href="" rel="stylesheet">
               <link rel="stylesheet" href="/MyFerstProject/css/stail.css" />
               <meta http-equiv="content-type" content="text/html;charset=UTF-8" />
          </head>
          <body>
              <h1></h1>
              <h6></h6>
              <div></div>
              <span></span>
              <ul>
               <li></li>
               <li></li>
               <li></li>
              </ul>
              <a>ссылка</a>
              <script src='my.js'> </script>
          </body>
       </html>`}
      </pre>   
      
        , text: '', example: "", id: 1000 },
        { title: " <head> </head>", text: 'Элемент-контейнер для метаданных HTML-документа, таких как <title>, <meta>, <script>, <link>, <style>.', example: "", id: 1001 },       
        { title: "<title>  </title>", text: '', example: "", id: 1002 },
        { title: "<meta", text: 'Используется для хранения дополнительной информации о странице. Эту информацию используют браузеры для обработки страницы, а поисковые системы — для ее индексации. В блоке <head> может быть несколько элементов <meta>, так как в зависимости от используемых атрибутов они несут разную информацию.', example: "", id: 1003 },
        { title: "<link", text: 'Определяет отношения между документом и внешним ресурсом. Также используется для подключения внешних таблиц стилей.', example: "", id: 1004 },
        { title: "<html>", text: 'Корневой элемент HTML-документа. Сообщает браузеру, что это HTML-документ. Является контейнером для всех остальных html-элементов.', example: "", id: 1005 },
        { title: "<body> </body>", text: 'Представляет тело документа (содержимое, не относящееся к метаданным документа).', example: "", id: 1006 },
        { title: "<div></div>", text: '	Элемент-контейнер для разделов HTML-документа. Используется для группировки блочных элементов с целью форматирования стилями.', example: "", id: 1007 },
        { title: "<h1></h1> - <h6></h6>", text: 'Создают заголовки шести уровней для связанных с ними разделов.', example: "", id: 1008 },
        { title: "<span></span>", text: '', example: "", id: 1009 },
        { title: "<a>", text: 'Создаёт гипертекстовые ссылки.', example: "", id: 1010 },
        { title: "<b>", text: 'Задает полужирное начертание отрывка текста, не придавая акцент или важность выделенному.', example: "", id: 1011 },
        { title: "<blockquote>", text: 'Выделяет текст как цитату, применяется для описания больших цитат.', example: "", id: 1012 },
        { title: "<br>", text: 'Перенос текста на новую строку.', example: "", id: 1013 },
        { title: "<button>", text: 'Создает интерактивную кнопку. Элемент может содержать текст или изображение.', example: "", id: 1014 },
        { title: "<code>", text: 'Представляет фрагмент программного кода, отображается шрифтом семейства monospace.', example: "", id: 1015 },
        { title: "<del>", text: 'Помечает текст как удаленный, перечёркивая его', example: "", id: 1016 },
        { title: "<dfn>", text: 'Определяет слово как термин, выделяя его курсивом. Текст, идущий следом, должен содержать расшифровку этого термина.', example: "", id: 1017 },
        { title: "<dl>", text: 'Элемент-контейнер, внутри которого находятся термин и его описание', example: "", id: 1018 },
        { title: "<dt>", text: 'Используется для задания термина.', example: "", id: 1019 },
        { title: "<em>", text: 'Выделяет важные фрагменты текста, отображая их курсивом.', example: "", id: 1020 },
        { title: "<hr>", text: 'Горизонтальная линия для тематического разделения параграфов.', example: "", id: 1021 },
        { title: "<i>", text: '	Выделяет отрывок текста курсивом, не придавая ему дополнительный акцент.', example: "", id: 1022 },
        { title: "<img>", text: 'Встраивает изображения в HTML-документ с помощью атрибута src, значением которого является адрес встраиваемого изображения.', example: "", id: 1023 },
        { title: "<input>", text: 'Создает многофункциональные поля формы, в которые пользователь может вводить данные.', example: "", id: 1024 },
        { title: "<ins>", text: '<ins>', example: "", id: 1025 },
        { title: "<li>", text: 'Элемент маркированного или нумерованного списка.', example: "", id: 1026 },
        { title: "<map>", text: 'Создаёт активные области на карте-изображении. Является контейнером для элементов <area>.', example: "", id: 1027 },
        { title: "<mark>", text: 'Выделяет фрагменты текста, помечая их желтым фоном.', example: "", id: 1028 },
        { title: "<nav>", text: 'Раздел документа, содержащий навигационные ссылки по сайту.', example: "", id: 1029 },
        { title: "<ol>", text: 'Упорядоченный нумерованный список. Нумерация может быть числовая или алфавитная.', example: "", id: 1030 },
        { title: "<ul>", text: 'Упорядоченный маркированный список. ', example: "", id: 1031 },
        { title: "Ещё", text: 'Добавлю', example: "Позже", id: 1031 },
])



/*
 *  &#123;= {
 *  &#125; }
 * &#60;  <
    &#62; >
    &#61; =
    &#38; &
      <p />         
 */