import { Link } from "react-router-dom";

import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

import StopWatch from './StopWatch.js';
import Accordion from "./Accordion.js";

const MainPage=()=>{
    const [date, setDate] = useState();

    return(
        <>
            <div className="container">
                <div className="wrapper">
                    <Calendar 
                        onChange={setDate} 
                        value={date} 
                        formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}/>

                    <div className="today-wrap">
                        <p>{moment(date).format("YYYY년 MM월 DD일")}</p>
                        <StopWatch />
                    </div>
                </div>

                <div id="Accorion">
                    <Accordion/>
                </div>
                
                <div className="btm-menu">
                    <div className="go-write"><Link to="/board">게시판</Link></div>
                    <div className="go-main"><Link to="/">메인</Link></div>
                    <div className="go-user"><Link to="/">내 정보</Link></div>
                </div>
            </div>
        </>
    )
}

export default MainPage;