import React, { useState } from "react";
import { GetStaticProps } from "next";
import axios from "axios";

import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/Layout/Layout";
import { MenuItem } from "@/interfaces/menu.interface";

function Home({ menu }: HomeProps): JSX.Element {
  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <Htag tag="h1">123</Htag>
      <Button appearance="primary" onClick={(): void => alert("I am working!")}>
        Button
      </Button>
      <Button appearance="ghost" arrow="right">
        Button
      </Button>
      <P size="s">Small</P>
      <P>Medium</P>
      <P size="l">Large</P>

      <Tag>Some small tag</Tag>
      <Tag size="m" color="green">
        Some medium tag
      </Tag>

      <Rating rating={rating} setRating={setRating} isEditable />

      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
    </>
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    process.env.NEXT_PUBLIC_DOMAIN + "/api/top-page/find",
    {
      firstCategory,
    }
  );

  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}
