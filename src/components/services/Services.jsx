import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>My Intrests and</h5>
      <h2>Strengths</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Frontend Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Strong knowledge of React concepts, including component lifecycle.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>React Router for implementing client-side routing and navigation.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Optimization of React application performance through rendering, code splitting, and lazy loading.</p>
            </li>
          </ul>
        </article>
        {/* END OF UI/UX */}
        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* WEB DEVELOPMENT */}
        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}
      </div>
    </section>
  )
}

export default Services