import React from "react";
import image from '../scholarsiportal.png';
import './FirstPage.css';



const FirstPage=(props)=>{
    const clickHandler=()=>{
        props.shouldRender();
    }

    return <React.Fragment>
        <div className="bgimg">
            <img src={image} alt='' />
        </div>
        <div className="footer">
            <button className="btn" onClick={clickHandler}>Enter Site!</button>
        </div>
    </React.Fragment>
};

export default FirstPage;