import React from "react";
import "./Cards.css";

function Cards(props) {
    return(
        <div className="card-container">
            <img className="photo" src={props.imageUrl}/>
            <div className="card-content">
                <div className="card-location">
                    <img src="./location.png"/>
                    <span className="country">{props.loc}</span>
                    <span className="map-url">View on Google Maps</span>
                </div>
                <div>
                    <span className="location-content">{props.title}</span>
                </div>
                <div>
                    <span className="location-date">{props.startDate} - {props.endDate}</span>
                </div>
                <div>
                    <span className="location-desc">{props.description}</span>
                </div>
            </div>
        </div>
    )
}

export default Cards;