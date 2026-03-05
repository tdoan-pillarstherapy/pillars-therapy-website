interface SectionDividerProps {
  pathD: string
  fill: string
}

export default function SectionDivider({ pathD, fill }: SectionDividerProps) {
  return (
    <div className="section-divider">
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d={pathD} fill={fill} />
      </svg>
    </div>
  )
}
