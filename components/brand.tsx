import type { SVGProps } from "react";

export function BrandMark(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 104 104" fill="none" aria-hidden="true" {...props}>
      <path d="M8 48V40C8 33 13 29 20 25L65 4C71 1 77 2 82 5L96 13C102 17 102 23 96 27L56 47C44 53 34 54 24 49L17 45C13 43 10 45 8 48Z" fill="currentColor" />
      <path d="M8 56V64C8 71 13 75 20 79L65 100C71 103 77 102 82 99L96 91C102 87 102 81 96 77L56 57C44 51 34 50 24 55L17 59C13 61 10 59 8 56Z" fill="currentColor" />
    </svg>
  );
}

export function Brand({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`brand ${compact ? "brand--compact" : ""}`}>
      <BrandMark className="brand__mark" />
      <span className="brand__name">centini<span>tech</span></span>
    </span>
  );
}

