import { cn } from "@/lib/utils";
import { CSSProperties, FC } from "react";

type Props = {
  children: string;
  className?: string;
  style?: CSSProperties | undefined;
};

export const Title: FC<Props> = ({ children, className = "", style }) => {
  return (
    <h1
      className={cn(
        "text-5xl font-black text-stone-700 mb-5 dark:text-neutral-50",
        className
      )}
      style={style}
    >
      { children }
    </h1>
  );
};
