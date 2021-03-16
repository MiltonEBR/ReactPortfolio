import gato from '../images/cato.jpg';
import party from '../images/pakapu.png';
import reactlogo from '../images/reactlogo.png';
import pokemon from '../images/pokemon.png';
import portfolio from '../images/portfolio.png';

const projectsData = [
    {
        title: 'Java Pokemon Game',
        desc: (
            <p>
                In collaboration with a friend, I made a Pokemon game in <b>Java</b> (without game
                libraries) as my final project for <b>OOP</b> class.
                <br />
                It includes fights and purchasable items.
            </p>
        ),
        img: pokemon,
        link: 'https://github.com',
    },
    {
        title: 'Mario Party Browser System',
        desc: (
            <p>
                A Mario Party inspired <b>board system</b> for the browser that allows turn-based
                movement between tiles in real-time. <br />
                Using <b>Node.js</b>, <b>Socket.io</b> and <b>Matter.js.</b>
            </p>
        ),
        img: party,
        link: 'https://github.com/MiltonEBR/PakaPuParty',
    },
    {
        title: 'My React Portfolio',
        desc: (
            <p>
                <b>The website you are on right now!</b>
                <br />I made it as a way to put my recently accquired knowledge of <b>React</b> into
                practice!
            </p>
        ),
        img: reactlogo,
        link: 'https://github.com/MiltonEBR/ReactPortfolio',
    },
    {
        title: 'Test portfolio',
        desc: (
            <p>
                Made this portfolio to practice after a 52 hour <b>JavaScript</b> bootcamp I took.
                <br />
                Practicing <b>JS</b>, <b>HTML</b> and <b>CSS</b>. <br />
                (Personal info wasn't added).
            </p>
        ),
        img: portfolio,
        link: 'https://github.com/MiltonEBR/PortfolioWebsite',
    },
    {
        title: 'RSA Messaging App',
        desc: (
            <p>
                A <b>Java</b> chat application based on sockets that encrypts messages sent with
                RSA.
                <br />
                This was a project for my <b>Computational Maths</b> class.
            </p>
        ),
        img: gato,
        link: 'https://github.com/MiltonEBR/RSAMessagingApp',
    },
    {
        title: 'CYK Algorithm',
        desc: (
            <p>
                A <b>CYK</b> parsing algorithm that checks if a string can be generated.
                <br />
                This was a project for my <b>Computational Maths</b> class. Made with <b>Java</b>.
            </p>
        ),
        img: gato,
        link: 'https://github.com/MiltonEBR/CYKAlgorithm',
    },
    {
        title: 'String Replacement Automata',
        desc: (
            <p>
                This <b>Automata</b> replaces a string based on a pattern of your choice using state
                tables.
                <br />
                This was a project for my <b>Computational Maths</b> class. Made with <b>Java</b>.
            </p>
        ),
        img: gato,
        link: 'https://github.com/MiltonEBR/CYKAlgorithm',
    },
    // {
    //     title: 'Coming Soon',
    //     desc: <p>I have more projects! I just haven't added them yet.</p>,
    //     img: gato,
    //     link: 'https://github.com/MiltonEBR/',
    // },
];

export { projectsData };
