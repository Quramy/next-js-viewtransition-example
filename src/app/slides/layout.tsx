"use client";

import {
  unstable_ViewTransition as ViewTransition,
  useCallback,
  type ViewTransitionInstance,
  type ReactNode,
} from "react";

import * as styles from "./layout.module.css";
import { Pagenator } from "./pagenator";
import { useNavigationDirection } from "./useNavigationDirection";

export default function SlideLayout({
  children,
}: {
  readonly children: ReactNode;
}) {
  const direction = useNavigationDirection();
  const handleUpdate = useCallback(
    (instance: ViewTransitionInstance) => {
      const animationOptions = { duration: 500 };
      if (direction === "normal") {
        instance.new.animate(
          {
            transform: ["translateX(100%)", "none"],
          },
          animationOptions
        );
        instance.old.animate(
          {
            transform: ["none", "translateX(-100%)"],
          },
          animationOptions
        );
      }
      if (direction === "reverse") {
        instance.new.animate(
          {
            transform: ["translateX(-100%)", "none"],
          },
          animationOptions
        );
        instance.old.animate(
          {
            transform: ["none", "translateX(100%)"],
          },
          animationOptions
        );
      }
    },
    [direction]
  );
  return (
    <main className={styles.main}>
      <ViewTransition onUpdate={handleUpdate}>
        <section>{children}</section>
      </ViewTransition>
      <Pagenator />
    </main>
  );
}
