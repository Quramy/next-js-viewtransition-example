"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import * as styles from "./pagenator.module.css";

// Workarount for @types/react
const addTransitionType = require("react").unstable_addTransitionType as (
  type: string,
) => unknown;

export function Pagenator() {
  const { page } = useParams() as { page: string };
  if (!page) return null;
  const pageNum = Number.parseInt(page, 10);
  if (Number.isNaN(pageNum)) return null;
  return (
    <nav className={styles.module}>
      <Link
        href={`/slides/${pageNum - 1}`}
        onNavigate={() => addTransitionType("navigation-back")}
      >
        Prev
      </Link>
      <span>{pageNum}</span>
      <Link
        href={`/slides/${pageNum + 1}`}
        onNavigate={() => addTransitionType("navigation-forward")}
      >
        Next
      </Link>
    </nav>
  );
}
