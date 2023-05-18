import React, { useState } from "react";
import { SidebarLink, SidebarLabel, DropdownLink } from "./SubMenu.Styled";
import { useLocation } from "react-router-dom";

const SubMenu = ({ item, click = () => null, setSidebar }) => {
  const [subnav, setSubnav] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const isParentActive = () => {
    if (item.subNav) {
      return item.subNav.some((subItem) => isActive(subItem.path));
    }
    return false;
  };

  const showSubnav = () => {
    setSubnav(!subnav);
    setSidebar(true);
  };

  return (
    <>
      <SidebarLink
        to={item.path}
        className={
          isActive(item.path) || isParentActive() ? "active" : ""
        }
        onClick={() => {
          item.subNav ? showSubnav() : click();
        }}
      >
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav
            ? item.iconOpened
            : item.subNav
            ? item.iconClosed
            : null}
        </div>
      </SidebarLink>
      {item?.subNav?.map((subItem, index) => {
        if (subnav) {
          return (
            <DropdownLink
              to={subItem?.path}
              key={index}
              className={isActive(subItem?.path) ? "active" : ""}
              onClick={click}
            >
              {subItem?.icon}
              <SidebarLabel>{subItem?.title}</SidebarLabel>
            </DropdownLink>
          );
        } else {
          return null;
        }
      })}
    </>
  );
};

export default SubMenu;
