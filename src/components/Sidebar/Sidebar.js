import React, { useState } from 'react';
import FilterOptions from './FilterOptions';
import { Button } from 'antd';
import CourseDetails from './CourseDetails';

const Sidebar = (filterByName) => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    return (
        <div className="h-full border-r-0">
            <Button onClick={() => setToggleSidebar(!toggleSidebar)}>
                Switch
            </Button>
            {toggleSidebar ? (
                <FilterOptions />
            ) : (
                <CourseDetails />
            )}
        </div>
    );
};

export default Sidebar;
