import './styles/Home.css';

function Home() {
    return (
        <section className="home">
            <ul className="dialogue">
                <li className="message1">
                    <img className="portrait" alt="AI-generated stylised portrait rendition of the owner of this site,
                        framed from the neck up" src="https://jacklewis.me/img/lensapic.png" />
                    <section>
                        <a href="" className="character">Jack</a>
                        <div className="text">
                            <h1 id="intro">Hi there. I'm a computer science graduate looking to kickstart my career in software engineering.</h1>
                        </div>
                    </section>
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
            <section id="about">
                <h1 className="name">Jack Lewis</h1>
                <h1>BSc, Computing for Business and Management (2.1)</h1>
                <h2>University of Sussex, Class of 2022</h2>
                <section className="icon-row">
                    <a href=""><img alt="Email icon" className="icon" src="https://jacklewis.me/icons/email.svg" /></a>
                    <a href="https://github.com/Jackerlus"><img alt="Github icon" className="icon" src="https://jacklewis.me/icons/github.svg" /></a>
                    <a href="https://linkedin.com/in/jacklewis9"><img alt="LinkedIn icon" className="icon" src="https://jacklewis.me/icons/linkedin.svg" /></a>
                </section>
                <section className="skills">
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
                            <li>Fast learner with new technologies</li>
                        </ul>
                    </div>
                </section>
                <br />
                <section className="employment">
                    <h1>Notable employment history:</h1>
                    <section className="employment-tesco">
                        <h2>Sales Assistant, Tesco Mobile (Current Role)</h2>
                        <ul>
                            <li>Sales and customer service role selling mobile devices and network tariffs to customers</li>
                            <li>This is a target-oriented role, and while having only just started I am pulling solid figures,
                                including hitting targets for connections, colleague deals, ASP, marketing communications and more.</li>
                            <li>I create personal, welcoming experiences for customers coming into the store, whether they're buying
                                anything or not, and go the extra mile in sorting out their issues regardless of if they contribute to my
                                targets. Many of our customers are elderly and require that extra bit of patience and care in
                                explaining concepts that may be alien to them.</li>
                        </ul>
                    </section>
                    <section className="employment-ussu">
                        <h2>IT Assistant, University of Sussex Students' Union</h2>
                        <ul>
                            <li>Managing the IT systems of the students' union including sysadmin, network maintenance and expansion,
                                helpdesk service and ordering new equipment. Large focus on virtualisation at first, then the department
                                undertook a huge overhaul towards a ChromeOS-based setup company-wide.</li>
                            <br />
                            <li>Even though my position was as assistant, our IT manager was on long term sick leave for almost half of my
                                time at the company, and so me and one other assistant were performing all aspects of managing the IT
                                systems during this time including dealing with system outages of varying severity and making purchasing
                                decisions for new technology and equipment with the support of upper management.</li>
                            <br />
                            <li>Technical expertise was of course an important part of this role, but half of my day to day job was using
                                communication skills to explain and teach complex technical concepts to other employees that
                                weren't as literate in IT terminology. Breaking down these into easily understood statements and actionable
                                points was vital in my functions as an IT professional.</li>
                        </ul>
                    </section>
                </section>
            </section>
        </section>
    );
}

export default Home;
