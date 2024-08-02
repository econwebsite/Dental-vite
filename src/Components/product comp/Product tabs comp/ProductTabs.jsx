import React from 'react';
import { Tabs } from 'antd';
import Overview from '../Overview comp/Overview';
import Specification from "../Specification comp/Specification"
import Document from "../Document comp/Documentpage"
import Software from "../Software comp/Software"

import './ProductTabs.css';


const ProductTabs = () => {
    return (
        <div className="products-container">
            {/* <h1 className="products-heading">TAbs</h1> */}
            <div className="Products-Tabs">
                <Tabs defaultActiveKey="1" className="custom-tabs" style={{alignItems:"center"}}>
                    <Tabs.TabPane tab="Overview" key="1">
                        <Overview />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Specification" key="2">
                        <Specification/>
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Document" key="3">
                        <Document />
                    </Tabs.TabPane>
                    <Tabs.TabPane tab="Software" key="4">
                        <Software />
                    </Tabs.TabPane>
                </Tabs>
            </div>
        </div>
    );
};

export default ProductTabs;
