import React from 'react';
import web from "../src/Images/covid-19.jpg";
import { NavLink } from 'react-router-dom';
const Common =() => {
    return(
        <>
         <section id="header" className="">
         <div className="container-fluid nav_bg">
        <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">
                        <div className="col-md-4 pt-15 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                            <h1>About Guidlines
                                <strong className="brand-name"> (Covid-19)</strong></h1>
                            <h6>
                               Prepare Don't Panic (Help us to Help You)
                            </h6>
                            <div className=" col-md-6 mt-5  pl-lg-5 pt-lg-" >
                                <NavLink to="/contact" className="btn-get-started   ">
                                    Contact
                                </NavLink>
                            </div>
                        </div>
                        <div className="col-lg-8  order-1 order-lg-2 header-img">
                            <img 
                            src={web} 
                            className="img-fluid animated" 
                            alt="home img" />
                        </div>
                        </div>
                    </div> 
                </div>
            </div>
        </section>
    </>
    );

};

export default Common;