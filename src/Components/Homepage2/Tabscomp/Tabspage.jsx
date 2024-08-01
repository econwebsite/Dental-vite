import React from 'react';
import { Tabs } from 'antd';
import Secblog from '../2.homeBlog page/Secblog';
import Secasestudy from '../pagecasestudy/Secasestudy';
import Releatedvideo from "../Releated video comp/Releatedvideo"

import './Tabspage.css';

const Tabspage = () => {
    return (
        <div className="resource-container">
            <h1 className="resource-heading">Resources</h1>
            <div className="tabs-container">
                <Tabs defaultActiveKey="1" className="custom-tabs" style={{alignItems:"center"}}>
                    <Tabs.TabPane tab="Blogs" key="1">
                        <Secblog />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Case Studies" key="2">
                        <Secasestudy />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Releated videos" key="3">
                        <Releatedvideo />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default Tabspage;
