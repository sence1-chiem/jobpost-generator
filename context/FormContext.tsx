"use client";

import React, { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

// Define your form state types and initial state here
type FormKeys = string; // adjust this type based on your actual keys
export type FormState = {
  // ... your form state fields
};

const initialFormState: FormState = {
  // ... your initial form state
};

// Custom hook for persisted form state
function usePersistedForm(key: string, initial: FormState): [FormState, (key: FormKeys, value: string) => void] {
  const [values, setValues] = useState<FormState>(() => {
    if (typeof window !== "undefined") {
      const stored = window.localStorage.getItem(key);
      if (stored) {
        try {
          return JSON.parse(stored);
        } catch {
          // ignore parse error
        }
      }
    }
    return initial;
  });

  // Debounce logic
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      window.localStorage.setItem(key, JSON.stringify(values));
    }, 300);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [key, values]);

  const setValue = (field: FormKeys, value: string) => {
    setValues(prev => ({ ...prev, [field]: value }));
  };

  return [values, setValue];
}

// Define your context and provider here
type FormContextType = {
  values: FormState;
  setValue: (key: FormKeys, value: string) => void;
  setValues: (values: FormState) => void;
  reset: () => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context) {
    throw new Error("useFormContext must be used within a ProvideFormContext");
  }
  return context;
};

export const ProvideFormContext = ({ children }: { children: ReactNode }) => {
  const [values, setValue] = usePersistedForm("jobgen.form", initialFormState);

  const setValues = (newValues: FormState) => {
    // Overwrite all values and persist
    Object.entries(newValues).forEach(([k, v]: [string, unknown]) => setValue(k as FormKeys, v as string));
  };

  const reset = () => setValues(initialFormState);

  return (
    <FormContext.Provider value={{ values, setValue, setValues, reset }}>
      {children}
    </FormContext.Provider>
  );
};

// Your component code here