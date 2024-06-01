import React from 'react'
import './index.css'
import Next11  from '../../assets/footer-next.svg'

const Index = () => {
  return (
    <>
    <section className="footer">
      <div className="container">
        <div className='footer_box'>
          <div className="footer_first">
            <span>
            <h2>369 mi</h2>
            <p>Range (EPA est.)</p>
            </span>
            <span>
            <h2>1.99s mi</h2>
            <p>0-60 mph*</p>
            </span>
            <span>
            <h2>200 mph</h2>
            <p>Top Speed+</p>
            </span>
            <span>
            <h2>1,020hp</h2>
            <p>Peek Power</p>
            </span>
          </div>

          <button>Order Now <img src={Next11} alt="" /></button>
        </div>
      </div>
      </section>
    </>
  )
}

export default Index