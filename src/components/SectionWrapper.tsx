import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
}

export default function SectionWrapper({ children, className = '', dark = false }: SectionWrapperProps) {
  return (
    <section className={`py-16 md:py-24 ${dark ? 'bg-neutral-900' : 'bg-black'} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
