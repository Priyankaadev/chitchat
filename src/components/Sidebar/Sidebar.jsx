import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { GoPlus } from "react-icons/go";
import { CiChat1 } from "react-icons/ci";
import './Sidebar.css'

const Sidebar = () => {

  const [extend, setExtend] = useState(false);



  return (
    <div className="sidebar">
      <GiHamburgerMenu id="ham" onClick={()=>{
        setExtend(prev=>!prev)
     
}} />
      <div className="newchat">
        <GoPlus /> 
       {extend && <p>New Chat</p>}
      </div>
      <div className="recent">
        <CiChat1 />
       {extend && <p>Who are you</p>}
      </div>
    </div>
  );
};

export default Sidebar;
