import './styles/Home.css';

function Home() {
    return (
        <body className="home">
            <ul className="dialogue">
                <li className="message1">
                    <img className="portrait" alt="AI-generated stylised portrait rendition of the owner of this site,
                        framed from the neck up" src="https://jacklewis.me/img/lensapic.png" />
                    <div>
                        <a href="" className="character">Jack</a>
                        <div className="text">
                            <h1 id="intro">Hi there. I'm a computer science graduate looking to kickstart my career in software engineering.</h1>
                        </div>
                    </div>
                </li>
                <li className="message2">
                    <h2>
                        In a year's time, I'd like to be able to point at an exciting product and say...
                    </h2>
                </li>
                <li className="message3">
                    <h2>
                        "We did that."
                    </h2>
                </li>
                <li className="message4">
                    <h2>Hiring? I'd love to help your team build something amazing. Here's everything you need to know about me:</h2>
                    <br/>
                </li>
            </ul>
            <hr className="break"></hr>
            <div id="about">
                <h1 className="name">Jack Lewis</h1>
                <h2>BSc, Computing for Business and Management (2.1)</h2>
                <h2>University of Sussex, Class of 2022</h2>
                <div className="icon-row">
                    <a href=""><img alt="Email icon" className="icon" src="https://jacklewis.me/icons/email.svg" /></a>
                    <a href="https://github.com/Jackerlus"><img alt="Github icon" className="icon" src="https://jacklewis.me/icons/github.svg" /></a>
                    <a href="https://linkedin.com/in/jacklewis9"><img alt="LinkedIn icon" className="icon" src="https://jacklewis.me/icons/linkedin.svg" /></a>
                </div>
                <div className="skills">
                    <div className="proficiency">
                        <h2 className="skills-title">Proficiency in...</h2>
                        <ul>
                            <li>Java</li>
                            <li>HTML/CSS</li>
                            <li>JavaScript (incl. React and JQuery)</li>
                            <li>PHP</li>
                            <li>SQL</li>
                        </ul>
                    </div>
                    <div className="other-skills">
                        <h2 className="skills-title">Other skills include...</h2>
                        <ul>
                            <li>Photoshop and Graphic Design</li>
                            <li>Davinci Resolve and Video Editing</li>
                            <li>Social Media Content</li>
                            <li>Customer Service</li>
                            <li>Fast acquaintance with new technologies</li>
                        </ul>
                    </div>
                </div>
            </div>
        </body>
    );
}

export default Home;
