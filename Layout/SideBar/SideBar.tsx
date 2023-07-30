import React from "react";
import cn from "classnames";

import { SidebarProps } from "./Sidebar.props";
import styles from "./Sidebar.module.css";
import { Menu } from "../Menu/Menu";

import Logo from "../logo.svg";

export const Sidebar = ({ className, ...props }: SidebarProps): JSX.Element => {
  return (
    <div className={cn(className, styles.sideBar)} {...props}>
      <Logo className={styles.logo} />
      <div>Search</div>
      <Menu />
    </div>
  );
};
