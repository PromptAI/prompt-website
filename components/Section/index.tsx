import { ReactNode } from "react";

interface SectionProps {
  id?: string;
  children: ReactNode;
}
const Section = ({ id, children }: SectionProps) => {
  return (
    <section
      id={id}
      className="flex h-screen flex-col items-center justify-center py-12"
    >
      {children}
    </section>
  );
};

export default Section;
