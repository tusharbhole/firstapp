import React from 'react';
import web from "../src/Images/banner.png";
import graph from "../src/Images/Graph-2.jpg";
import { NavLink } from 'react-router-dom';
const Home = () => {
    return (
        <>
            <section id="header" className="">
                <div className="container-fluid ">
                    <div className="row">
                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-4 pt-15 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>India Corona Virus Guidlines
                                <strong className="brand-name"> (Covid-19)</strong></h1>
                                    <h6>
                                        Stay Home Stay Safe India Fights Corona COVID-19
                            </h6>
                                    <div className=" col-md-6 mt-5  pl-lg-5 pt-lg-10" >
                                        <NavLink to="/about" className="btn-get-started   ">
                                            Help desk
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
                            <div className="col-md-12 pt-15 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <p className="text-center"> STRATEGIC OBJECTIVES
                                WHO’s strategic objectives for this response are to:
                                • Limit human-to-human transmission including reducing secondary infections among close contacts and
                                health care workers, preventing transmission amplification events, and preventing further international
                                spread from China*;
                                • Identify, isolate and care for patients early, including providing optimized care for infected patients;
                                • Identify and reduce transmission from the animal source;
                                • Address crucial unknowns regarding clinical severity, extent of transmission and infection, treatment
                                options, and accelerate the development of diagnostics, therapeutics and vaccines;
                                • Communicate critical risk and event information to all communities and counter misinformation;
                                • Minimize social and economic impact through multisectoral partnerships.
                                *This can be achieved throughs a combination of public health measures, such as rapid identification, diagnosis
                                and management of the cases, identification and follow up of the contacts, infection prevention and control in
                                health care settings, implementation of health measures for travelers, awareness-raising in the population and risk communication.</p>
                                <div className="text-center col-lg-12 pt-15 pt-lg-5">
                                    <img
                                        src={graph}
                                        alt="home img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );

};

export default Home;