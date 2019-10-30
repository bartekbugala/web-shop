import React from 'react';
import NavBar from '../../features/NavBar/NavBar';
import PageContainer from '../PageContainer/PageContainer';

const MainLayout = ({ children }) => (
  <div>
    <PageContainer>
      <NavBar>{children}</NavBar>
    </PageContainer>
  </div>
);

export default MainLayout;
