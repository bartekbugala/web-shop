import React from 'react';
import Header from '../Header/Header';
import PageContainer from '../PageContainer/PageContainer';
import Footer from '../Footer/Footer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <Header />
      <main>{children}</main>
      <Footer />
    </PageContainer>
  </div>
);

export default MainLayout;
