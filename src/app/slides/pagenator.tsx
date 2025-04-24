"use client";

import { useEffect, startTransition } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useParams } from "next/navigation";
import * as styles from "./pagenator.module.css";

// Workarount for @types/react
const addTransitionType = require("react").unstable_addTransitionType as (
  type: string,
) => unknown;

export function Pagenator({ min, max }: { min: number; max: number }) {
  const router = useRouter();
  const { page } = useParams() as { page: string };
  const pageNum = Number.parseInt(page, 10);

  useEffect(() => {
    const abortCtrl = new AbortController();
    window.addEventListener(
      "keydown",
      ({ code }) => {
        switch (code) {
          case "ArrowLeft": {
            if (pageNum <= min) return;
            return startTransition(() => {
              addTransitionType("navigation-back");
              router.push(`/slides/${pageNum - 1}`);
            });
          }
          case "ArrowRight": {
            if (pageNum > max) return;
            return startTransition(() => {
              addTransitionType("navigation-forward");
              router.push(`/slides/${pageNum + 1}`);
            });
          }
          default:
            break;
        }
      },
      { signal: abortCtrl.signal },
    );
    return () => abortCtrl.abort();
  }, [min, max, pageNum, router]);

  if (!page) return null;
  if (Number.isNaN(pageNum)) return null;

  return (
    <nav className={styles.module}>
      <Link
        aria-disabled={pageNum <= min}
        href={`/slides/${pageNum - 1}`}
        onNavigate={() => addTransitionType("navigation-back")}
      >
        Prev
      </Link>
      <span>{pageNum}</span>
      <Link
        aria-disabled={pageNum > max}
        href={`/slides/${pageNum + 1}`}
        onNavigate={() => addTransitionType("navigation-forward")}
      >
        Next
      </Link>
    </nav>
  );
}
