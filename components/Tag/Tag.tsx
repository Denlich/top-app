import React from "react";
import cn from "classnames";

import { TagProps } from "./Tag.props";
import styles from "./Tag.module.css";

export const Tag = ({
  children,
  size = "s",
  color = "ghost",
  href,
  className,
  ...props
}: TagProps): JSX.Element => {
  return (
    <p
      className={cn(className, styles.tag, styles[size], styles[color])}
      {...props}
    >
      {href ? <a href={href}>{children}</a> : <>{children}</>}
    </p>
  );
};
