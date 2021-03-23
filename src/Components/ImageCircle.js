import React from 'react';

function ImageCircle(props) {
    const [width, setWidth] = React.useState(window.innerWidth);

    let size = width > 500 ? 475 : 375;

    React.useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    });

    let r = width > 500 ? 220 : 170;
    return (
        <div className="logo-holder">
            <img
                src={props.source}
                alt=""
                className="logo-image"
                height={size - 100}
                width={size - 100}
            />
            <svg height={size} width={size}>
                <circle cx={size / 2} cy={size / 2} r={r} className="circle-svg" />
            </svg>
        </div>
    );
}

export default ImageCircle;
