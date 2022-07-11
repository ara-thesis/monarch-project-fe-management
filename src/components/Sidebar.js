import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import SidebarData from './SidebarData' // Npm install --save styled-components
import { Link } from 'react-router-dom'

function Sidebar(props, { defaultActive }) {
  const { location } = props.history
  const lastActiveIndexString = localStorage.getItem('lastActiveIndex')
  const lastActiveIndex = Number(lastActiveIndexString)
  const [
    activeIndex,
    setActiveIndex
  ] = useState(lastActiveIndex || defaultActive)

  function changeActiveIndex(newIndex) {
    localStorage.setItem(
      'lastActiveIndex',
      newIndex
    )
    setActiveIndex(newIndex)
  }

  function getPath(path) {
    if (path.charAt(0) !== '/') {
      return `/${path}`
    }
    return path
  }

  useEffect(
    () => {
      const activeItem = SidebarData.findIndex((item) => getPath(item.route) === getPath(location.pathname))
      changeActiveIndex(activeItem)
    },
    [location]
  )

  return (
    <SidebarParent>
      <div style={{ position: 'fixed' }}>
        {
          SidebarData.map((item, index) => (
            <Link to={item.route}>
              <SidebarItem
                active={index === activeIndex}
                key={item.name}
              >
                <p>
                  {item.name}
                </p>
              </SidebarItem>
            </Link>
          ))
        }

      </div>

      <div className="behind-the-scenes" />

      <span className="block-example border-right border-dark" />
    </SidebarParent>
  )
}

export default Sidebar

const SidebarParent = styled.div`
  background: #C2C2C2;
  border: solid 1px black;
  padding-top: 20px;
  
  a {
    text-decoration: none;
  }
  
  & > div {
    width: 200px;
    height: 100vh;
  }
  
  .behind-the-scenes {
    width: 200px;
    
  }
`

const SidebarItem = styled.div`
  padding: 16px 24px;
  transition: all 0.25s ease-in-out;
  background: ${(props) => (props.active ? '#F5F5F5' : '')};
  margin: 4px 12px;
  border-radius: 4px;

  p {
    color: #151922;
    font-weight: bold;
    text-decoration: none;
  }
  
  &:hover {
    cursor:pointer;
    background-color: #F7ADAD;
  }
  
  &:hover:not(:first-child) {
    background: #c34a36;
  }

  &:clicked
`
