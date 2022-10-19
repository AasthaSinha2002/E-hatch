import React from 'react'

export default function Herosection() {
    return (
      <>
<section className="bg-gradient-secondary">            <header className="header-2">
  <div className="page-header min-vh-75 relative" style={{backgroundImage: "url(/img/21.jpg)"}}>
    <span className="mask bg-gradient-primary opacity-4"></span>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <h1 className="text-white pt-3 mt-n5">E-Hatch </h1>
          <p className="lead text-white mt-3">yahan pe line<br/> yahan pe line 2 </p>
          <a href =" "   className="btn btn-sm  bg-gradient-secondary  mb-0 me-1 mt-2 mt-md-0">Get Started</a>
        </div>
      </div>
    </div>
  </div>
</header>

<div className="pt-3 pb-4  card card-body blur shadow-blur  mt-n6" id="count-stats">
  <div className="container">
    <div className="row">
      <div className="col-lg-9 mx-auto py-3">
        <div className="row">
          <div className="col-md-4 position-relative">
            <div className="p-3 text-center">
              {/* <h1 className="text-gradient text-primary"><span id="state1" countto="70">700</span>+</h1>
              <h5 className="mt-3">Books</h5> */}
              <p className="text-sm font-weight-normal"></p>
            </div>
            <hr className="vertical dark"/>
          </div>
          <div className="col-md-5 position-relative">
            <div className="p-3 text-center">
              <h1 > <span id="state2" countto="15">About E-Hatch</span></h1>
          
              <p className="text-sm font-weight-normal"></p>
            </div>
            <hr className="vertical dark"/>
          </div>
          
        </div>
        
      </div>
      
    </div>
    {/* <button href =" " className="btn btn-sm  bg-gradient-secondary  mb-0 me-1 mt-2 mt-md-0">Show Random</button> */}
  </div>
  <div class="container px-4 px-lg-5">
                
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="/img/12.jpg" alt="..."/></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Shoreline</h4>
                            <p class="text-black-50 mb-0">Grayscale is open source and MIT licensed. This means you can use it for any project - even commercial projects! Download it, customize it, and publish your website!</p>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="/img/21.jpg" alt="..."/></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-black">Misty</h4>
                                    <p class="mb-0 text-black-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    {/* <hr class="d-none d-lg-block mb-0 ms-0"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="/img/rr.jpg" alt="..."/></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Mountains</h4>
                                    <p class="mb-0 text-black-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    {/* <hr class="d-none d-lg-block mb-0 me-0"/> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
  </div>
  <br></br>  <br></br>

</section>
<br></br>
<br></br>
            
    </>
        
    )
}