import React from 'react';
import { Layout, Menu } from 'antd';
import HeaderContent from './Header/HeaderContent';
import Sidebar from './Sidebar/Sidebar';
import FooterContent from './Footer/FooterContent';
import Courses from './Content/Courses';
import CourseDetails from './Content/CourseDetails';
import { Router, Location } from '@reach/router';

const { Header, Footer, Sider, Content } = Layout;
const AppLayout = () => {
    return (
        <Layout className="max-h-screen min-h-screen">
            <Header className="header">
                <HeaderContent />
            </Header>
            <Layout>
                <Sider width={340} className="bg-white">
                    <Sidebar/>
                </Sider>

                <Layout style={{ background: '#F8F9FA' }}>
                    <Content className="bg-gray-200 m-0 p-6 overflow-y-scroll">
                        <Router>
                            <Courses path="/" default />
                            <CourseDetails path="/subject/:subjectName" />
                        </Router>
                    </Content>
                    <Footer className="h-16 m-0 p-0 pl-4 flex items-center">
                        <FooterContent />
                    </Footer>
                </Layout>
            </Layout>
        </Layout>
    );
};

export default AppLayout;
