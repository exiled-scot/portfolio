import IMG from '../assets/Kali.png';
import AlternatingText from './AlternatingText';

const About = () => {
    return (
        <div id="about" className="about">
            <h1 className="about-heading">About Me</h1>
            <div>
                <AlternatingText
                    text="I am a Scottish software developer and nerd. I like tinkering with code, breaking things and building them back stronger."
                    image={IMG}
                    position="left"
                />
            </div>
            <div>
                <AlternatingText
                    text="I am a Scottish software developer and nerd. I like tinkering with code, breaking things and building them back stronger."
                    image={IMG}
                    position="right"
                />
            </div>

        </div>
    )
}

export default About;
