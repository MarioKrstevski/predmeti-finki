import React from 'react';

import { Menu, Icon, Button } from 'antd';

const { SubMenu } = Menu;
const CourseDetails = (subjectName) => {
    console.log('SN', subjectName)
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="computer" />
                           Details Course
                        </span>
                    }
                >
                    <Button>Test</Button>
                </SubMenu>
            </Menu>
        </>
    );
};

export default CourseDetails;
