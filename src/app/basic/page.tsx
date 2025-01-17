import { unstable_ViewTransition as ViewTransition } from "react";
import { Toggle } from "./toggle";

export default function BasicPage() {
  return (
    <ViewTransition>
      <Toggle />
    </ViewTransition>
  );
}
