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
              <p>Builds user experiences with a user-centric approach</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Testing and Debugging</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Familiarity with Version Control</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Follows best practices to create clean, well-structured code.</p>
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
              <p>Communication (Verbal and Non-verbal) with Empathy</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adapatable to change</p>
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
              <p>Created Foglia, a small-batch Kombucha brand</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Building Foglias e-commerce website</p>
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