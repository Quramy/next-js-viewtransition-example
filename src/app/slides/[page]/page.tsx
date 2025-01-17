import Link from "next/link";
import * as z from "zod";
import * as styles from "./page.module.css";

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
  return (
    <section className={styles.module}>
      <header>
        Page {pageNum}
      </header>
      <div>
      </div>
      <nav>
        <Link href={`/slides/${pageNum - 1}`}>Prev</Link>
        <span>{pageNum}</span>
        <Link href={`/slides/${pageNum + 1}`}>Next</Link>
      </nav>
    </section>
  );
}
