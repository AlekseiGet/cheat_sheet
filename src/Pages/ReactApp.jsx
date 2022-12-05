import React, { useContext, useState } from 'react';
import { ReactSheet } from '../context/contextReact';

const ReactApp = () => {
  const [nameClass, setNameClass] = useState("hidden");
  const reactSheet = useContext(ReactSheet)
  const change = (i) => {
    const response = document.getElementById(i);
    response.classList.toggle("hidden");
    response.classList.toggle("item_text");
  }
    return (
        <div>
          <h1>React на примерах</h1>  
            <ol>
               <li> Установил Node.js https://nodejs.org/en/</li>
               <li>Создал ПУСТУ папку, где будут лежать (потом) все файлы, имя не должно начинаться с большой буквы</li>
               <li> Запустил VSCode и открыл в нем папку которую создал.</li>
               <li>Создал терминал и в нем —   npx — v // ответ должен быть версия npx , иначе он не установлен. нужно ставить Note.js</li>
               <li> npx create-react-app . // в конце точка обозначает что создавать нужно в этой папке, если в папке будут файлы VSC будет ругаться</li>
               <li>или для имени проекта: npx create-react-app project_name</li>
               <li> npm start //для запуска приложения</li>
            </ol>
            <h3>Откроется страница с анимированным логотипом React</h3>
            <h3>Теперь нужно "почистить" от ненужных файлов папку</h3>
             {reactSheet.map(p =>
          <div className="conteiner" key={p.id} >
            <div onClick={(e) => change(p.id)} className="item_title">
              <h3>{p.title}</h3>
            </div>
            <div onClick={(e) => change(p.id)} className={nameClass} id={p.id}>
              <div className="text_body" >{p.text}
                <h3>{p.example} </h3>
              </div>
            </div>
          </div>

             )}
        </div>
    );
};

export default ReactApp;