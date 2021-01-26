import React from 'react';

import { IconContext } from 'react-icons';

export default function ContactButton(props) {
    return (
        <button type="button " className="btn contact-btn">
            <IconContext.Provider value={{ className: 'contact-ico' }}>
                {props.children}
            </IconContext.Provider>
        </button>
    );
}
