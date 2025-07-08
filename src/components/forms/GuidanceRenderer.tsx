"use client";

import React from "react";
import { FormDescription } from "@/components/ui/form";

interface GuidanceRendererProps {
  guidance: string;
}

export default function GuidanceRenderer({ guidance }: GuidanceRendererProps) {
  if (!guidance) return null;

  const lines = guidance.split("\n");
  if (lines.length > 1) {
    return (
      <div>
        {lines.map((line, idx) => (
          <p key={idx} className="text-muted-foreground text-sm">
            {line}
          </p>
        ))}
      </div>
    );
  }

  return (
    <p className="text-muted-foreground text-sm">
      {guidance}
    </p>
  );
}