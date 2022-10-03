import React, { useContext, useState } from 'react';
import { CssStyles } from '../context/context'

const CssStyle = () => {
    const [nameClass, setNameClass] = useState("hidden");
    const exampleArr = useContext(CssStyles);
    const change = (i) => {
        const response = document.getElementById(i);
        response.classList.toggle("hidden");
        response.classList.toggle("item_text");
    }
    return (
        <div style={{ background: "rgba(32, 127, 236, 0.677)" }}>
            <h1>CSS стили</h1>
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

export default CssStyle;
