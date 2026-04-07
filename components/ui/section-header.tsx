import { cn } from "@/lib/utils"

type SectionHeaderProps = {
  title: string
  subtitle?: string
  className?: string
  onLight?: boolean
}

export function SectionHeader({ title, subtitle, className, onLight }: SectionHeaderProps) {
  return (
    <div className={cn("text-center mb-14", className)}>
      <h2 className={cn("font-bold text-4xl lg:text-5xl mb-4", onLight ? "text-gray-900" : "text-white")}>{title}</h2>
      <div className="w-16 h-1 bg-brand mx-auto mb-4 rounded-full" />
      {subtitle && <p className="text-brand font-semibold text-base">{subtitle}</p>}
    </div>
  )
}
