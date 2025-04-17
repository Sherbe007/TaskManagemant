
import React,{useState} from 'react';
import { UserSidebar } from './UserSideBar';
import { User_Header } from './header';
import { Col,Row,Container } from 'react-bootstrap';

export const User_Headerlayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    
    const [isSidebarExpanded, setSidebarExpanded] = useState(true);
    const toggleSidebar = () => setSidebarExpanded(!isSidebarExpanded);
    return (
        <>
         
        
    <Row className="vh-100">
        <Col xs={1} sm={isSidebarExpanded ? 2 : 1} md={isSidebarExpanded ? 2 : 1} lg={isSidebarExpanded ? 2 : 1} id="mobileview">
            <UserSidebar isExpanded={isSidebarExpanded} toggleSidebar={toggleSidebar} />
        </Col>
      
        <Col xs={11} sm={isSidebarExpanded ? 10 : 11} md={isSidebarExpanded ? 10 : 11} lg={isSidebarExpanded ? 10 : 11} className="main-content-expand">
            <header className="w-64 bg-gray-100 border-r">
            <User_Header />
            </header>
            <Row className="">
                <main  className="flex-1 p-4">
                {children}
                </main>
            </Row>
      </Col>
    </Row>
    
        </>
    )
}