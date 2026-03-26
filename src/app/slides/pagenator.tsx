"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";
import styles from "./pagenator.module.css";

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
            router.push(`/slides/${pageNum - 1}`, {
              transitionTypes: ["navigation-back"],
            });
            return;
          }
          case "ArrowRight": {
            if (pageNum > max) return;
            router.push(`/slides/${pageNum + 1}`, {
              transitionTypes: ["navigation-forward"],
            });
            return;
          }
          default:
            return;
        }
      },
      { signal: abortCtrl.signal }
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
        transitionTypes={["navigation-back"]}
      >
        Prev
      </Link>
      <span>{pageNum}</span>
      <Link
        aria-disabled={pageNum > max}
        href={`/slides/${pageNum + 1}`}
        transitionTypes={["navigation-forward"]}
      >
        Next
      </Link>
    </nav>
  );
}
