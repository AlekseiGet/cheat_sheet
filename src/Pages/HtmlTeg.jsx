import React, { useContext, useState } from 'react';
import { HtmlTegs } from '../context/context'

const HtmlTeg = () => {
    const [nameClass, setNameClass] = useState("hidden");
    const exampleArr = useContext(HtmlTegs);
    const change = (i) => {
        const response = document.getElementById(i);
        response.classList.toggle("hidden");
        response.classList.toggle("item_text");
    }
    return (
        <div style={{ background: "rgba(31, 231, 24, 0.664)" }}>
            <h1>HTML Теги</h1>
            {exampleArr.map(p =>
                <div className="conteiner" key={p.id} >
                    <div onClick={(e) => change(p.id)} className="item_title">
                        <h3>{p.title}</h3>
                    </div>
                    <div onClick={(e) => change(p.id)} className={nameClass} id={p.id}>
                        <div className="text_body" >{p.text}
                            <div>{p.example} </div>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
};

export default HtmlTeg;