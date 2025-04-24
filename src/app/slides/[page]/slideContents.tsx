import type { ReactNode } from "react";

export const contents = [
  {
    title: "Agenda",
    body: (
      <ul>
        <li>About View Transtion API</li>
        <li>About React ViewTransition Component</li>
        <li>Using from Next.js</li>
      </ul>
    ),
  },
  {
    title: "About View Transtion API",
    body: "See MDN page!",
  },
  {
    title: "About React ViewTransition Component",
    body: (
      <ul>
        <li>Experimental feature</li>
        <li>Invoke document.startViewTransition</li>
        <li>
          Example usecases:
          <ol>
            <li>
              Smooth transition from Suspense fallback to resolved content.
            </li>
          </ol>
        </li>
        <li style={{ textDecoration: "line-through" }}>
          Detail:&nbsp;
          <a href="https://github.com/facebook/react/pull/31975">
            https://github.com/facebook/react/pull/31975
          </a>
        </li>
        <li>
          Detail:&nbsp;
          <a href="https://react.dev/reference/react/ViewTransition">
            https://react.dev/reference/react/ViewTransition
          </a>
        </li>
      </ul>
    ),
  },
  {
    title: "Using from Next.js",
    body: (
      <ul>
        <li>You can try ViewTransition Component</li>
        <li>Set experimental.viewTransition: true</li>
      </ul>
    ),
  },
] as const satisfies readonly {
  readonly title: string;
  readonly body: ReactNode;
}[];
