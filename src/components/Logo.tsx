interface LogoProps {
  /** Ignored when using the SVG file — kept for API compat */
  fill?: string;
  ring?: string;
  size?: number;
}

export default function Logo({ size = 34 }: LogoProps) {
  return (
    <img
      src="/logo.svg"
      alt="Maiaddy logo"
      width={size}
      height={size}
      style={{ display: "block" }}
    />
  );
}
