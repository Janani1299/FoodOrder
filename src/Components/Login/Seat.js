import React from "react";
import { useNavigate } from "react-router-dom";
import classes from "./Seat.module.css";

import SeatBooking from "./SeatBooking";

const Seat =() => {
    
   
    const navigate = useNavigate();

    return (
        <div>
            <SeatBooking/>
             <button className={classes.button} onClick={()=> navigate(-1)}>Go back</button>
        </div>
    )
}

export default Seat;