import React from "react";
import { Button, Htag } from "@/components";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">123</Htag>
      <Button appearance="primary" onClick={(): void => alert("I am working!")}>
        Button
      </Button>
      <Button appearance="ghost">Button</Button>
    </div>
  );
}
