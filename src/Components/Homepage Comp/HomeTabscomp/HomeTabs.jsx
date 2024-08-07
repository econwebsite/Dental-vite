import React from 'react';
import { Tabs } from 'antd';
import Blogspage from '../Blogs comp/Blogspage';
import Casestudy from '../Casestudies comp/Casestudy';

import './Hometabs.css';

const HomeTabs = () => {
    return (
        <div className="resource-container">
      <div className="mainContainer">
            <h1 className="resource-heading">Resources</h1>
            <div className="tabs-container">
                <Tabs defaultActiveKey="1" className="custom-tabs homePage" style={{alignItems:"center"}}>
                    <Tabs.TabPane tab="Blogs" key="1">
                        <Blogspage />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Case Studies" key="2">
                        <Casestudy/>
                    </Tabs.TabPane>
                    
                </Tabs>
            </div>
        </div>
      </div>
    );
};

export default HomeTabs;
