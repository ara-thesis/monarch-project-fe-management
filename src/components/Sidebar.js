import React, {useEffect, useState} from "react";
import styled from 'styled-components'
import SidebarData from "./SidebarData"; //npm install --save styled-components
import {Link} from "react-router-dom";

function Sidebar(props, {defaultActive,}) {
    const location = props.history.location;
    const lastActiveIndexString = localStorage.getItem("lastActiveIndex");
    const lastActiveIndex = Number(lastActiveIndexString);
    const [activeIndex, setActiveIndex] = useState(lastActiveIndex || defaultActive);

    function changeActiveIndex(newIndex) {
        localStorage.setItem("lastActiveIndex", newIndex)
        setActiveIndex(newIndex)
    }

    function getPath(path) {
        if (path.charAt(0) !== "/") {
            return  "/" + path;
        }
        return path;
    }

    useEffect(()=> {
        const activeItem = SidebarData.findIndex(item=> getPath(item.route) === getPath(location.pathname))
        changeActiveIndex(activeItem);
    }, [location])

    return (
        <>
            <SidebarParent>
                <div style={{position: 'fixed'  }}>
                    {
                        SidebarData.map((item, index)=> {
                            return (
                                <Link to={item.route}>
                                    <SidebarItem key={item.name}
                                                 active={index === activeIndex}
                                    >
                                        <p>{item.name}</p>
                                    </SidebarItem>
                                    
                                </Link>
                                
                            );
                        })
                    }

                </div>
                <div className="width-sidebar"/>

            </SidebarParent>
        </>
    );
}

export default Sidebar;

const SidebarParent = styled.div`
  background: #F4FDFF;
  border-right: 1px solid;
  border-radius: 0;
  border-color: #000000;
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 200px;
    height: 100vh;
  }
  
  .width-sidebar {
    width: 200px;
    
  }
`;

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${props => props.active ? "#F4FDFF" : ""};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: #151922;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }
`;
