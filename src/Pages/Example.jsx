import React, { useContext, useState } from 'react';
import { ExampleDecision } from '../context/context'

const Example = () => {
    const [nameClass, setNameClass] = useState("hidden");
    const exampleArr = useContext(ExampleDecision);
    const change = (i) => {
        const response = document.getElementById(i);
        response.classList.toggle("hidden");
        response.classList.toggle("item_text");
    }
    return (
        <div>
            <h2>Примеры решений задачь</h2>
            {exampleArr.map(p =>
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

export default Example;