import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='interests'>
      <h5>My Interests and</h5>
      <h2>Strengths</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Solid understanding of Web Development</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coursera Certified in Cybersecurity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>QA Testing</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Comfortable with relational Databases </p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Writing clean, well-structured code with clear commit messages.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Interpersonal Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analytical thinking and Problem-Solving abilities</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adapatability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Resolving conflicts with positivity and openness</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Collaboration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Time Management</p>
            </li>
             
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Creative Outlets</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Watercolor Painting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Created Foglia, a small-batch Kombucha brand</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Playing Chess</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Cooking and Baking</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Hosting Dinner parties and Tea</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services