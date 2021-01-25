import React from 'react';

import ImageCircle from './ImageCircle';
import HelloCard from './HelloCard';
import Button from './Button';

import profilepic from '../images/profilepic.png';

export default function HelloPage() {
    return (
        <>
            <ImageCircle source={profilepic} />
            <HelloCard>
                <Button txt="Skills" />
                <Button txt="Resume" design="dark" />
            </HelloCard>
        </>
    );
}
