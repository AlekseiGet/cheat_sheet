import React from 'react';
import { useState } from 'react';

const TaskThree = () => {
    const [forGender, setForGender] = useState('');

    function toArray() {
        if (forGender.toLowerCase() === "мужской") {
             alert("Ваш пол Мужской")
        }
        else if (forGender.toLowerCase() === "женский") {
            alert("Ваш пол Женский")
        } 
        else if (forGender[0].toLowerCase() === "м" ){
            alert("Вы имели в виду Мужской ?")
        }
        else if (forGender[0].toLowerCase() === "ж") {
            alert("Хотели сказать Женский ?")
        }
        else {
            alert("Познай себя!! А потом заново ответь.") 
        }
    }
    return (
        <div className="block">
            <h3 className='block_title' >Написать функцию, которой принимает пол человека в виде строки и возвращает результат "Ваш пол Мужской" (или женский) или  "неопределён"</h3>
            <input className='block_name' placeholder='Какого вы пола ?' type="text" value={forGender} onChange={e => setForGender(e.target.value)} />
            <button onClick={toArray} >Проверить</button>
        </div>
    );
};

export default TaskThree;