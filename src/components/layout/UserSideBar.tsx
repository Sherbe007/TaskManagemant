import React, { useState } from "react";
import {  FaHome, FaChartBar} from "react-icons/fa";
import { Col, Nav, Navbar } from "react-bootstrap";
import logo from "../../assets/img/logo.png";


interface usersidebarProps {
  isExpanded: boolean;
  toggleSidebar: () => void;
}

export const UserSidebar: React.FC<usersidebarProps> = ({ isExpanded, toggleSidebar }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [, setOpenMenu] = useState<string | null>(null); // Track the currently open menu

  const toggleMenu = (menu: string) => {
    setOpenMenu((prev) => (prev === menu ? null : menu)); // Close if already open, else open
  };

  const menuItems = [
    { icon: <FaHome />, label: "Dashboard", path: "#" },
    {
      icon: <FaChartBar />,
      label: 'All To Do',
     
    },
  
   

  ];


   // Function to filter menu items based on the search query
   const filteredMenuItems = menuItems.map(item => {
  
    return item;
  }).filter(item => 
    item.label.toLowerCase().includes(searchQuery.toLowerCase())
    
  );

  




  return (
    <Col xs={isExpanded ? 12 : 1} sm={isExpanded ? 3 : 1} md={isExpanded ? 3 : 1} className={`usersidebar ${isExpanded ? "expanded" : "collapsed"}`} >
   
      <Navbar className="usersidebar-header justify-content-center align-items-center">
        <Navbar.Brand href="#" className="">
   
          {isExpanded ? 
          (<><label className="colorddd"><img src={logo} alt="Logo" className="usersidebar-logo" width={'20px'}/>Todo</label></>):
          (<><label className="togglelogo-expnd"><img src={logo} alt="Logo" width={'20px'} className="usersidebar-logobig" /></label></>) 
        }
  {/* usersidebar Toggle Button */}
     <button onClick={toggleSidebar} className={isExpanded ? "  toggle-btn textalignright " :" togglebtn-expnd toggle-btn textalignright " }>
     <label className="togglebtn-label"> {isExpanded ? "<" : ">"}</label>
      </button>
        </Navbar.Brand>
      </Navbar>

    
    
      {/* Search Bar */}
      {isExpanded && (
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="form-control usersidebarsearch-input"
          />
        </div>
      )}

      {/* Navigation Menu */}
      <Nav className={!isExpanded ? 'justify-content-center align-items-center flex-column' : 'flex-column'  }  >
        {filteredMenuItems.map((item, index) => (
          <div key={index} >
            {/* Main Menu Item */}
            <div className="menu-item" onClick={() => toggleMenu(item.label)}>
            <span className={!isExpanded ? 'hat-big-icon' : 'hat-small-icon'}>{item.icon} </span>  {isExpanded && <span className="usersidebar-menu-text">{item.label}</span>}
             
            </div>

           
          </div>
        ))}
      </Nav>

    
    </Col>
  );
};
