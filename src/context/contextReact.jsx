import { createContext } from "react";

export const ReactSheet = createContext([
    { title: "запуск реакт приложения на веб странице", text: "npm start", example: "", id: 3000 },
    { title: "Обновить react проект в gitHab", text: "npm run deploy", example: "", id: 3001 },
    { title: "инициализация папки с сервером", text: "npm init -y", example: "в папке появится файл 'package.json'", id: 3002 },
    { title: "Установка фреймворка : express, система управления данными : pg-hstore, ОРМ : segualize, чтобы обращатся к браузеру к серверу : cors dotenv  ", text: "npm install express pg pg-hstore sequelize cors dotenv", example: "после установки все модули можно увидеть в поле 'dependencies'", id: 3003 },
    { title: "Зависимость для разработки 'Дэб зависимость'", text: "npm install -D nodemon ", example: "Нужен для того чтобы при каждом изменении в коде не перезапускать сервер он будет делать это автоматически, смотри дальше " , id: 3004 },
    { title: "Дэб зависимость Установил ? измени script: запускающий приложение в режиме разработки", text: ' "scripts": "dev": "nodemon index.js"  это исполняемая команда', example: "В файле 'package.json' 'test': удалить", id: 3005 },
    { title: "запуск скрипта", text: "npm run dev", example: "Перед этим зайди через консоль в папку с сервером 'cd server'", id: 3006 },
    { title: " pgAdmin 4", text: "запустил программу pgAdmin 4", example: "пароль 'give_me_your_money'", id: 3007 },
    { title: "создание диаграммы зависимостей", text: "в браузере запустил   https://app.diagrams.net/ и открыл файл 123123", example: " Время в видеоролике : __ __", id: 3008 },
    { title: "Postman", text: "запустил программу Postman", example: " Время в видеоролике :( 25.15 ) ", id: 3009 },
    { title: "Установка модулей на VSC", text: "npm i jsonwebtoken", example: "для генерации токена", id: 3010 },
    { title: "Установка модулей на VSC", text: "npm i bcrypt", example: "для хешиирования паролей и не хранить их в базе данных", id: 3011 },
    { title: "декодировщик токенов", text: " https://jwt.io/", example: "декодировщик токенов", id: 3011 },
    { title: "", text: "", example: "", id: 3012 },
    { title: "", text: "", example: "", id: 3013 },
    { title: "", text: "", example: "", id: 3014 },
    { title: "", text: "", example: "", id: 3015 },
    { title: "", text: "", example: "", id: 3016 },
    { title: "", text: "", example: "", id: 3017 },
   
    { title: "Инпут с двухсторонней связкой", text: "const [forInput, setForInput] = useState({ nameInput: ''})", example: " <input className='block_input' placeholder='Написать функци' type='text' value={forInput.nameInput} onChange={e => setForInput({ nameInput: e.target.value })} />", id: 3100 },
    { title: "Кнопка с функцией", text: "function increment() { setLikes(likes + 1)}", example: " <button onClick={increment}>Добавить</button>", id: 3101 },
])