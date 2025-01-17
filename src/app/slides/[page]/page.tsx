import Link from "next/link";
import * as z from "zod";
import { notFound } from "next/navigation";
import * as styles from "./page.module.css";
import { contents } from "./slideContents";

const paramsSchema = z.object({
  page: z.string(),
});

export default async function SlidePage({
  params,
}: {
  params: Promise<unknown>;
}) {
  const { page } = paramsSchema.parse(await params);
  const pageNum = parseInt(page, 10);
  const data = contents[pageNum - 1];
  if (!data) return notFound();
  return (
    <section className={styles.module}>
      <header>{data.title}</header>
      <div className={styles.content}>{data.body}</div>
    </section>
  );
}
