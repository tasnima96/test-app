import React from 'react'

const Header = () => {
  return (
    <>
    <header>
        <section className='container main-hero-container'>
            <div className='row'>
                <div className='col-12 col-lg-6 left-header d-flex justify-content-center flex-column align-items-start'>
                    <h1 className='display-2'>Good Food, <br></br> Good Mood.</h1>
                    <p className='main-hero-para'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dignissimos, cupiditate nam quia, blanditiis fugiat consectetur ut iure debitis cum praesentium commodi necessitatibus soluta, et tenetur dolores ullam aperiam maxime.</p>
                    {/* <h3>Get early access for you</h3>

                    <div className='input-group mt-3'>
                        <input type='text' className='rounded-pill w-75 me-3 p-2 form-control-text' placeholder='Enter Your Email'></input>
                        <div className='input-group-btn'>Get it now</div>
                    </div> */}
                </div>

                <div className='col-12 col-lg-6 right-header d-flex justify-content-center align-items-center main-header-images'>
                    <img src='./images/carousole/dish.png' alt='heroimg' className='img-fluid'></img>
                    <img src='./images/carousole/img1.jpg' alt='heroimg1' className='img-fluid main-header-img2'></img>
                </div>
            </div>
        </section>
    </header>
    </>
  )
}

export default Header