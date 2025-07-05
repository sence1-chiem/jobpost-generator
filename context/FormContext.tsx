import React, { createContext, useContext, useState, ReactNode } from "react";

// 1. FormKeys type: "Q1" through "Q12"
export type FormKeys = `Q${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12}`;

// 2. FormState type: each key maps to string
export type FormState = {
  [K in FormKeys]: string;
};

// 3. initialFormState: all fields empty string
export const initialFormState: FormState = {
  Q1: "",
  Q2: "",
  Q3: "",
  Q4: "",
  Q5: "",
  Q6: "",
  Q7: "",
  Q8: "",
  Q9: "",
  Q10: "",
  Q11: "",
  Q12: "",
};

// 4. Context value type
type FormContextType = {
  values: FormState;
  setValue: (key: FormKeys, value: string) => void;
  setValues: (values: FormState) => void;
  reset: () => void;
};

// 5. Create context
const FormContext = createContext<FormContextType | undefined>(undefined);

// 6. Provider component
export const ProvideFormContext = ({ children }: { children: ReactNode }) => {
  const [values, setValues] = useState<FormState>(initialFormState);

  const setValue = (key: FormKeys, value: string) => {
    setValues((prev) => ({ ...prev, [key]: value }));
  };

  const reset = () => setValues(initialFormState);

  return (
    <FormContext.Provider value={{ values, setValue, setValues, reset }}>
      {children}
    </FormContext.Provider>
  );
};

// 7. useFormContext hook
export const useFormContext = () => {
  const ctx = useContext(FormContext);
  if (!ctx) throw new Error("useFormContext must be used within ProvideFormContext");
  return ctx;
};