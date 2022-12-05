import React, { useState } from 'react';

const TaskToo = () => {
    const [forName, setForName] = useState('');
    const [forSurname, setForSurname ] = useState('');
    const [forYears, setForYears] = useState('');

  

    function toArray() {
        if (forName > 1 || forSurname > 1 || forYears >= 1) {
            alert(`${forName[1].toUpperCase(1) } ${forSurname} с возрастом  ${forYears}`)
        }
        else{
            alert("Заполни все поля анкеты")
        }
       
    }
    return (
        <div className="block">
            <h3 className='block_title' >Написать функцию, которой передаём имя, фамилию .. и получаем строку "Иван Петров с возрастом 1000 лет</h3>
            <input className='block_name' placeholder='Имя' type="text" value={forName} onChange={e => setForName(e.target.value)} />
            <input className='block_surname' placeholder='Фамилия' type="text" value={forSurname} onChange={e => setForSurname(e.target.value)} />
            <input className='block_years' placeholder='Сколько лет' type="tell" value={forYears} onChange={e => setForYears(e.target.value)} />
            <button onClick={toArray} >Проверить</button>
        </div>
    );
};


export default TaskToo;