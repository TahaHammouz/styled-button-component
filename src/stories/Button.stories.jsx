import React from "react";
import { storiesOf } from "@storybook/react";
import Button from "./Button";

storiesOf("Button", module)
  .add("Primary", () => (
    <Button variant="primary" color="primary">
      Primary Button
    </Button>
  ))
  .add("Secondary", () => (
    <Button variant="secondary" color="secondary">
      Secondary Button
    </Button>
  ))
  .add("Text", () => (
    <Button variant="text" color="tertiary">
      Text Button
    </Button>
  ))
  .add("Small", () => (
    <Button variant="primary" color="primary" size="small">
      Small Button
    </Button>
  ))
  .add("Large", () => (
    <Button variant="primary" color="primary" size="large">
      Large Button
    </Button>
  ));
