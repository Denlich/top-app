import React from "react";
import { Button, Htag, P } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
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
    </div>
  );
}
