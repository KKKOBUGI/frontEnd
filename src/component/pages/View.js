import React,{ useEffect,useState} from "react";
import { useParams } from "react-router";
import {useNavigate } from 'react-router-dom';
import Layout from '../common/Layout';
import axios from "axios";

const View = ()=>{
        let navigate = useNavigate()
        const {id}=useParams()
        const [content,setContent]=useState({
            userId:'',
            body:'',
            title:''
        })
    
        const onRemove=(id)=>{
            axios.delete(`http://localhost:4000/posts/${id}`)
            navigate('/board')
        }
   

    useEffect(()=>{
        const viewNow=async()=>{
            const response = await axios.get(`http://localhost:4000/posts/${id}`)
            setContent({
                userId:response.data.userId,
                body:response.data.body,
                title:response.data.title,}
            )
        }
        viewNow()
    },[id])

    const goRevise=()=>{
        navigate(`/board/${id}/re`)
    }
   
    return(
        <>
        <Layout>
            {content.title}
            {content.body}
            <button className = "submit-button" onClick={goRevise}>수정하러가기</button>
            <button onClick={()=>{onRemove(id)}}>삭제</button> 
        </Layout>
        </>
    )
}




export default View