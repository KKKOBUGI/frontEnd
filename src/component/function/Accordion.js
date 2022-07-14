import React,{useState} from 'react';
import {AccordionWrapper, AccordionItem} from 'custom-react-accordion';
import 'custom-react-accordion/dist/Accordion.css';

const title =[
    {
        "title": "운동1"
    },
    {
        "title": "운동2"
    }
]

const contentList = [
    {
        seq: 0,
        name: "운동1-1",
        count: "100",
        img: '1'
    },
    {
        seq: 0,
        name: "운동1-2",
        count: "200",
        img: '2'
    },
    {
        seq: 1,
        name: "운동1-3",
        count: "200",
        img: '3'
    }
]

const Description = (props) => { 
   
    const [count , setCount] = useState(0);

    const handleInput = (e) => {
        console.log(count)
        setCount(e.target.value);
    }

    const Increase = (e) => {
        setCount(count + 1);
    }

    const Decrease = (e) => {
        setCount (Number(count) - 1)
    }

    let content=contentList.map((item,index)=>
        <div key = {index}>
            <div className="text-wrap">
                <img src={item.img} alt='img'></img>
                <input 
                    name="exName"
                    placeholder="운동 이름"
                    defaultValue = {item.name ? item.name : '운동 이름'}
                    className="ex-name"/>
            </div>
            <div className="count-wrap">
                <button type="button" onClick={Decrease}>-</button>
                <input 
                    placeholder="0"
                    value = {count}
                    defaultValue = {item.count ? item.count : count}
                    className="ex-count"
                    onChange={handleInput}/>
                <p>{count}</p>
                <button type="button" onClick={Increase}>+</button>
            </div>
        </div>
    )
    return(
        <div className="content">
            {content}
        </div>
    )
}

const Accordion=()=>{
    return(
        <AccordionWrapper>
            {title.map((item, index) => (
                <AccordionItem 
                    key={index} 
                    index={index} 
                    title={item.title}
                    description={<Description seq={index}/>}>
                </AccordionItem>
            ))}
        </AccordionWrapper>
    )
}

export default Accordion;