import {
  unstable_ViewTransition as ViewTransition,
  type ReactNode,
} from "react";

export default function layout({ children }: { readonly children: ReactNode }) {
  return (
    <ViewTransition name="slide-page">
      <main>{children}</main>
    </ViewTransition>
  );
}
