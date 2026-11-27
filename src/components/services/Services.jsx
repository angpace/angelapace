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
            <h3>Operations & Project</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Agile & Scrum Methodologies</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Jira & Workflow Management</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Project Planning & Execution</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coursera Certified in Cybersecurity</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Capacity Planning</p>
            </li>
             <li>
              <BiCheck className='service__list-icon' />
              <p>Process Improvement</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Technical & Automation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>SQL & PostgreSQL</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>AI Tools & Prompt Engineering</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Zapier Workflow Automation</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Platform Administration</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Technical Troubleshooting</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Coursera Cybersecurity Certificate</p>
            </li>
             
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Interpersonal Skills</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analytical Thinking & Problem Solving</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Communication</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Adaptability</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Conflict Resolution</p>
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
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services