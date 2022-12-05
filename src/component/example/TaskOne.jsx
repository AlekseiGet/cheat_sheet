import React, { useContext, useState } from 'react';
import { useEffect } from 'react';

const TaskOne = () => {
   const [forInput, setForInput] = useState('');
    const [newInput, setNewInput] = useState([]);

    useEffect(() => {
        if (forInput.length === 0 || forInput === "Натиши что то!!") {
            setForInput("Напиши что то!!")
        }
        else if (isNaN(parseInt(newInput[0]) + parseInt(newInput[1]))) {
            setForInput('Нужно ввести числа')
        }
        else {
            setForInput(parseInt(newInput[0]) * parseInt(newInput[1]));
        }
    }, [newInput])

    function toArray() {
        if (forInput.length > 2) {
            setNewInput(forInput.split(" "));
        }
    }
    return (
            <div className="block">
                <h3 className='block_title' >Написать функцию, которая принимает два числа и возвращает результат их умножения</h3>
                <input className='block_input' placeholder='слогаемые' type="text" value={forInput} onChange={e => setForInput(e.target.value)} />
                <button onClick={toArray} >Проверить</button>
            </div>
    );
};

export default TaskOne;