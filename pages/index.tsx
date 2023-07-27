import React, { useState } from "react";
import { Button, Htag, P, Rating, Tag } from "@/components";
import { withLayout } from "@/Layout/Layout";

function Home(): JSX.Element {
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
    </>
  );
}

export default withLayout(Home);
