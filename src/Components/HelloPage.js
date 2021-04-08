import React from 'react';

import ImageCircle from './ImageCircle';
import HelloCard from './HelloCard';
import Button from './Button';

import { scrollTo } from './scrollTo';

import profilepic from '../images/profilepic.png';

export default function HelloPage() {
    return (
        <>
            <ImageCircle source={profilepic} />
            <HelloCard>
                <Button
                    txt="Skills"
                    design="light"
                    action={() => {
                        scrollTo('skills');
                    }}
                />
                {/* <Button txt="Resume" design="dark" /> */}
            </HelloCard>
        </>
    );
}
