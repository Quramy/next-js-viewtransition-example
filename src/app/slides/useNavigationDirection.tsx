import { useEffect, useRef } from "react";
import { useParams } from "next/navigation";

export function useNavigationDirection() {
  const params = useParams();
  const previousPage = useRef("");
  useEffect(() => {
    previousPage.current = params.page as string;
  }, [params.page]);
  const currentNum = parseInt(params.page as string, 10);
  const prevNum = parseInt(previousPage.current, 10);
  if (Number.isNaN(currentNum) || Number.isNaN(prevNum)) return undefined;
  const delta = currentNum - prevNum;
  return delta > 0 ? "normal" : delta < 0 ? "reverse" : undefined;
}
