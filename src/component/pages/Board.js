import { Link } from "react-router-dom"
import Posts from "../common/Post"

const Board=()=>{
    return(
        <>
            <div>게시판</div>
            <Link to="/">메인가기</Link>
            <Link to="/write">
                <button>작성</button>
            </Link>
            <Posts></Posts>
        </>
    )
}

export default Board