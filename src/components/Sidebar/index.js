import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} >
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/mac'>Mac</SidebarLink>
        <SidebarLink to='/iphone12'>iPhone</SidebarLink>
        <SidebarLink to='/ipad'>iPad</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/mciphn'>Buy Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
