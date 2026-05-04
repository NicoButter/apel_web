import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: React.ElementType;
}

export function Section({
  children,
  className,
  id,
  as: Tag = "section",
}: SectionProps) {
  return (
    <Tag id={id} className={cn("py-12 md:py-16 lg:py-20", className)}>
      {children}
    </Tag>
  );
}
