import React, { useState } from 'react';
import { GiClick } from 'react-icons/gi';
import { IconContext } from 'react-icons';
import Button from './Button';

export default function Project(props) {
    const [active, setActive] = useState(false);

    const toggleActive = () => {
        setActive((prev) => {
            return !prev;
        });
    };

    return (
        <article className={`proj${active ? ' proj-active' : ''}`} onClick={toggleActive}>
            <img src={props.img} alt="" />
            <div className="proj-info">
                {active ? (
                    <>
                        <p>{props.children}</p>
                        <Button txt="Github" design="github" />
                    </>
                ) : (
                    <>
                        <h2>{props.ttl}</h2>
                        <IconContext.Provider value={{ className: 'click-ico' }}>
                            <GiClick />
                        </IconContext.Provider>
                    </>
                )}
            </div>
        </article>
    );
}
