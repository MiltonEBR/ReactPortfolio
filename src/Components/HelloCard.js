import React from 'react';

function HelloCard(props) {
    return (
        <div className="hi-card">
            <h1 className="hi-title">Hello, im Milton Eduardo</h1>
            <hr />
            <p className="hi-p">
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit…
                <br />
                <br />
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur,
                adipisci velit...
            </p>
            <span className="hi-grid">{props.children}</span>
        </div>
    );
}

export default HelloCard;
