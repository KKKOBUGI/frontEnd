import { Link } from "react-router-dom"

const MainPage=()=>{
    return(
        <>
            <div>메인페이지</div>
            <Link to="/board">게시판가기</Link>
            <Link to="/write">글쓰기가기</Link>
        </>
    )
}

export default MainPage