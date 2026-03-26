import { ViewTransition, type ReactNode } from "react";
import * as styles from "./layout.module.css";
import { Pagenator } from "./pagenator";
import { size } from "./[page]/slideContents";

export default function SlideLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  return (
    <main className={styles.main}>
      <ViewTransition
        default={{
          default: "auto",
          "navigation-back": styles.slideRight,
          "navigation-forward": styles.slideLeft,
        }}
      >
        {children}
      </ViewTransition>
      <Pagenator min={1} max={size - 1} />
    </main>
  );
}
