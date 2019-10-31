import React from 'react';
import Header from '../../features/Header/Header';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../../features/Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <Header></Header>
      {children}
      <Footer></Footer>
    </PageContainer>
  </div>
);

export default MainLayout;
