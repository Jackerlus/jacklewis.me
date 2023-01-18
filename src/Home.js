import './styles/Home.css';

function Home() {
    return (
            <body className="home">
                <ul className="dialogue">
                    <li className="message1">
                        <img className="lensa" alt="AI-generated stylised portrait rendition of the owner of this site,
                            framed from the neck up" src="https://jacklewis.me/img/lensapic.png" />
                        <div className="message">
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
                </ul>
                <div className="new-section">
                    <h1>Hiring? I'd love to work with you. Here's everything you need to know about me:</h1>
                    <br/>
                </div>
            </body>
    );
}

export default Home;
