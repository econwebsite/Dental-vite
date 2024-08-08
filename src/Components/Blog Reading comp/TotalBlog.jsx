import React from 'react';

import BlogArtical from "./BlogArtical"
import Threeimportant from './Threeimportant-Blogs/Threeimportant';
// import AutofocusBlog from "./Autofocus-Blogs/AutofocusBlog"

const TotalProduct = () => {
    return (
        <div>
            {/* <AutofocusBlog/> */}
            <Threeimportant/>
            <BlogArtical/>
        </div>
    );
}

export default TotalProduct;
