import React, { useContext, useState } from 'react';
import { CheatSheet } from '../context/context'

const JavaScript = () => {
    const [nameClass, setNameClass] = useState("hidden");
    const cheatSheet = useContext(CheatSheet);
    const change = (i) => {
        const response = document.getElementById(i);
        response.classList.toggle("hidden");
        response.classList.toggle("item_text");
    }
    return (
        <div style={{ background: "rgba(223, 63, 63, 0.677)" }}>
            <h2>JavaScript</h2>
            {cheatSheet.map(p =>
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

export default JavaScript;