import React from "react";

import Tab from '@material/react-tab';
import TabBar from '@material/react-tab-bar';

import "../../styles/Nav.css";
import '@material/react-tab-bar/dist/tab-bar.css';
import '@material/react-tab-scroller/dist/tab-scroller.css';
import '@material/react-tab/dist/tab.css';
import '@material/react-tab-indicator/dist/tab-indicator.css';


const Nav = () => {


  return (
    <div className="nav-bar">
   <TabBar>
      <Tab>
        <span className='mdc-tab__text-label'>Home</span>
      </Tab>
      <Tab>
        <span className='mdc-tab__text-label'>Browse</span>
      </Tab>
      <Tab>
        <span className='mdc-tab__text-label'>Add</span>
      </Tab>
      </TabBar>
  </div>
  );
};

export default Nav;
