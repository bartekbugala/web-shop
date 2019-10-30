import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import PageContainer from '../PageContainer/PageContainer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar></NavBar>
      {children}
    </PageContainer>
  </div>
);

export default MainLayout;
