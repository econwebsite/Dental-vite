import React from 'react';
import { Tabs } from 'antd';
import Overview from '../OverviewComp/Overview';
import Specification from "../SpecificationComp/Specification"
import Document from "../DocumentComp/Documentpage"
import Software from "../SoftwareComp/Software"

import './ProductTabs.css';


const ProductTabs = () => {
    return (
        <div className="products-container my-4">
            {/* <h1 className="products-heading">TAbs</h1> */}
            <div className="Products-Tabs">
                <Tabs defaultActiveKey="1" className="custom-tabs" style={{alignItems:"center",width:"100%"}}>
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
