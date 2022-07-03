import { Link } from "react-router-dom"
const Board=()=>{
    return(
        <>
            <div>게시판</div>
            <Link to="/">메인가기</Link>
            <Link to="/write">글쓰기가기</Link>
        </>
    )
}

export default Board