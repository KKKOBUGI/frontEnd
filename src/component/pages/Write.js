import { Link } from "react-router-dom"

const Write = ()=>{
    return(
    <>
    <div>글쓰기</div>
    <Link to="/">메인가기</Link>
    <Link to="/board">게시판가기</Link>
    </>)
}

export default Write