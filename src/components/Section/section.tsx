// src/components/Section/Section.tsx


import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center px-4">{children}</div>
    </section>
  );
};

export default Section;

export function SectionHeader({
  children,
  className,
  ...restProps
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "text-center flex flex-col justify-center items-center gap-1",
        className
      )}
      {...restProps}
    >
      {children}
    </div>
  );
}

export function SectionHeading({
  children,
  className,
  ...restProps
}: React.ComponentProps<"h2">) {
  return (
    <h2 className={cn("text-3xl font-bold mb-4", className)} {...restProps}>
      {children}
    </h2>
  );
}

export function SectionSubheading({
  children,
  className,
  ...restProps
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("text-gray-600 mb-12", className)} {...restProps}>
      {children}
    </p>
  );
}
