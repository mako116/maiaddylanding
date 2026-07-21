interface LoccodeChipProps {
  code?: string;
}

export default function LoccodeChip({ code = "LA8A 1FU" }: LoccodeChipProps) {
  return (
    <span className="loccode">
      <span className="ring" />
      {code}
    </span>
  );
}
