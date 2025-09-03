import React from 'react'
import './HomeAbout.css'

type Props = {
  heading: string
  subheading: string
  carouselText: string
  description: string
}

export const HomeAbout: React.FC<Props> = (props) => {
  const { heading, subheading, carouselText, description } = props
  return (
    <>
      <section>
        <div className="hometwentySecBg">
          <div className="custom-container">
            <div className="twentyH2">
              <h2>{heading}</h2>
            </div>
            <div className="twentyDesc1">{subheading && <p>{subheading}</p>}</div>
          </div>

          <div className="custom-container">
            <div className="twentyDesc2">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
