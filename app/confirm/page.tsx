"use client";

import { useRouter } from "next/navigation";
import { useFormContext } from "../../context/FormContext";
import { questions } from "../../lib/questions";
import { Button } from "../../components/ui/button";
import React from "react";

export default function ConfirmPage() {
  const router = useRouter();
  const { values } = useFormContext();

  return (
    <div className="max-w-xl mx-auto mt-10 space-y-8">
      <h1 className="text-2xl font-bold mb-6">入力内容の確認</h1>
      <div className="space-y-6 bg-white rounded-lg shadow p-6">
        {questions.map(q => (
          <div key={q.id} className="border-b pb-4 mb-4 last:border-b-0 last:pb-0 last:mb-0">
            <div className="text-sm text-muted-foreground">{q.label}</div>
            <div className="mt-1 text-base break-words">
              {values[q.id.toUpperCase() as keyof typeof values] || <span className="text-gray-400">未入力</span>}
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between mt-8 gap-4">
        <Button type="button" onClick={() => router.push("/step/step4")}>
          戻る
        </Button>
        <Button type="button" onClick={() => {/* Call /api/generate here in next step */}}>
          生成する
        </Button>
      </div>
    </div>
  );
}