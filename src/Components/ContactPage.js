import React from 'react';

import Title from './Title';
import ContactButton from './ContactButton';
import Button from './Button';

import { scrollTo } from './scrollTo';

import { MdMailOutline } from 'react-icons/md';
import { FaGithub } from 'react-icons/fa';
import { TiSocialLinkedinCircular } from 'react-icons/ti';

export default function ContactPage() {
    return (
        <div className="many-holder contact">
            <Title txt="Contact" keyword="Me 📫" color="dark" />

            <Button
                txt="Home"
                design="simple-dark"
                action={() => {
                    scrollTo('hello');
                }}
            />

            <div className="contact-holder">
                <ContactButton link="https://mailto:miltonqr1@gmail.com">
                    <MdMailOutline />
                </ContactButton>
                <ContactButton link="https://github.com/MiltonEBR">
                    <FaGithub />
                </ContactButton>
                <ContactButton link="https://linkedin.com/in/milton-ebr">
                    <TiSocialLinkedinCircular />
                </ContactButton>
            </div>
        </div>
    );
}
