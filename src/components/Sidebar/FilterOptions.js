import React, { useState } from 'react';
import { Menu, Icon, Button, Input } from 'antd';
import { filterByName } from '../../stores/subjects';

const { SubMenu } = Menu;
const FilterOptions = () => {
    const [searchText, setSearchText] = useState('');
    const handleSearchByname = e => {
        setSearchText(e.target.value);

        filterByName(e.target.value.trim().toLowerCase());
    };
    const clearSearch = () => {
        setSearchText('');
        filterByName('');
    };
    return (
        <>
            <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                defaultOpenKeys={['sub1']}
            >
                <div className="px-6 py-4  mt-5">
                    <div>
                        <div className="flex justify-between content-center border-gray-600 tracking-wide p-0">
                            <h3 className="font-semibold text-gray-700 text-base">
                                What do you want to study?
                            </h3>
                            <div
                                className="font-normal text-blue-500"
                                onClick={clearSearch}
                            >
                                <a href="#">Clear filters </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-6 py-4">
                    <div>
                        <Input
                            placeholder="Search by name"
                            value={searchText}
                            onChange={handleSearchByname}
                        />
                    </div>
                </div>
        
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="user" />
                            subnav 1
                        </span>
                    }
                ></SubMenu>

                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <Icon type="laptop" />
                            subnav 2
                        </span>
                    }
                >
                    <Menu.Item key="5">option3</Menu.Item>
                    <Menu.Item key="6">option6</Menu.Item>
                    <Menu.Item key="7">option7</Menu.Item>
                    <Menu.Item key="8">option8</Menu.Item>
                </SubMenu>
                <SubMenu
                    key="sub3"
                    title={
                        <span>
                            <Icon type="notification" />
                            subnav 3
                        </span>
                    }
                >
                    <Menu.Item key="9">option9</Menu.Item>
                    <Menu.Item key="10">option10</Menu.Item>
                    <Menu.Item key="11">option11</Menu.Item>
                    <Menu.Item key="12">option12</Menu.Item>
                </SubMenu>
            </Menu>
        </>
    );
};

export default FilterOptions;
