import PCMonitor from './PCMonitor';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div className='at-container'>
                <p className='at-text'>I am a full stack software developer and tech enthusiast from Scotland. I worked as a developer for a boutique penetration testing company near Edinburgh where I had the pleasure of securing other peoples' work against common and technically sophisticated attackers. I am currently traveling and looking for my next big project.</p>
                <div className='pc-monitor'>
                    <PCMonitor />
                </div>
            </div>
        </div>
    )
}

export default About;