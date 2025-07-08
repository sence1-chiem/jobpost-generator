import * as React from "react";

export interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
  className?: string;
}

export function Form({ children, className = "", ...props }: FormProps) {
  return (
    <form className={`space-y-6 ${className}`} {...props}>
      {children}
    </form>
  );
}

export function FormMessage({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={`text-red-500 text-sm ${className}`}>
      {children}
    </p>
  );
}

export function FormDescription({ className = "", children }: { className?: string; children: React.ReactNode }) {
  return (
    <p className={`text-muted-foreground text-sm ${className}`}>
      {children}
    </p>
  );
}

// ...other form exports...