

import React from 'react';
import { Col } from 'react-bootstrap';
import { FaBell, FaUser, FaList,FaSignOutAlt } from 'react-icons/fa';


export const User_Header: React.FC = () => {
  return (
<>
   <Col xs={12} sm={6} md={6} lg={12}>
    <Col className="header textalignleft paddingleft0px">
      <Col xs={6} sm={10} md={10} lg={10} >
        <h5 className='pagemaintitle'><FaList/> To Do List</h5>
      </Col>
      <Col xs={6} sm={2} md={2} lg={2} >
      <Col className="header-icons textalignright">


        <Col className="dropdown">
          <button className="icon-btn colorddd "><FaBell/></button>
          <Col className="dropdown-content">
            <p>No new notifications</p>
          </Col>
        </Col>
       
        <Col className="dropdown">

          <button className="icon-btn colorddd  displayflex"><FaUser/> <label className='profilelabel'>Sheena</label></button>
          <Col className="dropdown-content">
            <p><FaUser/>  My Profile</p>
            <p><FaSignOutAlt/> Logout</p>
          </Col>
        </Col>
        <Col className="dropdown">
          <button className="icon-btn colorddd"><FaSignOutAlt/></button>
          
        </Col>
      </Col>

      </Col>
    </Col>
    </Col>

    </>
  );
};

