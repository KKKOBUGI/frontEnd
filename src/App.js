import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import {Routes, Route } from 'react-router-dom';

import MainPage from './component/pages/MainPage';
import Board from './component/pages/Board';
import Write from './component/pages/Write';

const GlobalStyles = createGlobalStyle`
    ${reset};
`;

function App() {
  

  return (
    <>
      <GlobalStyles/>
        <Routes>
          <Route path="/" element={<MainPage/>}></Route>
          <Route path="/board" element={<Board/>}></Route>
          <Route path="/write" element={<Write/>}></Route>
        </Routes>
    </>

    
  );
}

export default App;
