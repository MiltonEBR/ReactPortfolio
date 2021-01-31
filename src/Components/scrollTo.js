import { scroller } from 'react-scroll';

export function scrollTo(name) {
    scroller.scrollTo(name, {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutCubic',
    });
}
