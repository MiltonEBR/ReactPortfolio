import React from 'react';

import Title from './Title';
import ContactButton from './ContactButton';

import { MdMailOutline } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

export default function ContactPage() {
    return (
        <div className="many-holder">
            <Title txt="Contact" keyword="Me 📫" color="dark" />
            <div className="contact-holder">
                <ContactButton>
                    <MdMailOutline />
                </ContactButton>
                <ContactButton>
                    <FaGithub />
                </ContactButton>
                <ContactButton>
                    <TiSocialLinkedinCircular />
                </ContactButton>
            </div>
        </div>
    );
}
