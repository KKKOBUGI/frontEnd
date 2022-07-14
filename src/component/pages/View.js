import React,{useEffect,useState} from "react";
import { useParams } from "react-router";
import {useNavigate } from 'react-router-dom';
import Layout from "../common/Layout";
import axios from "axios";

const View = ()=>{
    let navigate = useNavigate()
    const {id}=useParams()
    const [content,setContent]=useState({
        title:'',
        body:'',
    })

    const onRemove=(id)=>{
        axios.delete(`http://localhost:4000/posts/${id}`)
        navigate('/board')
      }

    const ViewPost=async()=>{
        try{
            const response = await axios.get(`http://localhost:4000/posts/${id}`)
            setContent({
                title:response.data.title,
                body:response.data.body
            })
        }
        catch(error){
            console.error(error)
        }
    }

    useEffect(()=>{
        ViewPost()
    },)
   
    return(
        <>
            <Layout>
            <h2>
                제목:{content.title}
            </h2>
            내용:{content.body}
            <div>
              <button>수정</button>
              <button onClick={()=>{onRemove(id)}}>삭제</button>
            </div>    
            </Layout>
        </>
    )
}


export default View