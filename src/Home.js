import './styles/Home.css';

function Home() {
    return (
        <body className="home">
            <ul className="dialogue">
                <li className="message1">
                    <img className="portrait" alt="AI-generated stylised portrait rendition of the owner of this site,
                        framed from the neck up" src="https://jacklewis.me/img/lensapic.png" />
                    <div>
                        <a href="/about" className="character">Jack</a>
                        <div className="text">
                            <h1 id="intro">Hi there. I'm a computer science graduate looking to kickstart my career in software engineering.</h1>
                        </div>
                    </div>
                </li>
                <li className="message2">
                    <h1>
                        In a year's time, I'd like to be able to point at an exciting product and say...
                    </h1>
                </li>
                <li className="message3">
                    <h2>
                        "We did that."
                    </h2>
                </li>
                <li className="message4">
                    <h1>Hiring? I'd love to help your team build something amazing. Here's everything you need to know about me:</h1>
                    <br/>
                </li>
            </ul>
            <hr className="break"></hr>
            <h1 className="name">Jack Lewis</h1><h1>Computing for Business and Management Grad</h1>
            <div className="icon-row">
                <a href=""><img alt="Email icon" className="icon" src="https://jacklewis.me/icons/email.svg" /></a>
                <a href="https://github.com/Jackerlus"><img alt="Github icon" className="icon" src="https://jacklewis.me/icons/github.svg" /></a>
                <a href="https://linkedin.com/in/jacklewis9"><img alt="LinkedIn icon" className="icon" src="https://jacklewis.me/icons/linkedin.svg" /></a>
            </div>
        </body>
    );
}

export default Home;
