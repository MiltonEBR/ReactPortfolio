import React from 'react';

function HelloCard(props) {
    return (
        <div className="hi-card">
            <h2 className="hi-title">Hello, im Milton Eduardo</h2>
            <hr />
            <p className="hi-p">
                Im a <span className="highlight">Computer Systems Engineering</span> student with a
                passion for continuous learning and making my ideas a{' '}
                <span className="highlight">reality</span>.
                <br />
                <br />I find <span className="highlight">data science</span> really interesting and
                like getting involved into <span className="highlight">game dev</span> on my free
                time.
                <br />
                <br />I love coding, videogames and <span className="highlight">penguins 🐧</span>
            </p>
            <span className="hi-grid">{props.children}</span>
        </div>
    );
}

export default HelloCard;
