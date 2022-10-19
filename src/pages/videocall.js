

import React from 'react';
import booksdetails from '../books.json'
import Navbar from '../components/Navbar';
// import './App.css';

function App() {
  return (
    <>
    
    {/* <section>
              <div>
                  
      <div className="container position-sticky z-index-sticky top-0"><div className="row"><div className="col-12">
      <nav className="navbar navbar-expand-lg  blur border-radius-xl top-0 z-index-fixed shadow position-absolute my-3 py-2 start-0 end-0 mx-4">
        <div className="container-fluid">
          <a href =" "  className="navbar-brand font-weight-bolder ms-sm-3" rel="tooltip" title="Designed and Coded by  Tim" data-placement="bottom" >
            E- Hatch
          </a>
          
          <div className="collapse navbar-collapse pt-3 pb-2 py-lg-0" id="navigation">
            <ul className="navbar-nav navbar-nav-hover ms-lg-12 ps-lg-5 w-100">
              
              <li >
              <a href =" "  className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md">info</i>
                  About
                </a></li>

                <li>
                <a href =" "  className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuDocs" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md">people</i>
                  Feature Mentors
                </a></li>
                
                
                <li>
                <a href =" "  className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuBlocks" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md">article</i>
                  Success Story
                </a></li>


              
                
              <li >
                <a href =" "  className="nav-link ps-2 d-flex cursor-pointer align-items-center" id="dropdownMenuPages" data-bs-toggle="dropdown" aria-expanded="false">
                <i class="material-icons opacity-6 me-2 text-md">class</i>
                  Mentor Plan Portal
                  
                </a></li>
              <li className="nav-item ms-lg-auto my-auto ms-3 ms-lg-0">
                
                <a href =" "   className="btn btn-sm  bg-gradient-secondary  mb-0 me-1 mt-2 mt-md-0">Login</a></li>
            </ul>
          </div>
        </div>
      </nav>

      </div></div></div>

              </div>
       
          
  </section> */}
  <section className="bg-gradient-secondary"> 
           <header className="header-2">
  <div className="page-header min-vh-75 relative" style={{backgroundImage: 'Url(https://i.imgur.com/lQ0G53C.jpg)'}}>
    <span className="bg-gradient-primary opacity-4"></span>
    <div className="container">
      <div className="row">
        <div className="col-lg-7 text-center mx-auto">
          <h1 className="text-white pt-3 mt-n5">E-Hatch </h1>
          <p className="lead text-white mt-3"><b>Truly StartUp !!</b><br/> <i>Turn Ideas Into Reality</i></p>
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
  </div>
  <div class="container px-4 px-lg-5">
                
                <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                    <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="https://i.imgur.com/9iWwG4d.jpg" alt="..."/></div>
                    <div class="col-xl-4 col-lg-5">
                        <div class="featured-text text-center text-lg-left">
                            <h4>Why E-Hatch?</h4>
                            
                            <p class="text-black-50 mb-20"> <li>Grayscale is open source and MIT licensed.
                             This means you can use it for any project - even commercial projects! 
                             Download it, customize it, and publish your website!</li></p>
                            
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://i.imgur.com/pVxGvwA.jpg" alt="..."/></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-black">Entrepreneur</h4>
                                    <p class="mb-0 text-black-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://i.imgur.com/d3YcIpx.jpg" alt="..."/></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Mentors</h4>
                                    <p class="mb-0 text-black-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://i.imgur.com/oEvkyhl.jpg" alt="..."/></div>
                    <div class="col-lg-6">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-left">
                                    <h4 class="text-black">Investors</h4>
                                    <p class="mb-0 text-black-50">An example of where you can put an image of a project, or anything else, along with a description.</p>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row gx-0 justify-content-center">
                    <div class="col-lg-6"><img class="img-fluid" src="https://i.imgur.com/YMxeoNp.jpg" alt="..."/></div>
                    <div class="col-lg-6 order-lg-first">
                        <div class="bg-black text-center h-100 project">
                            <div class="d-flex h-100">
                                <div class="project-text w-100 my-auto text-center text-lg-right">
                                    <h4 class="text-black">Viewers</h4>
                                    <p class="mb-0 text-black-50">Another example of a project with its respective description. These sections work well responsively as well, try this theme on a small screen!</p>
                                  
                                </div>
                      
                            </div>
                        </div>
                    </div>
                </div>


             



            </div>
           
  </div>
  <br></br>  <br></br> <br></br>

</section>

<section className ="bg-gradient-secondary">
            <div className="pt-3 pb-4  card-body blur   mt-n8" id="count-stats">
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
          <div className="col md-3 position-center">
            <div className=" text-relative">
              <h1 > Featured Mentors</h1>
              {/* <h5 className="mt-3">Authors</h5> */}
              <p className="text-sm font-weight-normal"></p>
            </div>
            <hr className="vertical dark"/>
          </div>
          {/* <div className="col-md-4">
            <div className="p-3 text-center">
              <h1 className="text-gradient text-primary" id="state3" countto="4">15+</h1>
              <h5 className="mt-3">Genres</h5>
              <p className="text-sm font-weight-normal"></p>
            </div>
          </div> */}
          
        </div>
        
      </div>
      
    </div>
    {/* <button href =" " className="btn btn-sm  bg-gradient-secondary  mb-0 me-1 mt-2 mt-md-0">Show Random</button> */}
  </div>
         <div class="container">
                <div class="row align-items-center">
            {booksdetails.map((books, index) =>{
                var x = books.imageLink
                return   <div className="col-sm-4  p-4 md-8 ">
                <div className="rotating-card-container">
                <div className="cardcard-rotate card-background card-background-primary shadow-primary mt-md-0 mt-5">
                 
                    <div className= "front front-background" style={{backgroundImage: 'url("'+ x  +'")', backgroundSize: 'cover'}}>
                    <div className="card-body py-7 text-center">
                        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                        <i className="material-icons text-white text-4xl my-3"></i>
                        <h3 className="text-white"><br/> </h3>
                    </div>
                    </div>
                    {/* <div className="back back-background" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1616628188725-0a474c982b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlkZWF8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")', backgroundSize: 'cover'}}> */}
                    <div className="back back-background" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1616628188725-0a474c982b5c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGlkZWF8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60")', backgroundSize: 'cover'}}>
                    <br/><br/><br/>
                    <div className=" text-center">
                        <h3 className="text-black">Discover More</h3>
                        <h5 className="text-black "> You will save a lot of time going from prototyping to full-functional code because all elements are implemented.</h5>
                        <br/><br/><br/><br/>
                        <a href=".//sections/page-sections/hero-sections.html" target="_blank" className="btn btn-white btn-sm w-50 mx-auto mt-3">Know your Mentor</a>
                    </div>
                    </div>
                </div>
                </div>
                </div>



            }
            )
    }
   </div>
                </div>
                </div></section>
                <br></br> <br></br>
                <section id="featured-services" className="featured-services">
      <div className="container" data-aos="fade-up">
       <div className="p-3 text-center">
              <h1 > <span id="state2" countto="15">Success Story</span></h1>
          
              <p className="text-sm font-weight-normal"></p>
            </div>

        <div className="row">
          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="100">
              <div className="icon">
              <i class="material-icons ">people</i>
              </div>
              <h4 className="title"><a href="">Mentor</a></h4>
              <p className="description">Gain opportunities and experience not shared in books</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="200">
              <div className="icon">
              
              <i class="material-icons ">lightbulb</i>
              </div>
              <h4 className="title"><a href="">Entrepreneur</a></h4>
              <p className="description">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="300">
              <div className="icon">
              
              <i class="material-icons ">paid</i>
              </div>
              <h4 className="title"><a href="">Investor</a></h4>
              <p className="description">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
            </div>
          </div>

          <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-0">
            <div className="icon-box" data-aos="fade-up" data-aos-delay="400">
              <div className="icon">
             
              <i class="material-icons ">hail</i>
              </div>
              <h4 className="title"><a href="">Viewer</a></h4>
              <p className="description">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
            </div>
          </div>

        </div>

      </div>
    </section>
    <br></br> <br></br> <br></br>
  </>
  );
}

export default App;