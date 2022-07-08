import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import Pagination from "./Pagination";

function Posts() {
  const [posts, setPosts] = useState([]);
  const limit = 10;
  const [page, setPage] = useState(1);
  const offset = (page - 1) * limit;

  const fetchAndSetPosts=async()=>{
    try{
        const response = await axios.get("http://localhost:4000/posts")
        setPosts(response.data)
        console.log(response.data.length)
    }
    catch(error){
        console.error(error)
    }
  }

  useEffect(()=>{
    fetchAndSetPosts()
  }, []);

  return (
    <Layout>
      <main>
        {posts.slice(offset, offset + limit).map(({ id, title, body }) => (
          <article key={id}>
            <h3>
              {id}. {title}
            </h3>
            <p>{body}</p>
          </article>
        ))}
      </main>
      <footer>
        <Pagination
          total={posts.length}
          limit={limit}
          
          page={page}
          setPage={setPage}
        />
      </footer>
    </Layout>
  );
}

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 800px;
  margin: 0 auto;
`;

export default Posts;