import { FaJava, FaPython, FaJs, FaReact, FaHtml5, FaCss3, FaGithub, FaDocker } from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { DiRubyRough } from "react-icons/di";
import './Skills.css';

const Skills = () => {
    const skillsArr = [
        {
            "name": 'Python',
            "icon": FaPython
        },
        {
            "name" : 'JavaScript',
            "icon" : FaJs
        },
        {
            "name" : "HTML",
            "icon" : FaHtml5
        },
        {
            "name" : "CSS",
            "icon" : FaCss3
        },
        {
            "name" : "Tailwind",
            "icon" : TbBrandTailwind
        },
        
        {
            "name" : "Git",
            "icon" : FaGithub
        },
        {
            "name" : "Reactjs",
            "icon" : FaReact
        },
        {
            "name" : "Docker",
            "icon" : FaDocker
        },
        {
            "name" : "Java",
            "icon" : FaJava
        },
        {
            "name": "Ruby",
            "icon": DiRubyRough
        }
    ];

    return (
        <div id='skills' className='skills'>
            <h2 className='title'>Skills</h2>
            <div className='skill-holder'>
                {
                    skillsArr.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                            <i key={index} className='skill-cards'>
                                <Icon className='skill-icon'/>
                                <p
                                className="skill"
                                >
                                    {skill.name}
                                </p>
                            </i>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Skills;
