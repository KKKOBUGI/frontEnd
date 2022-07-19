
import moment from 'moment';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Layout from '../common/Layout.js';

import StopWatch from '../function/StopWatch.js';
import Accordion from "../function/Accordion.js";

const MainPage=()=>{
    const [date, setDate] = useState();

    return(
        <>
            <Layout>
            <div className="container">
                <div className="wrapper">
                    <Calendar 
                        onChange={setDate} 
                        value={date} 
                        formatDay={(locale, date) => date.toLocaleString("en", {day: "numeric"})}
                    />
                    <div className="today-wrap">
                        <p>{moment(date).format("YYYY년 MM월 DD일")}</p>
                        <StopWatch />
                    </div>
                </div>
                <div id="Accorion">
                    <Accordion/>
                </div>
                </div>
            </Layout>
        </>
    )
}

export default MainPage;