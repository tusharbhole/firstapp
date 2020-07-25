import React from 'react';
import web from "../src/Images/covid-19.jpg";
import graph1 from "../src/Images/Graph.png";
import { NavLink } from 'react-router-dom';
const About =() => {
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
                        <div className="col-md-12 pt-15 pt-lg-5 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                <p className="text-center"> The COVID-19 pandemic in India is part of the worldwide pandemic
                                 of coronavirus disease 2019 (COVID-19) caused by severe acute respiratory syndrome coronavirus 
                                 2 (SARS-CoV-2). The first case of COVID-19 in India, which originated from China, was reported 
                                 on 30 January 2020. As of 5 July 2020, the Ministry of Health and Family Welfare (MoHFW) has 
                                 confirmed a total of 673,165 cases, 409,082 recoveries (including 1 migration) and 
                                 19,268 deaths in the country.[5] India currently has the largest number of confirmed 
                                 cases in Asia,[8] and has the fourth highest number of confirmed cases in the world[9]
                                  with the number of total confirmed cases breaching the 100,000 mark on 19 May and 200,000 
                                  on 3 June.[10][11] India's case fatality rate is relatively lower at 2.80%, against the 
                                  global 6.13%, as of 3 June.[11] Six cities account for around half of all reported cases
                                   in the country – Mumbai, Delhi, Ahmedabad, Chennai, Pune and Kolkata.[12] As of 24 May 2020,
                                    Lakshadweep is the only region which has not reported a case. On 10 June, India's recoveries 
                                    exceeded active cases for the first time reducing 49% of total infections.[13]</p>
                                <div className="text-center col-lg-12 pt-15 pt-lg-5">
                                    <img
                                        src={graph1}
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

export default About;