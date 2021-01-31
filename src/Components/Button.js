import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from 'react-icons';

function Button(props) {
    const design = props.design;

    if (design === 'light' || design === 'dark') {
        return (
            <div className="btn-holder">
                <span className={`btn-shadow-${design}`}></span>
                <button type="button" className={`btn btn-${design}`} onClick={props.action}>
                    {props.txt}
                </button>
            </div>
        );
    } else if (design === 'simple-light' || design === 'simple-dark') {
        return (
            <button type="button" className={`btn btn-${design}`} onClick={props.action}>
                {props.txt}
            </button>
        );
    } else if (design === 'github') {
        return (
            <button type="button" className={`btn btn-github`} onClick={props.action}>
                <span>{props.txt}</span>
                <IconContext.Provider value={{ className: 'gith-ico' }}>
                    <FaGithub />
                </IconContext.Provider>
            </button>
        );
    } else {
        return (
            <button type="button" className="btn" onClick={props.action}>
                {props.txt}
            </button>
        );
    }
}

export default Button;
