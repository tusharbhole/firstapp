import React from 'react'
import { NavLink } from 'react-router-dom';

const Card = (props) => {
    return (
        <>  
                <div className="col-md-3 mx-auto">
                    <div className="card">
                        <img src={props.imgsrc} className="card-img-top" alt={props.imgsrc} />
                        <div className="card-body">
                            <h5 className="card-title font-weight-bold">{props.title}</h5>
                            <p className="card-text">Protect yourself and others around you by knowing the facts and taking appropriate precautions. Follow advice provided by your local health authority.</p>
                            <NavLink to="" className="btn btn-primary">Details</NavLink>
                        </div>
                </div>
            </div>

        </>
    );

};

export default Card;