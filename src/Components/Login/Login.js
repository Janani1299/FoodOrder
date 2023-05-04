import React, {Fragment, useState} from "react";
import frontImage from "../../assets/mealsimage.jpg";
import classes from './Login.module.css';
import Seat from "./Seat";

import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate()
    

    // const loginChangeHandler = (event) => {
    //     if(event.target.value.trim()) {
    //         setIsValid(false);
    //     }
    //     count
       
        

    
    return (
        <Fragment>
            
            <div className={classes.bg} style={{ 
                backgroundImage:`url(${frontImage})`,
                width:'110%',
                // minHeight:'800px',
                backgroundSize:'cover', 
                backgroundRepeat:'no-repeat',
                overflow:'hidden',
                objectFit:'cover',
                position:'fixed',
                height:'100%',
            

                }}>
                <div className={classes.heading}>
                    <h1>Welcome to our JJ Restaurant</h1>
                </div>
                <div className={classes.content}>
                    <div className={classes.quotes}>
                        <p><span className={classes.text}>We are always here to serve you.</span><span className={classes.text}>Life is dull without good food</span> </p>

                    </div>
                    <button className={classes.button} onClick={() => navigate('/seat')}>Ready For taste our Food</button>

                   

                </div>
                
                {/* <Seat/> */}
           </div>
        </Fragment>
    )
};

export default Login;