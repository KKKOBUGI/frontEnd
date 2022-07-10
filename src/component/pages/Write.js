<<<<<<< HEAD
import { Link } from "react-router-dom";

const Write = ()=>{
    return(
    <>
    <div>글쓰기</div>
    <Link to="/">메인가기</Link>
    <Link to="/board">게시판가기</Link>
    </>)
=======
import React,{useState,useEffect} from 'react';
import { Link,useNavigate } from 'react-router-dom';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import axios from 'axios';
import styled from 'styled-components'


const Write = ({history})=>{
    let navigate = useNavigate()
    const [content,setContent]=useState({
      userId:null,
      id:null,
      title:'',
      body:''
    })
    const [len, setLen] = useState(0);

    const getValue=(e)=>{
      const {name,value}=e.target
      setContent({
        ...content,
        [name]:value
      })
    }

    const countLen=async()=>{
      try{
          const response = await axios.get("http://localhost:4000/posts")
          setLen(response.data.length)
      }
      catch(error){
          console.error(error)
      }
    }

    const uploadPost=()=>{
      axios.post("http://localhost:4000/posts",{
        userId :len+1,
        id:len+1,
        body:content.body.replace(/(<([^>]+)>)/ig,""),
        title:content.title
      }
      )
      setLen(len=>len+=1)
      navigate('/board')
    }

    useEffect(()=>{
      countLen()
    }, []);

    return(<>
        <Link to="/">메인가기</Link>
        <Link to="/board">게시판가기</Link>
        <FormWrapper>
            <input className = "title-input" type='text' placeholder='제목' onChange={getValue} name='title'/>
            <CKEditor 
                editor={ ClassicEditor }
                data=""
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={(event, editor) => {
                    const data = editor.getData();
                    console.log({ event, editor, data });
                    setContent({
                    ...content,
                    body: data
                    })
                }}
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
            <button className = "submit-button" onClick={uploadPost}>글쓰기</button>
        </FormWrapper>
</>)
>>>>>>> ade6125dc1cbc07155c3a3b79a92f6800ea1e699
}

const FormWrapper=styled.div`
    width: 60%;
    margin: 0 auto;
  
  
  .title-input {
    width: 100%;
    height: 40px;
    margin: 10px 0px;
  }
  
  .submit-button {
    width: 200px;
    height: 50px;
    font-size: 20px;
    padding: 20px;
    border: none;
    background: indianred;
    border-radius: 5px;
    margin-top: 40px;
    vertical-align: middle;
  }
  
  .ck.ck-editor__editable:not(.ck-editor__nested-editable) {
    min-height: 500px;
  }
`

export default Write