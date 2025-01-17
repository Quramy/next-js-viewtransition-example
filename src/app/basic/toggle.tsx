"use client";

import * as styles from "./page.module.css";

import { useState, useEffect, useTransition } from "react";

export function Toggle() {
  const [show, setShow] = useState(false);
  const [isPending, startTransition] = useTransition();
  useEffect(() => {
    startTransition(() => {
      setShow(true);
    });
  }, []);

  return (
    <div>
      <button
        onClick={() => {
          startTransition(() => {
            setShow((show) => !show);
          });
        }}
      >
        {show ? "A" : "B"}
      </button>
      {/* {isPending ? "pending": "no" } */}

      {show ? (
        <div className={styles.hello}>hello</div>
      ) : (
        <section className={styles.loading}>Loading</section>
      )}
    </div>
  );
}
