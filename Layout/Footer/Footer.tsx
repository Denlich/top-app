import React from "react";
import cn from "classnames";
import { format } from "date-fns";

import { FooterProps } from "./Footer.props";
import styles from "./Footer.module.css";
import Link from "next/link";

export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {
  return (
    <footer className={cn(className, styles.footer)} {...props}>
      <div>
        OwlTop © 2020 - {format(new Date(), "yyyy")} All rights reserved
      </div>
      <Link href="#" target="_blank">
        User agreement
      </Link>
      <Link href="#" target="_blank">
        Confidentiality policy
      </Link>
    </footer>
  );
};
