import React from 'react';
import Slider from 'react-slick';
import '../assets/login.png'; // Assuming this is the correct path to the login.png file
import data from '../data/projects.json';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Projects.scss';

const Projects = () => {
  const settings = {
    dots: true,
    infinite: false,
    initialSlide: 0,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          infinite: false,
          initialSlide: 0,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id='projects' className='projects'>
      <div className='title-heading'>
        <h2>PROJECTS</h2>
      </div>
      <div className='projects-container'>
        <Slider {...settings}>
          {data.map((project, key) => (
            <div className='example-2 card project' key={key}>
              <div
                className='wrapper'
                style={{
                  backgroundImage: `url(${project.image})`,
                  backgroundPosition: 'center center',
                  backgroundSize: 'cover',
                }}
              >
                <div className='data'>
                  <div className='content'>
                    <span className='type'>Project</span>
                    <h1 className='title'>
                      <a href={project.link}>{project.name}</a>
                    </h1>
                    <h3 className='text'>
                    <a href={project.project_demo}>Demo</a>
                    </h3>
                    <p className='text'>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Projects;
