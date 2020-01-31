import React, { useState, useEffect } from 'react';
import FilterOptions from './FilterOptions';
import { Button } from 'antd';
import CourseDetails from './CourseDetails';
import { Router } from '@reach/router';

const Sidebar = (filterByName, location) => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    useEffect(() => {}, []);

    return (
        <div className="h-full border-r-0">
         
            <Router>
                <FilterOptions path="/" default />
                <CourseDetails path="/subject/:subjectName" />
            </Router>

        </div>
    );
};

export default Sidebar;
