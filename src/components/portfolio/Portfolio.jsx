import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/privee.gif'
import IMG4 from '../../assets/NYClean.gif'
import IMG5 from '../../assets/Synodic.gif'
import IMG6 from '../../assets/Smoothie.gif'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG2,
    title: 'An e-commerce site for Foglia Brand. In progress',
    github: 'https://github.com/angpace/foglia',
    demo: 'https://dribbble.com/shots/16580766-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 2,
    image: IMG1,
    title: 'Kitchen and Code, a blog about food and tech.',
    github: 'https://github.com/angpace/kitchenandcode',
    demo: 'https://www.kitchenandcode.com/'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Privee, a food platform connecting Clients and Chefs.',
    github: 'https://github.com/angpace/privee',
    demo: 'https://youtu.be/NrPr2wIKGgA'
  },
  {
    id: 4,
    image: IMG4,
    title: 'NYCleans, a \'non-profit\', volunteer based cleaning app.',
    github: 'https://github.com/B-Keshav/NYCleans',
    demo: 'https://www.youtube.com/watch?v=RHoJySoRt-8&feature=youtu.be'
  },
  {
    id: 5,
    image: IMG5,
    title: 'Synodic',
    github: 'https://github.com/angpace/Synodic',
    demo: 'https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  },
  {
    id: 6,
    image: IMG6,
    title: 'SmoothieMaster',
    github: 'https://github.com/angpace/smoothiemaster',
    demo: 'https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' rel="noreferrer" target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio