import React from 'react';

import { IconContext } from 'react-icons';

export default function ContactButton(props) {
    return (
        <button
            type="button "
            className="btn contact-btn"
            onClick={() => {
                if (props.link) {
                    window.open(props.link, '_blank');
                }
            }}
        >
            <IconContext.Provider value={{ className: 'contact-ico' }}>
                {props.children}
            </IconContext.Provider>
        </button>
    );
}
