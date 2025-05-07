"use client";

import {
  useState,
  useEffect,
  useTransition,
  unstable_ViewTransition as ViewTransition,
} from "react";

import styles from "./page.module.css";

export default function Page() {
  const [isCompleted, setIsCompleted] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <div className={styles.root}>
      <nav>
        <button
          onClick={() => {
            startTransition(() => {
              setIsCompleted((current) => !current);
            });
          }}
        >
          Click me
        </button>
      </nav>
      <main>
        <ViewTransition default={styles.toggle} name="my-view-transition">
          {!isCompleted ? (
            <section className={styles.loading}>
              <span>Loading</span>
            </section>
          ) : (
            <section className={styles.hello}>
              <span>Hello</span>
            </section>
          )}
        </ViewTransition>
        hogehoge
      </main>
    </div>
  );
}
