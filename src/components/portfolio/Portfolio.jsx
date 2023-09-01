import React from 'react'
import './portfolio.css'
import { arrayOfProjects } from './array'

function Portfolio() {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
       {
        arrayOfProjects.map(({id, image, title, github, demo,Technologies, description})=>{
          return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <div className="separator"></div>

            <h3>{title}</h3>
            <small className='project__description' >{description}</small>
            <div className="separator"></div>

            <div className="tech__container">
            {Technologies.map((each)=>{
              return(

                <small key={each} className='each__technology'>{each} </small>
              )
            })}
            </div>
           <div className="portfolio__item-cta">
            {/* Only show Demo button if there's a live version of the app */}
             {demo?<a href={demo} className='btn' target='_blank' rel="noreferrer">Live View</a>:null } 
            <a href={github} className='btn btn-primary' target='_blank' rel="noreferrer">Github</a>
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