import { Link } from "react-router-dom"
import Layout from "../common/Layout"
import Posts from "../function/Post"

const Board=()=>{
    return(
        <>
            <Layout>
                <div>게시판</div>
                <Link to="/write">
                    <button>작성</button>
                </Link>
                <Posts/>
            </Layout>
        </>
    )
}

export default Board