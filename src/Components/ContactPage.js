import React from 'react';

import Title from './Title';
import ContactButton from './ContactButton';

import { MdMailOutline } from 'react-icons/md';

export default function ContactPage() {
    return (
        <div className="many-holder">
            <Title txt="Contact" keyword="Me 📫" color="dark" />
            <div className="contact-holder">
                <ContactButton>
                    <MdMailOutline />
                </ContactButton>
                <ContactButton>
                    <MdMailOutline />
                </ContactButton>
                <ContactButton>
                    <MdMailOutline />
                </ContactButton>
            </div>
        </div>
    );
}
