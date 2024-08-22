import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './utilities/Header';
import HomePage from './mainPages/HomePage';
import MatchGame from './matchGame/MatchGame';
import DisplayPage from './mainPages/DisplayPage';
import DisplayList from './mainPages/DisplayList';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
import DetailPage from './mainPages/detailPage/DetailPage';
import AvengersTheme from '../themes/avengers';
import XmenTheme from '../themes/xmen';
const GlobalStyle = createGlobalStyle`
  *{
  margin: 0;
  padding: 0;
}

body {
  background-color: ${({ theme }) => theme.background};
  font-family: 'Permanent Marker', cursive;
}
`;

const MainStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  justify-content: center;
  height: 100vh;
`;

const App = () => {
  const [content, setContent] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState('');
  const [limit, setLimit] = useState(8);
  const [page, setPage] = useState(0);
  const [params, setParams] = useState({
    type: '',
    search: '',
  });
  const [contentType, setContentType] = useState('');

  const [theme, setTheme] = useState(AvengersTheme);
  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme(prev =>
            prev.id === 'avengers' ? XmenTheme : AvengersTheme
          );
        },
      }}
    >
      <MainStyled>
        <GlobalStyle />
        <Router>
          <Header />
         <Routes>
          
       
            <Route exact path='/' element={ <HomePage />} />
            <Route path='/characters/:nameId' element={<DetailPage />}/>
              
            <Route path='/characters' element={              <DisplayPage
                content={content}
                setContent={setContent}
                loading={loading}
                setLoading={setLoading}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                params={params}
                setParams={setParams}
                setContentType={setContentType}
              />} />

         
            <Route path='/comics/:nameId' element={  <DetailPage />}/>
            
        
            <Route path='/comics' element={              <DisplayPage
                content={content}
                setContent={setContent}
                loading={loading}
                setLoading={setLoading}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                params={params}
                setParams={setParams}
                setContentType={setContentType}
              />}/>
            <Route path='/events/:nameId' element={<DetailPage/>}/>
       
    
            <Route path='/events' element={              <DisplayPage
                content={content}
                setContent={setContent}
                loading={loading}
                setLoading={setLoading}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                params={params}
                setParams={setParams}
                setContentType={setContentType}
              />}/>

        
            <Route path='/series/:nameId' element={<DetailPage/>} />
            <Route path='/series' element={<DisplayPage
                content={content}
                setContent={setContent}
                loading={loading}
                setLoading={setLoading}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                params={params}
                setParams={setParams}
                setContentType={setContentType}
              />} />

            
            <Route path='/creators/:nameId' element={  <DetailPage />}/>
          
            <Route path='/creators' element={              <DisplayList
                content={content}
                setContent={setContent}
                loading={loading}
                setLoading={setLoading}
                order={order}
                setOrder={setOrder}
                limit={limit}
                setLimit={setLimit}
                page={page}
                setPage={setPage}
                params={params}
                setParams={setParams}
                contentType={contentType}
                setContentType={setContentType}
              />} />
            <Route path='/matchgame/:nameId' element={ <DetailPage />} />
            <Route path='/matchgame' element={             <MatchGame
                setContent={setContent}
                content={content}
                params={params}
              />}/>
 

            <Route path='*' element={<h1>Page Does not exist</h1>}/> 
              
       
            </Routes>
        </Router>
      </MainStyled>
    </ThemeProvider>
  );
};

export default App;
