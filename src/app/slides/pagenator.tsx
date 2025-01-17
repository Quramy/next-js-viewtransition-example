"use client";
import Link from "next/link";
import { useParams } from "next/navigation";

export function Pagenator() {
  const { page } = useParams() as { page: string };
  if (!page) return null;
  const pageNum = Number.parseInt(page, 10);
  if (Number.isNaN(pageNum)) return null;
  return (
    <nav>
      <Link href={`/slides/${pageNum - 1}`}>Prev</Link>
      <span>{pageNum}</span>
      <Link href={`/slides/${pageNum + 1}`}>Next</Link>
    </nav>
  );
}
