import '../styles/Home.css';

function Home() {
    return (
        <section className="home">
            <ul className="dialogue">
                <li className="message1">
                    <img className="portrait" alt="AI-generated stylised portrait rendition of the owner of this site,
                        framed from the neck up" src="images/lensapic.png" />
                    <div>
                        <a className="character">Jack</a>
                        <div className="text">
                            <h1 id="intro">I'm a computer science graduate looking to transition into software.</h1>
                        </div>
                    </div>
                </li>
                {/* <li className="message2">
                    <h2>
                        In a year's time, I'd like to be able to point at an exciting product and say...
                    </h2>
                </li>
                <li className="message3">
                    <h2>
                        "We did that."
                    </h2>
                </li> */}
                <li className="message4">
                    <h2>Hiring? I'd love to help your team build something amazing. Here's everything you need to know about me:</h2>
                    <br/>
                </li>
            </ul>
            <hr className="break"></hr>
            <section className="about">
                <h1 className="name">Jack Lewis</h1>
                <div className="img-container">
                    <img alt="The author, Jack, in his graduation gown and cap posing with his father on his graduation day."
                        className="img-graduation" src="images/graduation.jpg" />
                </div>
                <h1>BSc, Computing for Business and Management (2.1)</h1>
                <h2>University of Sussex, Class of 2022</h2>
                <div className="icon-row">
                    <a href="https://jacklewis.me"><img alt="Email icon" className="icon" src="images/icons/email.svg" /></a>
                    <a href="https://github.com/Jackerlus"><img alt="Github icon" className="icon" src="images/icons/github.svg" /></a>
                    <a href="https://linkedin.com/in/jacklewis9"><img alt="LinkedIn icon" className="icon" src="images/icons//linkedin.svg" /></a>
                </div>
                <section className="skills">
                    <div className="proficiency">
                        <h2 className="skills-title">Proficiency in...</h2>
                        <ul>
                            <li>Java</li>
                            <li>HTML/CSS</li>
                            <li>NodeJS development</li>
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
                            <li>Fast learner with new technologies</li>
                            <li>Solid teamworking and communication fundamentals</li>
                        </ul>
                    </div>
                </section>
            </section>
            <hr className="break"></hr>
            <section className="projects">
                <h1>Side projects of note:</h1>
                <div className="project">
                    <a href="https://github.com/Jackerlus/soundb" className="project-link">
                        <img className="project-image" src="images/sounDB.png"
                            alt="A screenshot of the author's sounDB project. Features a grid of music search results retrieved from an API."></img>
                    </a>
                    <h2>sounDB</h2>
                    <ul className="project-description">
                        <li>A music release searching application utilising the <a href='https://musicbrainz.org/doc/MusicBrainz_API'>MusicBrainz API</a>,
                            with cover art pulled from the <a href='https://musicbrainz.org/doc/Cover_Art_Archive/API'>Cover Art Archive API.</a></li>
                        <li>Inspired by freeCodeCamp's OMDB movie searching app <a href='https://www.freecodecamp.org/news/how-to-build-a-movie-search-app-using-react-hooks-24eb72ddfaf7/'>tutorial</a>.
                            I took the idea and designed it for music instead with a different set of APIs.</li>
                        <li>This project was useful for refreshing my knowledge of API usage and manipulation of JSON objects.</li>
                    </ul>
                </div>
                <div className="project">
                    <a href="https://github.com/Jackerlus/jacklewis.me" className="project-link">
                        <img className="project-image" src="images/jacklewis.me.png"
                            alt="A screenshot of the top of the homepage of this website in the mobile display view." />
                    </a>
                    <h2>jacklewis.me (this site)</h2>
                    <ul className="project-description">
                        <li>My personal site. Used for my own dev experimentation and learning, as well as for showing my skills and projects to potential employers.</li>
                        <li>Through this project I've learned valuable lessons in responsive design, accessibility, and React development.</li>
                    </ul>
                </div>
                <div className="project">
                    <a href="/" className="project-link">
                        <img className="project-image" src="images/bctstats.png"
                            alt="A screenshot of the author's gaming tournament statistics system front end. Shows inputs to search for players and matches, and assign teams." />
                    </a>
                    <h2>BCT Stats</h2>
                    <ul className="project-description">
                        <li>A web app based on the <a href="https://www.nodecg.dev/">nodecg</a> framework, co-developed with my friend <a href="https://github.com/baileybarberscargill">Bailey</a>. Designed to harvest statistics from VALORANT tournament matches via <a href="https://app.swaggerhub.com/apis-docs/Henrik-3/HenrikDev-API/3.0.0">Henrik's VALORANT API</a>.</li>
                        <li>Stores statistics on players and matches in a database which can then be used to generate graphics directly to live broadcast on the fly.</li>
                        <li>Developing BCT Stats taught me some great lessons in user experience, API usage, back-end development, and database interaction.</li>
                    </ul>
                </div>
                <div className="project">
                    <a href="/bct-wrapped" className="project-link">
                        <img className="project-image" src="images/bctwrapped.png"
                            alt="A screenshot of BCT Wrapped showing a user's most played agent from a VALORANT tournament and their seed and team name,
                            with a Next button underneath indicating more information is available to see." />
                    </a>
                    <h2>BCT Wrapped</h2>
                    <ul className="project-description">
                        <li>Nodejs companion web app to BCT Stats built with Express solo-built by me, in the style of Spotify Wrapped.</li>
                        <li>Draws from the BCT Stats database to create summaries and comparisons against other BCT players from a BCT season.</li>
                        <li>Building this web app gave me helped me develop my knowledge of routing, using HTTP requests for database interaction, as well as using Express.js to start a project quickly.</li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default Home;
