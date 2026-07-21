import type { ReactNode } from "react";

interface BracketFrameProps {
  children: ReactNode;
}

export default function BracketFrame({ children }: BracketFrameProps) {
  return (
    <div className="bracket-frame">
      <span className="corner tl" />
      <span className="corner tr" />
      <span className="corner bl" />
      <span className="corner br" />
      {children}
    </div>
  );
}
