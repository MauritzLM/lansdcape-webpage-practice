// faq section, question - answer
import { useState } from "react";

function Faq({ faq }) {

    const [active, setActive] = useState('');

    return (
        <>
            <h3>Frequently asked questions</h3>
            {faq?.map(item => {
                return <div className={`faq-question-container ${item.id == active && "active"}`} key={item.id} onClick={() => setActive(item.id)} >
                    <p>{item.question}</p>


                    <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 -960 960 960" width="48"><path d="M480-345 240-585l43-43 197 198 197-197 43 43-240 239Z" /></svg>


                    <p className="answer" >{item.answer}</p>

                </div>
            })}
        </>
    )
}

export default Faq;

// click on div toggle hidden class on last p element, rotate svg .5turn