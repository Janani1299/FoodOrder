import React, {useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useNavigate } from "react-router-dom";
import Header from "../Layout/Header";
import classes from "./Seat.module.css";

const SeatBooking = (props) => {
    const data = [
        {
            id:"1",
            seatName:"A"
        }, 
        {
            id:"2",
            seatName:"B"
        }, 
        {
            id:"3",
            seatName:"C"
        },
        {
            id:"4",
            seatName:"D"
        }, 
        {
            id:"5",
            seatName:"E"
        },
        {
            id:  "6",
            seatName:"F"
        },
        { 
            id:"7",
            seatName:"G"
         },
         { 
            id:"8",
            seatName:"H"
         },
         { 
            id:"9",
            seatName:"I"
         },
         { 
            id:"10",
            seatName:"J"
         },
         { 
            id:"11",
            seatName:"K"
         },
         { 
            id:"12",
            seatName:"L"
         },
         { 
            id:"13",
            seatName:"M"
         },
         { 
            id:"14",
            seatName:"N"
         },
         { 
            id:"15",
            seatName:"O"
         },
         { 
            id:"16",
            seatName:"P"
         },
         { 
            id:"17",
            seatName:"Q"
         },
         { 
            id:"17",
            seatName:"R"
         },
         { 
            id:"19",
            seatName:"S"
         },
         { 
            id:"20",
            seatName:"T"
         },
        ];
    const [selectSeat, setSelectSeat] =useState(false);
    
    const[reserved, setReserved] = useState (-1);
    // const [valid, setValid] = useState(false);

    // const buttonHandler = (selectSeat) => {
        
        // if(selectSeat==false) alert("select atleast one table")
        
        const checkHandler = (event) => {
            event.preventDefault();
            
            console.log('clicked');
            
            
        }
        

   
            const navigate = useNavigate();

        
       


    
    return (
        <div >
            
            <Container className={classes.container}>
                <h1>Select a Table</h1>
                <div className={classes.design} >
                    <Row>
                        {data.map((row, id) => (
                        <Col md={2} key={data.id}>
                    
                        <div key={data.id} className={reserved === id ? classes.changeColor : classes.user } onClick = {() => {setSelectSeat(!selectSeat) ; setReserved(id)} }  >
                            <p className={classes.text}  >{row.seatName}</p>
                            </div> 
                        </Col>
                    
                    ))}
                    </Row>
                </div>
                
                <button type="button" className={classes.button} onClick = {() => selectSeat ? navigate('/header') : alert('please select a table')}>Confirm Booking</button>
                 {/* {selectSeat ? navigate('/header') : <p>('Please select a table') </p>} */}
                     
                 
            </Container>
        </div>

    )
}

export default SeatBooking;