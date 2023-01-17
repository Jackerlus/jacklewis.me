import './styles/Home.css';

function Home() {
    return (
        <div className="home">
            <body>
                <ul className="dialogue">
                    <li>
                        <img className="lensa" alt="AI-generated stylised portrait rendition of the owner of this site,
                            framed from the neck up" src="https://jacklewis.me/img/lensapic.png" />
                        <div className="message">
                            <a href="/about" className="character">Jack</a>
                            <div className="text">
                                <h1>
                                    Hi there. I'm a computer science graduate and I'm looking to kickstart my career in software engineering.
                                </h1>
                            </div>
                        </div>
                    </li>
                    <li>
                        <h1>
                            In a year's time, I'd love to be able to point at an exciting product and say: "We did that".
                        </h1>
                    </li>
                </ul>
            </body>
        </div>
    );
}

export default Home;
